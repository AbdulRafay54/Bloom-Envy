import Link from "next/link";
import { useState } from "react";

const products = [
  {
  id: 1,
  name: "Blossom Ribbon Flower Bouquet",
  category: "Ribbon Flower Bouquet",
  images: [
    "/images/ribbon1.jpeg",
    "/images/ribbon2.jpeg",
    "/images/ribbon3.jpeg",
    "/images/ribbon4.jpeg",

  ],
  description:
    "Celebrate special moments with our Blossom Ribbon Flower Bouquet — a handcrafted arrangement made with delicate ribbon flowers that never wilt. A perfect token of love, elegance, and creativity, ideal for birthdays, anniversaries, or as a lasting decorative gift.",
  price: "PKR 2550",
  location: "Karachi, Pakistan",
  delivery: "Based on location",
  daysToDeliver: "5-7 Days",
  reviews: {
    rating: 5,
    totalReviews: 4,
  },
},
  {
  id: 2,
  name: "Elegant Cash Surprise Bouquet",
  category: "Cash Bouquet",
  images: [
    "/images/cash (4).jpg",
    "/images/cash (2).jpg",
    "/images/cash (3).jpg",
    "/images/cash (1).jpg",

  ],
  description:
    "Surprise your loved ones with the Elegant Cash Surprise Bouquet — a graceful fusion of floral charm and PKR 5000 in beautifully folded notes. Perfect for birthdays, weddings, or any special celebration where elegance meets generosity.",
  price: "PKR 6800",
  location: "Karachi, Pakistan",
  delivery: "Based on location",
  daysToDeliver: "5-7 Days",
  reviews: {
    rating: 5,
    totalReviews: 6,
  },
},

  {
    id: 3,
    name: "Bittens Chocolate Bouquet",
    category: "Chocolate Bouquet",
    images: [
      "/images/birthdaybouquet.jpeg",
      "/images/birthdaybouquet1.jpeg",
      "/images/birthdaybouquet.jpeg",
    ],
    description:
      "Make birthdays extra special with the Sweet Bittens Chocolate Bouquet  a luxurious arrangement of premium chocolates wrapped to perfection. It's the perfect blend of elegance and sweetness to surprise your loved ones.",
    price: "PKR 790",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 30,
    },
  },
  {
    id: 4,
    name: "Dairy Delight Bouquet",
    category: "Chocolate Bouquet",
    images: [
      "/images/dairydelight1.jpeg",
      "/images/dairydelight.jpeg",
      "/images/dairydelight1.jpeg",
    ],
    description:
      "Make birthdays extra special with the Dairy Delight Bouquet  a luxurious arrangement of premium chocolates wrapped to perfection. It's the perfect blend of elegance and sweetness to surprise your loved ones.",
    price: "PKR 450",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 15,
    },
  },
  {
    id: 5,
    name: "Pink Rose Bouquet",
    category: "Flower Bouquet",
    images: [
      "/images/pinkrose1.jpeg",
      "/images/pinkrose2.jpeg",
      "/images/pinkrose3.jpeg",
    ],
    description:
      "Ribbon Red Rose makes a beautiful gift for any occasion, be it a birthday, anniversary, or special celebration. Its stunning red ribbon design adds a unique and thoughtful touch to express your love and care.",
    price: "PKR 1400",
    location: "Karachi, Pakistan",
    delivery: "Based on location",
    daysToDeliver: "3-5 Days",
    reviews: {
      rating: 4.5,
      totalReviews: 25,
    },
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
              <button
                onClick={handleBuyNowClick}
                className="w-full sm:w-[535px] bg-gradient-to-r from-red-800 to-pink-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-800 transition duration-300"
              >
                Buy Now ➤
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
             Trending
          </span>
          <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
            {" "}
            Bouquets
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
      <div className="flex justify-end">
      <Link
  href="/allproducts"
  className="relative cursor-pointer mt-6 z-30 font-barlow inline-flex justify-center text-lg uppercase text-[#4b1248] rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-pink-400 focus:outline-offset-4 overflow-hidden bg-gradient-to-r from-[#fcd3e1] to-[#f7a5c4] px-6 py-3"
>
  <span className="relative z-20 font-semibold tracking-wide">View More...</span>

  <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/40 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

  <span className="w-1/2 drop-shadow-xl transition-all duration-300 block border-[#f7a5c4] absolute h-[20%] rounded-tl-lg border-l-4 border-t-4 top-0 left-0"></span>
  <span className="w-1/2 drop-shadow-xl transition-all duration-300 block border-[#f7a5c4] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-4 border-t-4 top-0 right-0"></span>
  <span className="w-1/2 drop-shadow-xl transition-all duration-300 block border-[#f7a5c4] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-4 border-b-4 left-0 bottom-0"></span>
  <span className="w-1/2 drop-shadow-xl transition-all duration-300 block border-[#f7a5c4] absolute h-[20%] rounded-br-lg border-r-4 border-b-4 right-0 bottom-0"></span>
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
