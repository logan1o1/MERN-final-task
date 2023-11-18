import React, { useState, useEffect, useRef } from 'react';

const Item = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [topBidder, setTopBidder] = useState('Akshat');
  const [timerSeconds, setTimerSeconds] = useState(5);
  const [previousBids, setPreviousBids] = useState([]);
  const bidInputRef = useRef(null);

  const handleBid = () => {
    if (timerSeconds > 0) {
      setTopBidder('New Bidder');
      setPreviousBids((prevBids) => [...prevBids, { bidder: 'New Bidder', amount: bidAmount }]);
      setBidAmount('');
      
      setTimerSeconds(5);
      
      bidInputRef.current.scrollTop = bidInputRef.current.scrollHeight;
    } else {
      
      alert("You can't place a bid now. The timer has reached 0.");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        
        setTimerSeconds(5);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerSeconds]);

  return (
    <div className="container mx-auto bg-gray-900 text-gray-100 p-8 min-h-screen">
      {/* Item Name */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold">Item Name</h1>
      </div>

      {/* Main Content */}
      <main className="mt-8 flex justify-center items-center">
        {/* Left side box with item image */}
        <div className="w-1/2 p-4 border border-gray-600 rounded-lg shadow-md">
          <img
            src="/path/to/your/item-image.jpg"
            alt="Item Image"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Spacer */}
        <div className="w-8"></div>

        {/* Right side box with item description */}
        <div className="w-1/2 p-4 border border-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Item Description</h2>
          <p className="text-lg">Your item description goes here.</p>
        </div>
      </main>

      {/* Bidding Timer */}
      <div className="text-center mt-8">
        <p className="text-xl font-bold">Bidding Timer: 00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</p>
      </div>

      {/* Bidding Input and Button */}
      <div className="flex items-center justify-center mt-8">
        <input
          type="number"
          placeholder="Enter your bid"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="p-2 mr-4 border bg-gray-600 text-gray-100 rounded-md"
        />
        <button onClick={handleBid} className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Place Bid
        </button>
      </div>

      {/* Top Bidder */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">Top Bidder: {topBidder}</h2>
      </div>

      {/* Previous Bids Box */}
      <div className="fixed bottom-0 right-0 p-4 border-t border-l border-gray-600 bg-gray-800 max-h-40 overflow-y-auto" ref={bidInputRef}>
        <h2 className="text-lg font-bold mb-2">Previous Bids</h2>
        {previousBids.map((bid, index) => (
          <div key={index} className="mb-2">
            {`${bid.bidder} - $${bid.amount}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
