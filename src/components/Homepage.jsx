import React, { useEffect, useState } from 'react';
import './Homepage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/assests/close-up-idea-concept.jpg", alt: "Description of Image 1" },
    { src: "/assests/close-up-idea-concept.jpg", alt: "Description of Image 2" },
    { src: "/assests/close-up-idea-concept.jpg", alt: "Description of Image 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-container">
      <Navbar />
      <header className="hero-section">
        <h1>Welcome to Scholarship Hub</h1>
        <div className="hero-subtext">
          <p>An opening door to limitless possibilities.</p>
        </div>
        <Link to="/view">
          <button className="explore-button" role="button">Explore Scholarships</button>
        </Link>
      </header>
      <section className="intro-section" id="about-us">
        <div className='about-content'>
        <h2>About Us</h2>
        <p
          
        >
          Welcome to Scholar Ships Hub, your trusted platform for managing and discovering scholarships worldwide.
          We are dedicated to bridging the gap between aspiring students and life-changing educational opportunities.
          At Scholar Ships Hub, we understand that education is the key to unlocking limitless potential, and financial barriers
          should not stand in the way of anyone's dreams. Our platform simplifies the process of finding, applying for, and
          managing scholarships, ensuring that students and educational institutions can connect seamlessly.
          Whether you’re Link student seeking guidance on funding your education or an organization looking to support talented
          individuals, Scholar Ships Hub is here to make the process efficient, transparent, and stress-free. Together, let’s
          shape Link future where every deserving student has the opportunity to excel. Discover. Apply. Achieve.
        </p>
        <Link to="#" class="learn-more-btn">Learn More</Link>
        </div>
        <div class="about-image">
            <img src="student.png" alt="About Us" />
          </div>
      </section>
       
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Search and apply for scholarships</li>
          <li>Personalized matching for optimal results</li>
          <li>Comprehensive scholarship database</li>
          <li>User-friendly application process</li>
        </ul>
      </section>
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-logos">
          <span>Arise Health</span>
          <span>OE</span>
          <span>2020INC</span>
          <span>The Paak</span>
          <span>Ephicient</span>
          <span>TOOGETHER</span>
        </div>
      </section>
      <section className="slideshow-section">
        <div className="slideshow-text">
          <h2>Slideshow Gallery Section Title Goes Here</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.</p>
          </div>
          <div className="slideshow-container">
            <button className="prev-slide" onClick={prevSlide}>❮</button>
            <div className="slide">
              <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              }}
              />
            </div>
            <button className="next-slide" onClick={nextSlide}>❯</button>
            </div>
            </section>
      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <Link to="/login">
          <button className="reg-button">Register Now</button>
        </Link>
      </section>
      <footer className="footer-container" id="contact-us">
        <div className="newsletter-section">
          <h3>Subscribe Newsletters</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE NOW</button>
          </div>
        </div>
        <div className="footer-links">
          
            <a href="#about-us">About us</a>
            <Link to="#">Features</Link>
            <Link to="#">User Example</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Resources</Link>
          
          <div className="social-icons">
          <a
              href="https://www.facebook.com"
              className="social-icon">
            
              <img src="facebook.png" alt="Facebook"/>
            </a>
            <Link to="#" className="social-icon">
              <img src="twitter.png" alt="Twitter" />
            </Link>
            <Link to="#" className="social-icon">
              <img src="instagram.png" alt="Instagram" />
            </Link>
            <Link to="#" className="social-icon">
              <img src="youtube.png" alt="YouTube" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{color:"black"}}>© 2022 Company name. All rights reserved.</p>
          <Link to="#">Terms Of Use</Link> | <Link to="#">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
