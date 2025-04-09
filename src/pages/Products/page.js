import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Giant Snack Bouquet",
    category: "Snack Bouquet",
    images: [
      "/images/snack3.jpeg",
      "/images/snack2.jpeg",
      "/images/snack1.jpeg",
    ],
    description:
      "Giant Snack Bouquet is the perfect gift for any occasion, whether it's a birthday, anniversary, or special event. Filled with a variety of delicious snacks, it's a fun and thoughtful way to show someone you care.",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 2,
    name: "You Chocolate Bouquet",
    category: "Chocolate Bouquet",
    images: ["/images/youchoc2.jpeg", "/images/youchoc1.jpeg"],
    description:
      "You Chocolate Bouquet is the perfect gift for any occasion, whether it's a birthday, anniversary, or any special event. Made with delicious chocolate, it's a sweet and thoughtful way to show someone you care.",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 3,
    name: "Mini Ribbon Rose Bouquet",
    category: "Ribbon Flower",
    images: [
      "/images/minirose1.jpeg",
      "/images/minirose2.jpeg",
      "/images/minirose1.jpeg",
    ],
    description:
      "Mini Rose Bouquet is an ideal gift for any occasion, be it a birthday, anniversary, or special celebration. Its charming roses make it a lovely and thoughtful way to express your care.",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 4,
    name: "Glam Choco Bouquet",
    category: "Jewellery and Chocolate Bouquet",
    images: [
      "/images/glamchoco2.jpeg",
      "/images/glamchoco1.jpeg",
      "/images/glamchoco3.jpeg",
      "/images/glamchoco4.jpeg",
    ],
    description:
      "Glam Choco Bouquet is a perfect gift for any occasion, whether it's a birthday, anniversary, or special event. With its rich and luxurious chocolates, it's a glamorous and thoughtful way to show someone you care.",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 5,
    name: "Mini Chocolate Bouquet",
    category: "Chocolate Bouquet",
    images: [
      "/images/minichoco1.jpeg",
      "/images/minichoco2.jpeg",
      "/images/minichoco3.jpeg",
    ],
    description:
      "Mini Chocolate Bouquet is an ideal gift for kids on any occasion, whether it's a birthday, celebration, or special event. Filled with delicious chocolates, it's a sweet and fun way to make their day extra special.",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
  {
    id: 6,
    name: "Blue Ribbon Rose Bouquet",
    category: "Ribbon Flower Bouquet",
    images: [
      "/images/rose1.jpeg",
      "/images/rose2.jpeg",
      "/images/rose3.jpeg",
      "/images/rose4.jpeg",
    ],
    description:
      "Ribbon Red Rose makes a beautiful gift for any occasion, be it a birthday, anniversary, or special celebration. Its stunning red ribbon design adds a unique and thoughtful touch to express your love and care",
    price: "₨ 1500",
    location: "Karachi, Pakistan",
    delivery: "Free Delivery",
    daysToDeliver: "3-5 Days",
  },
];

const Modal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [isClicked, setIsClicked] = useState(false);

  if (!product) return null;

  const handleBuyNowClick = () => {
    const message = `Hello Bloomenvy, I Want to buy this please sent me details`;
    const phoneNumber = "+923303049866";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white w-full h-full p-8 overflow-y-auto relative rounded-lg">
        <button
          className={`absolute top-4 right-6 text-5xl font-bold ${
            isClicked ? "text-red-700" : "text-gray-700"
          } hover:text-red-700 transition-all`}
          onClick={() => {
            onClose();
            setIsClicked(true);
          }}
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-8 mt-12 lg:mt-24">
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
                    activeImage === img
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-4">
              <div className="mt-4">
                <a
                  href={activeImage}
                  download
                  className="Btn"
                >
                  <svg
                    className="svgIcon"
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                  </svg>
                  <span className="icon2"></span>
                  <span className="tooltip">Download</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              {product.name}
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Product Description
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Product Details
              </h3>
              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  <span className="text-red-600">Price:</span> {product.price}
                </div>
                <div className="text-lg font-semibold">
                  <span className="text-red-600">Location:</span>{" "}
                  {product.location}
                </div>
              </div>
              <div className="text-lg font-semibold mt-2">
                <span className="text-red-600">Delivery:</span>{" "}
                {product.delivery}
              </div>
              <div className="text-lg font-semibold mt-2">
                <span className="text-red-600">Expected Delivery:</span>{" "}
                {product.daysToDeliver}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-lg font-semibold mb-2">
                <span className="text-red-600">Fast Delivery:</span> Yes, within{" "}
                {product.daysToDeliver} days
              </div>
              <div className="text-lg font-semibold mb-4">
                <span className="text-red-600">Delivery Across Pakistan:</span>{" "}
                Available
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Rating & Tags
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★★★★☆</span>{" "}
                <span className="ml-2 text-gray-600">
                  (4.5/5 - 120 reviews)
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700">
                  Popular
                </span>
                <span className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700">
                  Trending
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                className="button w-full sm:w-[535px]"
                onClick={handleBuyNowClick}
              >
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
            className="portfolio-card p-6 rounded-lg shadow-lg hover:shadow-[inset_0_0_25px_#ff1493, inset_0_0_25px_#ff3366] hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full  h-50 sm:h-56 md:h-64 object-cover rounded-lg"
            />
            <h3 className="text-lg font-[cursive] sm:text-xl font-bold mt-4 text-red-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2 font-[cursive] text-lg font-bold sm:text-base">
              {product.description
                .split(" ")
                .slice(0, 15)
                .join(" ")}
              ...
            </p>
            <button className="mt-4 font-[cursive] bg-gradient-to-r from-red-800 to-pink-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div class="flex justify-end">
        <Link
          href="/allproducts"
          className="mt-6 buttton bg-red-700 text-white border border-red-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group inline-block"
        >
          <span className="bg-pink-800 font-[cursive] shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          View More....
        </Link>
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
