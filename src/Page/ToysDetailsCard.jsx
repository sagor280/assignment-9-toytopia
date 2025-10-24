import React from "react";
import { Star } from "lucide-react";
import { toast } from "react-toastify";

const ToysDetailsCard = ({ toy }) => {
  const handleTryNow = (e) => {
  e.preventDefault();
  toast.success("Your request has been submitted successfully!");
};
  return (
    <div className="space-y-6">
    
      <div>
        <h1 className="text-4xl font-bold mb-2">{toy.toyName}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.round(toy?.rating) ? "fill-current" : "fill-none"}`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold">({toy?.rating})</span>
        </div>
        <p className="text-3xl font-bold text-blue-600">${toy?.price}</p>
      </div>

      {/* Seller & Product Info Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">Seller Information</h3>
          <p className="text-gray-600">Name: {toy?.sellerName}</p>
          <p className="text-gray-600">Email: {toy?.sellerEmail}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Product Details</h3>
          <p className="text-gray-600">Category: {toy?.subCategory}</p>
          <p className="text-gray-600">
            Available Quantity: <span className="font-semibold text-black">{toy?.availableQuantity}</span> units
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-gray-600">{toy?.description}</p>
        </div>
      </div>

      
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-4">Try Before You Buy!</h3>
        <p className="text-gray-600 mb-4">
          Interested in trying this toy? Fill out the form below and we’ll arrange a demo.
        </p>
        <form onSubmit={handleTryNow} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
            <input
              id="name"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Your Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-md font-semibold hover:opacity-90"
          >
            Try Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToysDetailsCard;
