"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIGkwRQ-29yQqz_cRvifP4DISOMOsockZ77I46RBY0tHbOMNTajtuI74Z6UyW3cgTB3iJjb_yfTKIM/pub?output=csv";

const Page = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const res = await fetch(SHEET_URL);
      const text = await res.text();

      const rows = text.trim().split("\n");
      const data = rows
        .slice(1)
        .map((row) => {
          const values = row.split(",");
          return {
            name: values[1] || "Unknown",
            email: values[2] || "",
            message: values[3] || "",
            rating: parseInt(values[4]) || 5,
          };
        })
        .filter((review) => review.message.trim() !== ""); // ⬅️ only non-empty reviews

      setReviews(data.reverse()); // latest first
    };

    fetchCSV();
  }, []);

  return (
    <section className="bg-gradient-to-b from-pink-50 to-purple-50 py-20 px-6">
      <h2
        className="text-4xl md:text-5xl text-center 
    text-purple-700 md:text-transparent 
    md:bg-gradient-to-r md:from-pink-700 md:via-pink-600 md:to-[#4b1248] 
    md:bg-clip-text 
    mb-6 tracking-wide relative inline-block 
    after:content-[''] after:absolute after:w-28 after:h-[3px] after:bg-pink-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:rounded-full 
    before:content-[''] before:absolute before:w-28 before:h-[3px] before:bg-pink-300 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 before:rounded-full"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Customer Love 💕
      </h2>

      <p
        className="text-center text-[#555] mb-12 text-xl sm:text-2xl tracking-wide"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Hear what our happy customers say about{" "}
        <span className="font-bold text-[#333]">Bloom Envy</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {reviews.map((review, index) => {
          const nameParts = review.name.trim().split(" ");
          const ignoreList = ["muhammad", "mohammad", "mohd", "syed", "md"];

          const initial =
            ignoreList.includes(nameParts[0].toLowerCase()) &&
            nameParts.length > 1
              ? nameParts[1][0].toUpperCase()
              : nameParts[0][0].toUpperCase();

          const colors = [
            "bg-sky-600",
            "bg-rose-400",
            "bg-fuchsia-400",
            "bg-amber-300",
            "bg-violet-300",
            "bg-emerald-300",
            "bg-teal-300",

            "bg-lime-300",
          ];
          const bgColor = colors[index % colors.length];

          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 max-w-sm w-full border border-pink-200 hover:shadow-pink-300 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full ${bgColor} text-white flex items-center justify-center text-2xl font-bold border-4 border-pink-300 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {initial}
                  </div>
                  <span className="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full ring-2 ring-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < Math.floor(review.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-500">
                      {review.rating.toFixed(1)} / 5
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed border-l-4 pl-4 border-pink-300 font-medium tracking-wide ">
                {review.message.replace(/^"/, "")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
