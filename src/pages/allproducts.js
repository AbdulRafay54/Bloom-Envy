import Image from "next/image";
import { useState } from "react";

const allProducts = [
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
    price: "PKR 1500",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 45,
    },
  },
  {
    id: 2,
    name: "You Chocolate Bouquet",
    category: "Chocolate Bouquet",
    images: ["/images/youchoc2.jpeg", "/images/youchoc1.jpeg"],
    description:
      "You Chocolate Bouquet is the perfect gift for any occasion, whether it's a birthday, anniversary, or any special event. Made with delicious chocolate, it's a sweet and thoughtful way to show someone you care.",
    price: "PKR 1500",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 37,
    },
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
    price: "PKR 300",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 37,
    },
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
    price: "PKR 2300",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 36,
    },
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
    price: "PKR 250",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 38,
    },
  },
  {
    id: 6,
    name: "Red Ribbon Rose Bouquet",
    category: "Ribbon Flower Bouquet",
    images: [
      "/images/rose1.jpeg",
      "/images/rose2.jpeg",
      "/images/rose3.jpeg",
      "/images/rose4.jpeg",
    ],
    description:
      "Ribbon Red Rose makes a beautiful gift for any occasion, be it a birthday, anniversary, or special celebration. Its stunning red ribbon design adds a unique and thoughtful touch to express your love and care",
    price: "PKR 850",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 35,
    },
  },
  {
    id: 7,
    name: "Chocolate Delight Bouquett",
    category: "Chocolate Bouquet",
    images: [
      "/images/printed1.jpeg",
      "/images/printed2.jpeg",
      "/images/printed3.jpeg",
    ],
    description:
      "Chocolate Delight Bouquet makes a sweet gift for any occasion, be it a birthday, anniversary, or celebration. Filled with KitKat, Bisconni, and chocolates, it adds a delicious and joyful touch to express your love and care",
    price: "PKR 1500",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 30,
    },
  },
  {
    id: 8,
    name: "DairyMilk Chocolate Bouquet",
    category: "Chocolate Bouquet",
    images: [
      "/images/dairymilk1.jpeg",
      "/images/dairymilk2.jpeg",
      "/images/dairymilk3.jpeg",
    ],
    description:
      "Dairy Milk Bouquet makes a perfect gift for any occasion, whether it's a birthday, anniversary, or special event. Filled with creamy Dairy Milk bars, it brings a sweet and thoughtful touch to show your love and affection",
    price: "PKR 2100",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 40,
    },
  },
  {
    id: 9,
    name: "Single Blue Ribbon Rose",
    category: "Ribbon Flower Bouquet",
    images: ["/images/ribbonblue.jpeg"],
    description:
      "Single Blue Ribbon Rose is a graceful gift for any moment, whether it’s a birthday, anniversary, or special gesture. Its elegant blue ribbon design adds a peaceful and charming touch to convey your love and feelings",
    price: "PKR 500",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-4 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 5,
    },
  },
  {
    id: 10,
    name: "Single Red Ribbon Rose",
    category: "Ribbon Flower Bouquet",
    images: ["/images/red.jpeg"],
    description:
      "Single Red Ribbon Rose is a lovely gift for any occasion, be it a birthday, anniversary, or romantic surprise. Its vibrant red ribbon design brings a warm and heartfelt touch to express your love and emotions",
    price: "PKR 350",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "2-3 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 5,
    },
  },
  {
    id: 11,
    name: "Triple Red Ribbon Roses",
    category: "Ribbon Flower Bouquet",
    images: ["/images/redbouquet2.jpeg", "/images/redbouquet1.jpeg"],
    description:
      "Triple Red Ribbon Roses make a romantic gift for special moments, be it a birthday, anniversary, or surprise gesture. Their rich red ribbon design adds a meaningful and elegant touch to express deep love and affection",
    price: "PKR 750",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "2-4 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 10,
    },
  },
  {
    id: 12,
    name: "Crunchy Snack Bouquet",
    category: "Snack Bouquet",
    images: ["/images/snacksbouquet.jpg", "/images/snacksbouquet2.jpg"],
    description:
      "Crunchy Snack Bouquet is a fun and tasty gift for birthdays, casual surprises, or parties. Packed with a mix of chips, chocolates, and treats, it adds a playful and flavorful touch to make any moment extra special.",
    price: "PKR 1250",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "2-4 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 20,
    },
  },

  {
    id: 13,
    name: "Deluxe Snacks Basket",
    category: "Gift Basket",
    images: [
      "/images/basket3.jpeg",
      "/images/basket2.jpeg",
      "/images/basket1.jpeg",
      "/images/basket4.jpeg",
    ],
    description:
      "Deluxe Snacks Basket is a fun and tasty gift for any event, whether it’s a birthday, get-together, or celebration. Filled with assorted snacks and goodies, it adds a joyful and flavorful touch to share happiness and care",
    price: "PKR 3000",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "2-4 Days",
    reviews: {
      rating: 4.9,
      totalReviews: 15,
    },
  },
  {
    id: 14,
    name: "Premium Snacks Basket",
    category: "Gift Basket",
    images: ["/images/sbasket1.jpeg", "/images/sbasket2.jpeg"],
    description:
      "Premium Snacks Basket makes a cheerful gift for any occasion, be it a birthday, movie night, or casual hangout. Packed with a variety of tasty treats, it offers a delightful and thoughtful way to enjoy and share the moment",
    price: "PKR 2500",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "2-4 Days",
    reviews: {
      rating: 4.9,
      totalReviews: 12,
    },
  },

  // Add more products...
];

