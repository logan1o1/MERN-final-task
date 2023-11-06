import React from 'react'
import Card from './Card';

export default function ItemsToday() {
    const featuredAuctions = [
        {
          id: 1,
          title: "Auction 1",
          description: "This is a description of the first auction.",
          imageUrl: "https://placehold.it/300x200",
        },
        {
          id: 2,
          title: "Auction 2",
          description: "This is a description of the second auction.",
          imageUrl: "https://placehold.it/300x200",
        },
        {
          id: 3,
          title: "Auction 3",
          description: "This is a description of the third auction.",
          imageUrl: "https://placehold.it/300x200",
        },
      ];

    //   const allAuctions = [
    //     {
    //       id: 4,
    //       title: "Auction 4",
    //       description: "This is a description of the fourth auction.",
    //       imageUrl: "https://placehold.it/300x200",
    //     },
    //     {
    //       id: 5,
    //       title: "Auction 5",
    //       description: "This is a description of the fifth auction.",
    //       imageUrl: "https://placehold.it/300x200",
    //     },
    //     {
    //       id: 6,
    //       title: "Auction 6",
    //       description: "This is a description of the sixth auction.",
    //       imageUrl: "https://placehold.it/300x200",
    //     },
    //   ];
    
  return (
    <div className="home-page">

      <main>
        <section className="featured-auctions font-bold text-2xl">
          <h1>Featured Auctions</h1>
          <div className="auction-carousel flex ">
            {featuredAuctions.map((auction) => (
              <Card key={auction.id} auction={auction} />
            ))}
          </div>
        </section>

        {/* <section className="browse-auctions">
          <h1>Browse Auctions</h1>
          <div className="auction flex">
            {allAuctions.map((auction) => (
              <Card key={auction.id} auction={auction} />
            ))}
          </div>
        </section> */}
      </main>
    </div>
  )
}
