import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <NavLink to="/" className="logo-link" onClick={closeNavbar}> 
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png" 
          alt="LOGO" 
          className="logo">
        </img>
        MADET
      </NavLink>
      <button className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/"  onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Contact
        </NavLink>
        <NavLink to="/products" onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;