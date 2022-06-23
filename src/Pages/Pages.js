import React from "react";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/work" element={<Work />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
