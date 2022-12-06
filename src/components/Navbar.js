import React from 'react';
import './Navbar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

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
              <Link href={<Home />}> Home </Link>
            </li>
            <li>
              <Link href={<Contact />}> Contact </Link>
            </li>
            <li>
              A <Link href={<About />}> About </Link>
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
    </>
  );
};

export default Navbar;
