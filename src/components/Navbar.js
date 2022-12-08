import React from 'react';
import './Navbar.css';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
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
              <Link to="/"> Live News </Link>
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
              <a href="/Trending"> Trending</a>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Chanels</button>

                <div class="dropdown-content">
                  <a href="/">GEO News</a>
                  <a href="/">Ary News</a>
                  <a href="/">Duniya News</a>
                  <a href="/">Sama News</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
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
