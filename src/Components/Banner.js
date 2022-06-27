import React from "react";
import "./css/Banner.css";
import { useLocation } from "react-router-dom";

function Banner() {
  let location = useLocation();

  return (
    <div className="full-width">
      <div className="container banner">
        <h1>{location.pathname.replace("/", "")}</h1>
      </div>
    </div>
  );
}

export default Banner;
