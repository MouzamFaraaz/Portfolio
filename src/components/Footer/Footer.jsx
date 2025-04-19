import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Mouzam Faraaz</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/16BweoxuKd/" },
            { icon: <FaTwitter />, link: "https://x.com/Mouzamfaraaz1?t=IOubudKb58mUW1tOl6N92Q&s=08" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mouzam-faraaz140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/faraaz_456?igsh=cTEycW92NHIzdWM5" },
            { icon: <FaYoutube />, link: "https://youtube.com/@mouzamfaraaz2301?si=VmqbtHQiBdg_uB0e" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-500">Contact</h3>
          <p className="text-sm text-gray-400 mt-2">
            Email: <a href="mailto:mouzamfaraaz140@gmail.com" className="hover:text-purple-500">mouzamfaraaz140@gmail.com</a>
          </p>
          <p className="text-sm text-gray-400">
            Phone: <a href="tel:+91 6300951904" className="hover:text-purple-500">+91 6300951904</a>
          </p>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Mouzam Faraaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;