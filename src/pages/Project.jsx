import React from "react";
import "../Css/Project.css";
import vlc from "../images/vlc.jpg";
import ecommerce from "../images/ecommerce.png";
import doctor from "../images/DOCTOR.jpg";

const Project = () => {
  return (
    <>
      <div className="Project">
        <div className="card pro" style={{ width: "18rem" }}>
          <img src={vlc} alt="" style={{ height: "200px" }} />
          <h5 style={{ textDecoration: "underline", margin: "8px" }}>
            Visible Light Communication Using Li-Fi
          </h5>
          <p className="para">
            Designed and implemented a communication system using LED light to
            transmit data wirelessly via visible light (Li-Fi).Utilized
            photodiodes to receive modulated signals and decode transmitted
            information. Achieved reliable short-range data transmission with
            minimal interference and high security.
          </p>
        </div>
        <div className="card pro" style={{ width: "18rem" }}>
          <img src={ecommerce} alt="" style={{ height: "200px" }} />
          <h5 style={{ textDecoration: "underline", margin: "8px" }}>
            E-commerce Website
          </h5>
          <p className="para">
            Developed a Fully Functional E-commerce website using Front-end
            Technologies.Implemented responsive design to ensure the website is
            mobile-friendly with dynamic cart functionality
          </p>
          <div className="btn">
            <button type="button" class="btn btn-secondary">
              Html
            </button>
            <button type="button" class="btn btn-secondary">
              Css
            </button>
            <button type="button" class="btn btn-secondary">
              Javascript
            </button>
            <button type="button" class="btn btn-secondary">
              React Js
            </button>
          </div>
          <a href="https://github.com/Monikasivanandam/E-Commerce-Shopping-Website">
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
        <div className="card pro" style={{ width: "18rem" }}>
          <img src={doctor} alt="" style={{ height: "200px" }} />
          <h5 style={{ textDecoration: "underline", margin: "8px" }}>
            Doctor Appointment Booking Website
          </h5>
          <p className="para">
            Developed a Doctor Appointment Booking Website using the MERN stack.
            The platform allows users to register, log in, and book appointments
            based on doctor availability. Built as a scalable foundation for
            real-world healthcare booking systems.
          </p>
          <div className="btn">
            <button type="button" class="btn btn-secondary">
              Nodejs
            </button>
            <button type="button" class="btn btn-secondary">
              Expressjs
            </button>
            <button type="button" class="btn btn-secondary">
              Mongodb
            </button>
            <button type="button" class="btn btn-secondary">
              React Js
            </button>
          </div>
          <a href="https://github.com/Monikasivanandam/Doctor-Appointment-Booking">
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
