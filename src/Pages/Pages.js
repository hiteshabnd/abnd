import React from "react";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/services" element={<Services />}></Route>
      <Route exact path="/work" element={<Work />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default Pages;
