import React, { useState } from "react";
import '../css/Btn.css'

export default function AddItems() {
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [minimumBid, setMinimumBid] = useState( );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-2xl font-bold">Add Item to Auction</h1>

      <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Item Name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />

        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md mt-5"
          placeholder="Item Image"
          value={itemImage}
          onChange={(event) => setItemImage(event.target.files[0])}
        />

        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mt-5"
          placeholder="Seller Name"
          value={sellerName}
          onChange={(event) => setSellerName(event.target.value)}
        />

        <textarea
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mt-5"
          placeholder="Item Description"
          value={itemDescription}
          onChange={(event) => setItemDescription(event.target.value)}
        />

        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md mt-5"
          placeholder="Minimum Bid"
          value={minimumBid}
          onChange={(event) => setMinimumBid(event.target.value)}
        />

        <div className="btn pl-50%  space-y-2 justify-center">
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
