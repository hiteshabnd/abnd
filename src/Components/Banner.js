import React from "react";
import "./css/Banner.css";

function Banner({ children }) {
  return <div className="container banner">{children}</div>;
}

export default Banner;
