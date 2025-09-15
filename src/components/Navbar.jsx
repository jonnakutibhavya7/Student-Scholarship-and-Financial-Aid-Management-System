import React, { useRef, useEffect } from 'react';
import './Navbar.css'; // Assuming you have Link style.css file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  const hamburgerRef = useRef(null);
  const menubarRef = useRef(null);

  const toggleNav = () => {
    menubarRef.current.classList.toggle("active");
    hamburgerRef.current.classList.toggle("hamburger-active");
  };

  useEffect(() => {
    const mobileNav = hamburgerRef.current;
    if (mobileNav) {
      mobileNav.addEventListener("click", toggleNav);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (mobileNav) {
        mobileNav.removeEventListener("click", toggleNav);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='logo.jpg' alt='logo' />
        <h1>scholarship</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href='#about-us'>About us</a>
        </li>
        <li>
          <a href="#contact-us">contactUs</a>
        </li>
        <li>
          <Link to="/">updates</Link>
        </li>
        <li>
          <Link to="/how-to-apply">Apply Now</Link>
        </li>
      </ul>
      <div className="hamburger" ref={hamburgerRef}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className="menubar" ref={menubarRef}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href='#about-us'>About Us</a>
          </li>
          <li>
            <Link to="#footer-container">contactUs</Link>
          </li>
          <li>
            <Link to="/">updates</Link>
          </li>
          <li>
            <Link to="/how-to-apply">Apply Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
