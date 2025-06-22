import React from "react";
import "../Css/Navbar.css";

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Education">Education</a>
        </li>
        <li>
          <a href="/Skills">Skills</a>
        </li>
        <li>
          <a href="/Project">Project</a>
        </li>
        <li>
          <a href="/Certificate">Certificate & Achievements</a>
        </li>
      </ul>
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
