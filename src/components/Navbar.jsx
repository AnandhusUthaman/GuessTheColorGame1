import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Guess The Color</h2>
        </div>
        <div className="navbar-social">
          <a 
            href="https://www.instagram.com/aandhhu?igsh=MWl0MWxnMzM0dmhucw%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/anandhu-s-uthaman-a44bb3309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/AnandhusUthaman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
