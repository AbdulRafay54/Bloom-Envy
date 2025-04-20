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
        isScrolled
          ? "bg-opacity-80 backdrop-blur-md"
          : "bg-gradient-to-b from-pink-100 to-pink-50"
      }`}
      //   bg-[#baa8d1]
    >
      <div className="bg-black text-white overflow-hidden relative">
        <div className="marquee-wrapper">
          <span className="marquee">
          Exclusive 10% to 20% Discount on Your First Order — Don’t Miss Out!
          </span>
          {/* <span className="marquee">
      Unwrap with 70% Off — Blossom Your Holidays with Our Enchanting Flowers!
    </span> */}
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold text-white">
          <Link href="/">
            <span className="text-red-800 text-3xl name ">Bloom </span>
            <span className="text-pink-600 text-3xl name">Envy</span>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {/* <span class="sr-only">Open main menu</span> */}
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
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
            href="/allproducts"
            className="nav-link hover:text-red-800 hover:text-pink-600 transition-colors duration-300 font-[cursive]"
          >
            Products
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
          href="/"
          className="nav-link  block py-2 text-center font-[cursive]"
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
          href="/allproducts"
          className="nav-link block py-2 text-center font-[cursive]"
          onClick={toggleMenu}
        >
          Products
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
