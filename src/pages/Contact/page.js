import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2"; // SweetAlert2 ko import karen

const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Please fill out all fields",
        confirmButtonText: "Okay",
      });
      return;
    }

    // If form is filled, show SweetAlert message
    Swal.fire({
      icon: "info",
      title: "This feature will be coming soon",
      confirmButtonText: "Got it!",
    });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center about mb-12" data-aos="fade-down">
          <h1 className="text-4xl name sm:text-5xl font-semibold tracking-wide group hover:text-pink-600 transition-colors duration-300 font-serif">
            <span className="text-red-800 group-hover:text-pink-600 transition-colors duration-300">
              Contact
            </span>
            <span className="text-pink-600 group-hover:text-red-800 transition-colors duration-300">
              {" "}
              Us
            </span>
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Form Section */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-[cursive]">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="button w-full sm:w-[535px]" type="submit">
                <span className="button_lg px-8 py-3">
                  <span className="button_sl"></span>
                  <span className="button_text text-white font-[cursive] font-semibold transition-all duration-500">
                    Send Message ➤
                  </span>
                </span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center" data-aos="fade-right">
            <Image
              src="/images/flower.jpeg"
              alt="Contact Image"
              width={500}
              height={200}
              className="rounded-2xl shadow-lg max-w-full h-[450px] opacity-60"
            />
            {/* Text Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm sm:text-md font-semibold px-4 sm:px-6 py-2 font-[cursive]">
              <button className="btn ">
                <div className="wrapper">
                  <p className="text ">Reach to us via</p>

                  {/* Flower animation */}
                  <div className="flower flower1">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                  <div className="flower flower2">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                  <div className="flower flower3">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                  <div className="flower flower4">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                  <div className="flower flower5">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                  <div className="flower flower6">
                    <div className="petal one"></div>
                    <div className="petal two"></div>
                    <div className="petal three"></div>
                    <div className="petal four"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
