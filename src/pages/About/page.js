import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center about mb-12" data-aos="fade-down">
          <h1 className="text-4xl name sm:text-5xl font-semibold tracking-wide group hover:text-pink-600 transition-colors duration-300 font-serif">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center" data-aos="fade-right">
            <Image
              src="/images/about.png"
              alt="Intro Image"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />

            {/* Text Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-800 hover:bg-red-700 text-white text-sm sm:text-md font-semibold px-4 sm:px-6 py-2 rounded-lg shadow-md font-[cursive]">
            Elegant Blooms
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-[cursive]">
              Why Choose Us
            </h2>
            <p className="text-base   max-sm:text-[21px] max-sm:font-bold sm:text-lg text-gray-700 leading-relaxed mb-4 font-[cursive]">
              At <span className="text-red-800 font-semibold name">Bloom</span>
              <span className="text-pink-600 font-semibold name"> Envy</span>,
              we don’t just sell flowers—we craft emotions. Every bloom is
              handpicked and arranged with love to bring joy, beauty, and
              elegance to your moments.
            </p>
            <p className="text-base max-sm:text-[21px] max-sm:font-bold sm:text-lg text-gray-700 leading-relaxed font-[cursive]">
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
