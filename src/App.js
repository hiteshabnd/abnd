import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState();
  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="App">
      <div className={isDark ? "dark" : "light"}>
        <BrowserRouter>
          <Header />
          <button className="dark-mode-button" onClick={toggleDark}>
            Dark Mode
          </button>
          <Pages />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
