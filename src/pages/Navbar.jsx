import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Education">Education</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Certificate">Certificate & Achievements</Link>
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
