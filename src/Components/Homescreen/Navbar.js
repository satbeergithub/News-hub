import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import newslogo from "../Images/news logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <nav className="main-nav">
      <div className="logo">
       <img src={newslogo} alt="ni" />
      </div>

      <div className={navbarOpen ? 'nav-mobile' : "menu_link"}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
        </ul>
      </div>

      <div className="social_media">
        <ul className="social_media_desktop">
          <li>
            <a href="https://www.linkedin.com/in/satbeer-gautam-a4491123b/">
              <FaLinkedinIn className="linkdin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/satbeergithub">
              <FaGithub className="git" />
            </a>
          </li>
        </ul>
        <div className="hamburgericon">
          
          <a href="#" onClick={handleToggle}>
            <GiHamburgerMenu />
          </a>
  
    </div>
      </div>
    </nav>
  );
}

export default Navbar;
