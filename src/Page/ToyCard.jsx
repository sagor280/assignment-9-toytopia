import React from "react";

const ToyCard = ({ toyName, pictureURL, price, rating, availableQuantity }) => {
  return (
     <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-2 flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition">
          {toyName}
        </h3>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Available:</span>{" "}
          {availableQuantity} units
        </p>

        <div className="flex items-center gap-1 text-yellow-500 font-semibold">
          ⭐ <span className="text-gray-700">{rating}</span>
        </div>
      </div>

      {/* View More Button */}
      <div className="px-5 pb-5">
        <button
            className="px-5 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
        
        
          View More
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
