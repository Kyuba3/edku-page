import React from 'react';
import './Footer.scss'; // Assuming you'll use SCSS for styling
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
          <p>Contact us: madet@gmail.com</p>
          <p>Follow us on social media</p>
        <div className='social-icons'>
          <a href='/fb'><FaFacebook /></a>
          <a href='/fb'><FaInstagram /></a>
          <a href='/fb'><FaYoutube /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Madet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;