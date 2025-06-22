import React from "react";
import "../Css/Education.css";

const Education = () => {
  return (
    <>
      <div className="container education">
        <div className="card edu">
          <h5>
            UG <b>- 76%</b>
          </h5>
          <h6>B.E - Electronics and Communication Engineering</h6>
          <h6>
            <i className="fa-solid fa-calendar"></i> 2021-2025
          </h6>
          <h6>
            <i className="fa-solid fa-location-dot"></i> Government College of
            Engineering, Thanjavur
          </h6>
        </div>
        <div className="card edu">
          <h5>
            HSC<b> - 89.9%</b>
          </h5>
          <h6>
            <i className="fa-solid fa-calendar"></i>2020-2021
          </h6>
          <h6>
            <i className="fa-solid fa-location-dot"></i>
            Sacred Heart Girls' Higher Secondary School,Thanjavur.
          </h6>
        </div>
        <div className="card edu">
          <h5>
            SSLC <b> - 88.6%</b>
          </h5>
          <h6>
            <i className="fa-solid fa-calendar"></i>2018-2019
          </h6>

          <h6>
            <i className="fa-solid fa-location-dot"></i>
            Sacred Heart Girls' Higher Secondary School,Thanjavur.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Education;
