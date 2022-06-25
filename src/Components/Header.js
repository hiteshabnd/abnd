import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Logo from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <div>
              <Logo className="logo">test</Logo>
            </div>
          </Link>
        </div>
        <div className={isOpen ? "nav active" : "nav"}>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
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
