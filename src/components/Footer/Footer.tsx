import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer text-sm">
      <div className="container mx-auto px-6 py-4">
        
        <div className="footer-top flex items-center justify-between pt-5 pb-5">
          <a href="/" className="text-3xl font-bold">Madet.pl</a>
          <div className="footer-links flex items-center text-xl">
            <a href="/" className="mx-4">Produkty</a>
            <a href="/" className="mx-4">Baza wiedzy</a>
            <a href="/" className="mx-4">Blog</a>
            <a href="/" className="mx-4">O nas</a>
            <a href="/" className="mx-4">Kontakt</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <a href="/" className="mx-2">Polityka prywatności</a>
            <a href="/" className="mx-2">Regulamin</a>
            <a href="/" className="mx-2">Wysyłka i dostawa</a>
            <a href="/" className="mx-2">Warunki Gwarancji</a>
            <a href="/" className="mx-2">Polityka reklamacji i zwrotów</a>
          </div>
          <div className='footer-socials flex'>
            <a href='https://facebook.com' className="text-blue-600 mx-2">
              <FaFacebook size="1.5em" />
            </a>
            <a href='https://instagram.com' className="text-pink-600 mx-2">
              <FaInstagram size="1.5em" />
            </a>
            <a href='https://youtube.com' className="text-red-600 mx-2">
              <FaYoutube size="1.5em" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
