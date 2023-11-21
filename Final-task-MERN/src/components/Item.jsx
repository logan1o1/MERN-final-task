import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  let [bid, setBid] = useState("");
  // const [minBid, setMinBid] = useState("")
  const [topBidder, setTopBidder] = useState("");
  // const [timerSeconds, setTimerSeconds] = useState(5);
  // const [previousBids, setPreviousBids] = useState([]);
  // const bidInputRef = useRef(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [seller, setSeller] = useState("");
  const [desc, setDesc] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const userName = JSON.parse(localStorage.getItem("user")).name;
  const params = useParams();

  const getDetails = async () => {
    let result = await fetch(`http://localhost:4000/item/${params.id}`);
    result = await result.json();
    // console.log(result);

    setName(result.name);
    setImage(result.image);
    setSeller(result.seller);
    setDesc(result.desc);
    // setBid(result.minBid);
  };

  const bidDetails = async () => {
    let result = await fetch(`http://localhost:4000/item/${params.id}`);
    result = await result.json();
    const itemId = result._id;
    let bid = result.minBid;

    let bids = await fetch("http://localhost:4000/bidd", {
      method: "post",
      body: JSON.stringify({ userName, userId, itemId, bid }),
      headers: {
        "Content-type": "application/json",
      },
    });
    bids = await bids.json();
    // console.log(bid);
    setBid(bids.bid);
    // console.log(bid);
  };

  useEffect(() => {
    getDetails();
    return () => bidDetails();
  }, []);

  const handleBid = async () => {
    try {
      let newBid = await fetch(`http://localhost:4000/bidd/${params.id}`, {
        method: "put",
        body: JSON.stringify({ bid }),
        headers: {
          "Content-type": "application/json",
        },
      });
      newBid = await newBid.json();
      console.log(newBid);
      console.log(params.id);

      if (newBid.acknowledged) {
        setBid(bid);
        console.log("Bid updated successfully");
      } else {
        console.error("Bid update failed");
      }
    } catch (error) {
      console.error("Error updating bid:", error);
    }
  };

  return (
    <div className="container mx-auto bg-gray-900 text-gray-100 p-8 min-h-screen">
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="mt-7 text-center">
        <h3 className="text-3xl font-semibold">by {seller}</h3>
      </div>

      {/* Main Content */}
      <main className="mt-8 flex justify-center items-center">
        {/* Left side box with item image */}
        <div className="w-1/2 p-4 border border-gray-600 rounded-lg shadow-md">
          <img
            src={String(image)}
            alt="Item Image"
            className="w-full object-contain rounded-lg"
            // width= "100px"
          />
        </div>

        {/* Spacer */}
        <div className="w-8"></div>

        {/* Right side box with item description */}
        <div className="w-1/2 p-4 border border-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Item Description</h2>
          <p className="text-lg">{desc}</p>
        </div>
      </main>

      <div className="text-center mt-8">
        <p className="text-xl font-bold">
          Bidding Timer: 00:
          {/* {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds} */}
        </p>
      </div>

      {/* <h1 className="text-center mt-3 font-semibold">the bid starts from {minBid}</h1> */}
      <div className="flex items-center justify-center mt-8">
        <input
          type="text"
          placeholder="Enter your bid"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          className="p-2 mr-4 border bg-gray-600 text-gray-100 rounded-md"
        />
        <button
          onClick={handleBid}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Place Bid
        </button>
      </div>

      {/* Top Bidder */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">Top Bidder: {topBidder}</h2>
      </div>

      {/* Previous Bids Box */}
      {/* <div className="fixed bottom-0 right-0 p-4 border-t border-l border-gray-600 bg-gray-800 max-h-40 overflow-y-auto" ref={bidInputRef}>
        <h2 className="text-lg font-bold mb-2">Previous Bids</h2>
        {previousBids.map((bid, index) => (
          <div key={index} className="mb-2">
            {`${bid.bidder} - $${bid.amount}`}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Item;
