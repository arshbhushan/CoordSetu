import React, { useState } from 'react';
import image1 from './logo.jpg';
import './nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DisplayNav() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false); 
  };

  return (
    <header className="header">
      <img src={image1} height="150px" alt='Logo' className="logo"/>
      
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" 
          style={{ color: activeItem === 'home' ? 'rgb(21, 170, 239)' : '' }}
          onClick={() => handleItemClick('home')}
        >
          Home
        </a>
        <a href="#" 
          style={{ color: activeItem === 'Profile' ? 'rgb(21, 170, 239)' : '' }}
          onClick={() => handleItemClick('Profile')}
        >
          Profile
        </a>
        <a href="#" 
          style={{ color: activeItem === 'About' ? 'rgb(21, 170, 239)' : '' }}
          onClick={() => handleItemClick('About')}
        >
          About Us
        </a>
        <a href="#" 
          style={{ color: activeItem === 'Categories' ? 'rgb(21, 170, 239)' : '' }}
          onClick={() => handleItemClick('Categories')}
        >
          Categories
        </a>
        <a href="#" 
          style={{ color: activeItem === 'Contact' ? 'rgb(21, 170, 239)' : '' }}
          onClick={() => handleItemClick('Contact')}
        >
          Contact Us
        </a>
        <button role="button" className="btn btn-primary" href="#">
          Sign Up/Login
        </button>
      </nav>

      <div className="mobile-navbar-btn" onClick={handleMenuToggle}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </header>
  );
}

export default DisplayNav;







