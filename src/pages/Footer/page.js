import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="#">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="#">
          About
        </Link>
        
        <Link className="hover:text-gray-900" href="#">
          Products
        </Link>
        <Link className="hover:text-gray-900" href="#">
          Contact
        </Link>
      </nav>

      <div className="flex justify-center space-x-5">
        <Link
          href="https://www.facebook.com/profile.php?id=61572704673480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="Facebook"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@bloom_envy16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/tiktok.png"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.instagram.com/bloom_envy16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://wa.me/923303049866"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/whatsapp.png"
            alt="Messenger"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2025 Bloom Envy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
