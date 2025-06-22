import React from "react";
import "../Css/Certificate.css";
import mern from "../images/mern.jpg";
import java from "../images/java.jpg";
import react from "../images/react.jpg";
import cloudi5 from "../images/cloudi5.jpg";
import nakuri from "../images/nakuri.jpg";

const Certificate = () => {
  return (
    <>
      <div className="three">
        <div
          className="card-container certificate"
          onclick="this.classNameList.toggle('touch')"
        >
          <div className="card flip">
            <div className="card-face card-front">
              <img
                src={cloudi5}
                alt="Logo"
                className="logo"
                style={{ width: "250px", height: "150px" }}
              />
            </div>
            <div className="card-face card-back">
              <p>
                Completed One month Internship at Cloudi5 Technologies with
                hands-on experience in Frontend Development,resulting in a fully
                Functional E-commerce Website
              </p>
            </div>
          </div>
        </div>

        <div
          className="card-container certificate"
          onclick="this.classNameList.toggle('touch')"
        >
          <div className="card flip">
            <div className="card-face card-front">
              <img src={mern} alt="Logo" className="logo" />
            </div>
            <div className="card-face card-back">
              <p>
                Successfully Completed 30 Days Masterclass On Fullstack
                Development which was conducted by NoviTech Pvt Ltd
              </p>
            </div>
          </div>
        </div>

        <div
          className="card-container certificate"
          onclick="this.classNameList.toggle('touch')"
        >
          <div className="card flip">
            <div className="card-face card-front">
              <img src={react} alt="Logo" className="logo" />
            </div>
            <div className="card-face card-back">
              <p>Certification On Introduction To Reactjs-Simplilearn</p>
            </div>
          </div>
        </div>

        <div
          className="card-container certificate"
          onclick="this.classNameList.toggle('touch')"
        >
          <div className="card flip">
            <div className="card-face card-front">
              <img src={java} alt="Logo" className="logo" />
            </div>
            <div className="card-face card-back">
              <p>Certification On Java Programming-Great Learning</p>
            </div>
          </div>
        </div>

        <div
          className="card-container certificate"
          onclick="this.classNameList.toggle('touch')"
        >
          <div className="card flip">
            <div className="card-face card-front">
              <img src={nakuri} alt="Logo" className="logo" />
            </div>
            <div className="card-face card-back">
              <p>For Pariticating in Nakuri Campus Young Truks</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
