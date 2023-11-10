// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const text =
  "AuctionOFF.com, your one-stop shop for amazing deals and exciting auctions! Discover a wide variety of items up for bid, from electronics and collectibles to cars and antiques. With our user-friendly platform, you can easily browse, bid, and win the items you've always wanted. So start bidding today and see what treasures await you!";
  

  const words = text.split(" ");

  return (
    <BackgroundImage imageUrl="/Images/NewBG2.png">
      <div className={`text-black absolute top-1 left-0 p-8 transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <h1 className="font-bold text-2xl">
          {words.map((word, index) => (
            <span key={index} className="word">
              {word}{" "}
            </span>
          ))}
        </h1>
        {/* Add more content as needed */}
      </div>
    </BackgroundImage>
  );
};

export default Home;