import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Blue Ribbon Rose Bouquet",
    category: "Ribbon Flower",
    image: "/images/about.png",
    description:
      "A unique and artistic rose crafted entirely from blue ribbon, showcasing intricate design and elegance. Perfect for adding a special touch to gifts or décor.",
  },
  {
    id: 2,
    name: "Red Ribbon Rose Trio Bouquet",
    category: "Ribbon Flower",
    image: "/images/ribbon2.jpg",
    description:
      "A captivating arrangement of three elegant red roses, symbolizing deep love and passion. This bouquet is a perfect choice for expressing heartfelt emotions on any special occasion.",
  },
  {
    id: 3,
    name: "Silver Ribbon Rose Bouquet",
    category: "Ribbon Flower",
    image: "/images/ribbon3.jpg",
    description:
      "This bouquet features exquisite satin white and silver roses, creating a luxurious and refined appearance. The satin finish adds a soft sheen, making it a perfect choice for elegant events, weddings, or to express timeless beauty.",
  },
  {
    id: 4,
    name: "Chocolate Love Delight",
    category: "Chocolate",
    image: "/images/chocolate1.jpg",
    description: "A bouquet filled with chocolates and sweet surprises.",
  },
  {
    id: 5,
    name: "Sweet Chocolate Fantasy",
    category: "Chocolate",
    image: "/images/chocolate2.jpg",
    description: "A mix of chocolates and flowers for a perfect gift.",
  },
  {
    id: 6,
    name: "Golden Chocolate Treat",
    category: "Chocolate",
    image: "/images/chocolate3.jpg",
    description: "A luxurious chocolate bouquet with a golden touch.",
  },
];

const Modal = ({ product, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setLoading(true);
      setTimeout(() => setLoading(false), 800); // Simulating loading delay
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4 text-red-800">
              {product.name}
            </h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              {product.description}
            </p>
            <button
              className="mt-6 bg-gradient-to-r from-red-800 to-pink-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
              onClick={onClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-20">
      <div className="about text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-semibold name tracking-wide group hover:text-pink-600 transition-colors duration-300">
          <span className="text-red-800 group-hover:text-pink-600 transition-colors duration-300">
            Our
          </span>
          <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
            {" "}
            Products
          </span>
        </h1>
      </div>

      {["Ribbon Flower", "Chocolate"].map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 font-[cursive]">
            <span className="text-red-800">{category}</span>{" "}
            <span className="text-pink-600">Bouquets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div
                  key={product.id}
                  className="relative bg-white p-6 rounded-lg shadow-lg border-2 border-transparent 
  hover:border-pink-400 hover:shadow-[0_0_15px_#ff1493] hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-4 text-red-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {product.description.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-4 bg-gradient-to-r from-red-800 to-pink-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
                  >
                    Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
