import Image from "next/image";

const Hero = () => {
  return (
    <section className=" h-[700px] mt-[170px] w-full">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/section1banner.jpg"
          alt="Fresh Flowers Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full -z-10 opacity-80"
        />

        {/* Light Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/40 -z-10"></div>
      </div>

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center justify-center h-full text-center mt-[-40px]">
        <h1 className="text-[58px] font-semibold font-serif tracking-wide mb-2 name">
          <span className="text-red-800">Bloom</span>{" "}
          <span className="ml-2 text-pink-600">Envy</span>
        </h1>

        <h2 className="text-[42px] font-[cursive] text-pink-700">
          Timeless Bouquets for Every Occasion
        </h2>
        <p className="font-[cursive] text-[25px] w-[75%] mx-auto mt-4 leading-[1.6] mb-10">
          Experience the art of floral perfection—fresh blooms, elegant
          arrangements, and everlasting ribbon bouquets crafted for every
          special moment.
        </p>
        <button className="button">
  <span className="button_lg px-10 py-3"> 
    <span className="button_sl"></span>
    <span className="button_text text-white font-[cursive] font-semibold transition-all duration-500">
      ---Shop Now---
    </span>
  </span>
</button>

      </div>
    </section>
  );
};

export default Hero;
