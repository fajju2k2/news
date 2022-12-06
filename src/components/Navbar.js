import React from 'react';
import './Navbar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/InternationalNews"> International News </Link>
            </li>
            <li>
              <Link to="/Sports"> Sports </Link>
            </li>
            <li>
              <a href="/Latest"> Latest</a>
            </li>
            <li>
              <a href="/"> Trending</a>
            </li>
            <li>
              <a href="/"> Buissness</a>
            </li>
            <li>
              <a href="/"> From Tv Chanel</a>
            </li>
          </ul>

          <li class="menu-has-children">
            <a href="/">Downloads</a>
            <ul>
              <li>
                <a href="/">Mobile Application for Android</a>
              </li>
              <li>
                <a href="/">Mobile Application for IOS</a>
              </li>
            </ul>
          </li>
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
