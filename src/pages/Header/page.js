"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition duration-300 ${
        isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-white"
      }`}
      //   bg-[#baa8d1]
    >
      <div className="bg-black text-white overflow-hidden relative">
        <div className="marquee-wrapper">
          <span className="marquee">
            Unwrap with 70% Off — Blossom Your Holidays with Our Enchanting
            Flowers!
          </span>
          {/* <span className="marquee">
      Unwrap with 70% Off — Blossom Your Holidays with Our Enchanting Flowers!
    </span> */}
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold text-white">
          <Link href="#home">
            <span className="text-red-800 text-3xl name ">Bloom </span>
            <span className="text-pink-600 text-3xl name">Envy</span>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7711/7711100.png"
            alt="Menu Icon"
            className="w-7 h-7"
          />
        </button>

        <div className="hidden md:flex space-x-8">
          <Link
            href="#home"
            className="nav-link hover:text-red-800 hover:text-pink-600 transition-colors duration-300 font-[cursive]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="nav-link hover:text-red-800 hover:text-pink-600 transition-colors duration-300 font-[cursive]"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="nav-link hover:text-red-800 hover:text-pink-600 transition-colors duration-300 font-[cursive]"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="nav-link hover:text-red-800 hover:text-pink-600 transition-colors duration-300 font-[cursive]"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} p-4`}>
        <Link
          href="#home"
          className="nav-link block py-2 text-center font-[cursive]"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="nav-link block py-2 text-center font-[cursive] "
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="nav-link block py-2 text-center font-[cursive]"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="nav-link block py-2 text-center font-[cursive]"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
