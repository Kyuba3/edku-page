import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './NavBar.scss';
import { useScroll } from '../../components/ScrollContext/ScrollContext';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { scrollToSection } = useScroll(); 

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

  const handleContactClick = () => {
    navigate('/?scrollTo=contact')
    scrollToSection('contact');
    closeNavbar();
  }

  const handleAboutClick = () => {
    navigate('/?scrollTo=about');
    scrollToSection('about');
    closeNavbar();
  }

  const handleHomeClick = () => {
    navigate('/?scrollTo=home');
    scrollToSection('home');
    closeNavbar();
  }

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} mx-auto fixed top-0 left-0 right-0 z-50 shadow-md`}>
      <NavLink to="/" className="logo-link" onClick={handleHomeClick}> 
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
        <NavLink to="/"  onClick={handleHomeClick} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <button onClick={handleAboutClick} className='nav-link'>
          About
        </button>
        <button  onClick={handleContactClick} className='nav-link'>
          Contact
        </button>
        <NavLink to="/products" onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Products
        </NavLink>
        <NavLink to="/articles" onClick={closeNavbar} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Articles 
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;