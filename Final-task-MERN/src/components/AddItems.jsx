import React, { useState } from "react";
import '../css/Btn.css'

export default function AddItems() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [seller, setSeller] = useState("");
  const [desc, setDesc] = useState("");
  const [minBid, setMinBid] = useState("");

  const addItems = async (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:4000/add", {
      method: "post",
      body: JSON.stringify({name, image, seller, desc, minBid, userId}),
      headers: {
        "Content-type": "application/json",
      },
    })
    result = await result.json();

    setName("")
    setImage("")
    setSeller("")
    setDesc("")
    setMinBid("")
  };

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-center text-2xl font-bold">Add Item to Auction</h1>

      <form className="flex flex-col mt-10" onSubmit={addItems}>
        <label htmlFor="name">Item Name</label>
        <input
          type="text"
          className="w-full pb-2 border border-gray-300 rounded-md"
          placeholder="Enter the name of the item"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="pt-2" htmlFor="image">Item Image</label>
        <input
          type="text"
          className="w-full pb-2 border border-gray-300 rounded-md "
          placeholder="Enter the image of your item"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <label className="pt-2" htmlFor="seller">Seller's Name</label>
        <input
          type="text"
          className="w-full pb-2 border border-gray-300 rounded-md "
          placeholder="Enter the seller's name"
          value={seller}
          onChange={(event) => setSeller(event.target.value)}
        />
        <label className="pt-2" htmlFor="desc">Item Description</label>
        <textarea
          type="text"
          className="w-full pb-2 border border-gray-300 rounded-md"
          placeholder="Enter your item description"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
        <label className="pt-2" htmlFor="minbid">Minimum Bid</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md "
          placeholder="Enter minimun bid"
          value={minBid}
          onChange={(event) => setMinBid(event.target.value)}
        />

        <div  className="btn pl-50% pt-4 pb-4 space-y-2 justify-center">
          <button
            type="submit"
            className="rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
