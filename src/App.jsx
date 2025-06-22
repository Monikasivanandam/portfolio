import React from "react";

import { useState, useEffect } from "react";
import Navbar from "./pages/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Certificate" element={<Certificate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
