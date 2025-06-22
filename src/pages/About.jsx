import React from "react";
import Profile from "../images/profile.jpg";
import "../Css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p className="animate__animated animate__backInLeft">
          Hello! I'm Monika S, an Enthusiastic and goal-oriented MERN stack
          developer with hands-on experience in building scalable full-stack web
          applications using MongoDB, Express.js, React.js, and Node.js.
          Proficient in creating responsive and user-friendly interfaces,
          integrating RESTful APIs, and ensuring optimal application
          performance. Eager to contribute to a dynamic tech team, grow
          alongside experienced developers, and deliver impactful web solutions
          that drive business value.
        </p>
      </div>
      <div className="profile-pic">
        <img
          src={Profile}
          alt="Profile"
          className="animate__animated animate__backInRight"
        />
      </div>
    </div>
  );
};

export default About;
