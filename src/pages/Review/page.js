import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sufyan",
    rating: 5,
    review:
      "It arrived on time and looked so pretty! Totally loved it.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRpyM8klDYwnhznIs7IodY1a6-WiCmmGC4w&s",
  },
  {
    id: 2,
    name: "Maviya Sheikh",
    rating: 4.8,
    review:
      "Thanks for making a beautiful bouquet. Apny bht kam time ma itna pyara bouquet bnaya literally bht pyara lg rha h thanks again",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f1f5ef779b?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Haider",
    rating: 5,
    review:
      "Handmade touch was beautiful! Perfect for gifting — my go-to store now 💐",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRpyM8klDYwnhznIs7IodY1a6-WiCmmGC4w&s",
  },
];

const ReviewCard = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-purple-50 py-20 px-6">
     <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-pink-700 via-pink-600 to-[#4b1248] bg-clip-text mb-6 tracking-tight relative inline-block after:content-[''] after:absolute after:w-28 after:h-[3px] after:bg-pink-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:rounded-full">
   Customer Love 💕
</h2>

      <p className="text-center text-gray-500 mb-12 text-sm">
        Hear what our happy customers say about Bloom Envy
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl shadow-lg p-6 max-w-sm w-full border border-pink-200 hover:shadow-pink-300 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-4 border-pink-300 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full ring-2 ring-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
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

            <p className="text-sm text-gray-700 leading-relaxed italic border-l-4 pl-4 border-pink-300">
              “{review.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewCard;
