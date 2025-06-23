import React from "react";
import "../Css/Home.css";
const Home = () => {
  return (
    <>
      <div className="intro">
        <h1>Hi!! Myself Monika S</h1>
        <h4 className="fade-in-text">
          MERN Stack Developer | Responsive UI Designer
        </h4>
      </div>

      <div className="icons">
        <a href="https://github.com/Monikasivanandam">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/monika-s-01709028a">
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/monikasivanandam?igsh=MXN5bXRrenplZXdtbA==">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:monikasiva2503@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
