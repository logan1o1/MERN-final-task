import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function PlaceBid() {
  const [bid, setBid] = useState("");
  const params = useParams();

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

      <div className="text-center mt-8">
        {/* <h2 className="text-2xl font-bold">Top Bidder: {topBidder}</h2> */}
      </div>
    </div>
  );
}
