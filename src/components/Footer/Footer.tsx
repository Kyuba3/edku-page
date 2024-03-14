import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center text-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <p>Contact us: madet@gmail.com</p>
          <p>Follow us on social media</p>
        </div>
        <div className='flex justify-center gap-4 mb-6'>
          <a href='https://facebook.com' className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <FaFacebook size="2em" />
          </a>
          <a href='https://instagram.com' className="text-pink-600 hover:text-pink-700 transition-colors duration-300">
            <FaInstagram size="2em" />
          </a>
          <a href='https://youtube.com' className="text-red-600 hover:text-red-700 transition-colors duration-300">
            <FaYoutube size="2em" />
          </a>
        </div>
        <div className="footer-bottom text-center text-xl">
          <p>&copy; {new Date().getFullYear()} Madet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;