import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemsToday() {
  const [items, setItems] = useState([]);
  const usId = JSON.parse(localStorage.getItem("user"))._id

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let result = await fetch("http://localhost:4000/items");
    result = await result.json();
    console.log(result);

    setItems(result);
    // items.map((items) => console.log(typeof(items.image)))
    // console.log(typeof items);
    // console.log(typeof String(items.image));
  };

  return (
    <div className="home-page w-full">
      <main>
        <section className="featured-auctions font-bold text-2xl">
          <h1 className="text-center">Featured Items</h1>
          <div className="auction-carousel flex lg:space-x-3 pt-4 pb-4 pl-4 pr-74">
            {items.length > 0 ? (
              items.map((items) => (
                items.userId === usId ? <></> :
                <div className="w-[300px] rounded-md border">
                  <img
                    src={String(items.image)}
                    alt="item"
                    className="h-[200px] w-full rounded-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold">{items.name}</h1>
                    <p className="mt-3 text-sm text-gray-600">{items.desc}</p>
                    <button
                      type="button"
                      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Link to={`/item/${items._id}`}>View</Link>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2>No results found</h2>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
