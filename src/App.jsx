import React from "react";

import { useState, useEffect } from "react";
import Navbar from "./pages/Navbar.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Project from "./pages/Project.jsx";
import Home from "./pages/Home.jsx";
import Certificate from "./pages/Certificate.jsx";
import "../src/index.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/portfolio/About" element={<About />}></Route>
          <Route path="/portfolio/Education" element={<Education />}></Route>
          <Route path="/portfolio/Skills" element={<Skills />}></Route>
          <Route path="/portfolio/Project" element={<Project />}></Route>
          <Route
            path="/portfolio/Certificate"
            element={<Certificate />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
