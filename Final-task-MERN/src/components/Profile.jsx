import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function Profile() {
  const [items, setItems] = useState([]);
  const usId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let result = await fetch("http://localhost:4000/items");
    result = await result.json();
    // console.log(result);

    setItems(result);
  };

  return (
    <div className="home-page w-full">
      <main>
        <section className="featured-auctions font-bold text-2xl mt-5">
          <h1 className="text-center">Items Added</h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ml-8 mb-8">
            {items.length > 0 ? (
              items.map((items) =>
                items.userId === usId ? (
                  <div className="w-[300px] rounded-md border bg-gray-900">
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
                ) : (
                  <></>
                )
              )
            ) : (
              <h2>No results found</h2>
            )}
          </div>
        </section>
        <section className="featured-auctions font-bold text-2xl mt-5">
          <h1 className="text-center">Items Bought</h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ml-8 mb-8">
          </div>
        </section>
      </main>
    </div>
  );
}
