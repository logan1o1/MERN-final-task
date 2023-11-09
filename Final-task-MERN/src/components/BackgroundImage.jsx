import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, zIndex: -1 }}
      />
      <div className="flex items-center justify-start h-full p-8">
        <div className="text-white text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
