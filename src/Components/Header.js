import React, { useState } from "react";
import "./css/Header.css";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Logo from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <div>
              <Logo className="logo">test</Logo>
            </div>
          </Link>
        </div>
        <div className={isOpen ? "nav active" : "nav"}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="menu-icon">
          <IoClose className="icon-close" />
          <motion.div
            animate={{
              opacity: isOpen ? "0" : "1",
            }}
          >
            <HiMenuAlt3 className="icon-hamburger" onClick={toggle} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