const Modal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [isClicked, setIsClicked] = useState(false);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-7xl h-full p-8 overflow-y-auto relative rounded-lg shadow-xl">
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
                <a href={activeImage} download className="Btn">
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
          {/* Right Section (Product Details) */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-800 via-pink-600 to-red-800 bg-clip-text text-transparent mb-4">
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
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
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

            {/* Reviews */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reviews
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  {Array.from({
                    length: Math.floor(product.reviews.rating),
                  }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                  {product.reviews.rating % 1 !== 0 && "☆"}
                </span>
                <span className="ml-2 text-gray-600">
                  ({product.reviews.rating}/5 - {product.reviews.totalReviews}{" "}
                  reviews)
                </span>
              </div>
            </div>

            {/* Payment Policy */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Payment Policy
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To confirm your order,{" "}
                <span className="text-red-600 font-semibold">
                  50% advance payment
                </span>{" "}
                is required. Once your bouquet is ready, we will share its
                picture with you for approval. After your confirmation, the
                remaining 50% will be collected and your order will be
                delivered.
              </p>
            </div>

            <div className="text-lg font-semibold mb-4">
              <span className="text-red-600">Delivery Across Pakistan:</span>{" "}
              Available
            </div>
            <div className="mt-4 font-semibold text-lg">
              <span className="text-red-700">*</span>{" "}
              <span className="text-gray-800">Please</span>{" "}
              <span className="text-pink-600 font-bold">select</span> and{" "}
              <span className="text-pink-600 font-bold">download</span> your
              preferred <span className="text-red-700 font-bold">image</span>{" "}
              first. Then click{" "}
              <span className="text-pink-600 font-bold">"Buy Now"</span> to
              place your order with this image on{" "}
              <span className="text-green-600 font-bold">WhatsApp</span>.
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button className="w-full sm:w-[535px] bg-gradient-to-r from-red-800 to-pink-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-800 transition duration-300">
                Buy Now ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
            className="portfolio-card p-6 rounded-lg shadow-lg hover:shadow-[inset_0_0_25px_#ff1493, inset_0_0_25px_#ff3366] hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
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

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default AllProducts;
