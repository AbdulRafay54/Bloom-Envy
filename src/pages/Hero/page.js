import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center mt-10 text-center px-4">
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/section1banner.jpg"
          alt="Fresh Flowers Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />

        <div className="absolute inset-0 bg-white/40"></div>
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto">
        <h1 className="text-4xl  sm:text-5xl lg:text-[58px] font-semibold name tracking-wide mb-2"
        
        >
          <span className="text-red-800">Bloom</span>{" "}
          <span className="ml-2 text-pink-600">Envy</span>
        </h1>

        <h2 className="mt-6 text-base  max-sm:text-[25px] max-sm:font-bold  text-2xl sm:text-3xl lg:text-[42px] font-[cursive] text-pink-700">
          Timeless Bouquets for Every Occasion
        </h2>

        <p className=" text-base  max-sm:text-[25px] max-sm:font-bold  font-[cursive] text-lg sm:text-xl lg:text-[25px] w-full max-w-2xl mx-auto mt-10  mb-6">
          Experience the art of floral perfection—fresh blooms, elegant
          arrangements, and everlasting ribbon bouquets crafted for every
          special moment.
        </p>

        <Link href="/allproducts">
          <button className="button">
            <span className="button_lg px-8 py-3">
              <span className="button_sl"></span>
              <span className="button_text text-white font-[cursive] font-semibold transition-all duration-500">
                ---Shop Now---
              </span>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
