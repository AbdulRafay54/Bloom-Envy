import { useState } from "react";

const allProducts = [
  // Add 20 products here, following the same structure
  {
    id: 1,
    name: "Blue Ribbon Rose Bouquet",
    category: "Ribbon Flower",
    images: ["/images/about.png", "/images/ribbon2.jpg", "/images/ribbon3.jpg"],
    description: "A unique and artistic rose crafted entirely from blue ribbon...",
    price: "$49.99",
    location: "New York, USA",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  // Add other products as needed
];

const AllProducts = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-20 ">
      <div className="text-center about mb-12">
        <h1 className="text-4xl name sm:text-5xl font-semibold tracking-wide group hover:text-pink-600 transition-colors duration-300 font-serif">
          <span className="text-red-800 group-hover:text-pink-600 transition-colors duration-300">
            All
          </span>
          <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
            {" "}
            Products
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold text-red-800">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
