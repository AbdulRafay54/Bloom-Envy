import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Blue Ribbon Rose Bouquet",
    category: "Ribbon Flower",
    images: [
      "/images/about.png",
      "/images/ribbon2.jpg",
      "/images/ribbon3.jpg",
    ],
    description:
      "A unique and artistic rose crafted entirely from blue ribbon, showcasing intricate design and elegance. Perfect for adding a special touch to gifts or décor.",
    price: "$49.99",
    location: "New York, USA",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 2,
    name: "Chocolate Love Delight",
    category: "Chocolate",
    images: [
      "/images/chocolate1.jpg",
      "/images/chocolate2.jpg",
      "/images/chocolate3.jpg",
    ],
    description: "A bouquet filled with chocolates and sweet surprises.",
    price: "$29.99",
    location: "California, USA",
    delivery: "Standard Delivery",
    daysToDeliver: "5-7 Days",
  },
  // Add more products with "images" array
];

const Modal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [isClicked, setIsClicked] = useState(false); // To manage icon color change

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white w-full h-full p-8 overflow-y-auto relative rounded-lg">
        <button
          className={`absolute top-4 right-6 text-5xl font-bold ${isClicked ? "text-red-700" : "text-gray-700"} hover:text-red-700 transition-all`}
          onClick={() => { 
            onClose();
            setIsClicked(true); 
          }}
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-8 mt-12 lg:mt-24">
          {/* Left Section (Image Gallery) */}
          <div className="flex-1">
            <img
              src={activeImage}
              alt="Selected"
              className="w-full h-[350px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            />
            <div className="flex gap-4 mt-4 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Thumbnail"
                  className={`h-20 w-20 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    activeImage === img ? "border-red-500" : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right Section (Product Details) */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-red-800 mb-4">{product.name}</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Description</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Details</h3>
              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  <span className="text-red-600">Price:</span> {product.price}
                </div>
                <div className="text-lg font-semibold">
                  <span className="text-red-600">Location:</span> {product.location}
                </div>
              </div>
              <div className="text-lg font-semibold mt-2">
                <span className="text-red-600">Delivery:</span> {product.delivery}
              </div>
              <div className="text-lg font-semibold mt-2">
                <span className="text-red-600">Expected Delivery:</span> {product.daysToDeliver}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <div className="text-lg font-semibold mb-2">
                <span className="text-red-600">Fast Delivery:</span> Yes, within {product.daysToDeliver} days
              </div>
              <div className="text-lg font-semibold mb-4">
                <span className="text-red-600">Delivery Across Pakistan:</span> Available
              </div>
            </div>

            {/* Rating & Tags */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rating & Tags</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★★★★☆</span> {/* Example rating */}
                <span className="ml-2 text-gray-600">(4.5/5 - 120 reviews)</span>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700">Popular</span>
                <span className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700">Trending</span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 flex justify-between items-center">
              <button className="button w-full sm:w-[535px]">
                <span className="button_lg px-8 py-3">
                  <span className="button_sl"></span>
                  <span className="button_text text-white font-[cursive] font-semibold transition-all duration-500">
                    Buy Now ➤
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-20 ">
      <div className="text-center about mb-12">
      <h1 className="text-4xl name sm:text-5xl font-semibold tracking-wide group hover:text-pink-600 transition-colors duration-300 font-serif">
            <span className="text-red-800 group-hover:text-pink-600 transition-colors duration-300">
              Our
            </span>
            <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
              {" "}
              Products
            </span>
          </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_15px_#ff1493] hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
            />
            <h3 className="text-lg sm:text-xl font-bold mt-4 text-red-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {product.description.split(" ").slice(0, 15).join(" ")}...
            </p>
            <button className="mt-4 bg-gradient-to-r from-red-800 to-pink-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
