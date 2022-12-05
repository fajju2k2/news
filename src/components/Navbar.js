import React from 'react';
import './Navbar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>
            <span>A</span>RY
            <span>N</span>ews
          </h1>
        </div>
        <div
          className={
            showMediaIcons ? 'menu-link Amobile-menu-link' : ' menu-link'
          }
        >
          <ul>
            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>

            <li>
              <a href="/"> NEWS</a>
            </li>
            <li>
              <a href="/"> NEWS</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="/">
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <p> latest </p>
        <h1> news boxes</h1>
      </section>
    </>
  );
};

export default Navbar;
