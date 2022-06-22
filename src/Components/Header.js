import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <img
              src="https://abnd.in/wp-content/uploads/2019/11/Logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <FaBeer />
        </div>
      </div>
    </div>
  );
}

export default Header;
