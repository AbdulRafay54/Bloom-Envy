import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 "
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="about text-center mb-12" data-aos="fade-down">
          <h1 className="text-5xl font-semibold name tracking-wide group hover:text-pink-600 transition-colors duration-300">
            <span className="text-red-800 group-hover:text-pink-600 transition-colors duration-300">
              About
            </span>
            <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
              {" "}
              Us
            </span>
          </h1>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative" data-aos="fade-right">
            <Image
              src="/images/about.png"
              alt="Intro Image"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-800 hover:bg-red-700 text-white text-md font-semibold px-6 py-2 rounded-lg shadow-md ml-[-20px]">
              Elegant Blooms & Gift Creations
            </div>
          </div>

          {/* Text Section */}
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[cursive]">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At <span className="text-red-800 font-semibold name">Bloom</span>
              <span className="text-pink-600 font-semibold name"> Envy</span>,
              we don’t just sell flowers—we craft emotions. Every bloom is
              handpicked and arranged with love to bring joy, beauty, and
              elegance to your moments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's a celebration, a heartfelt gesture, or just because,
              our exquisite floral designs speak louder than words, turning
              every occasion into a cherished memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
