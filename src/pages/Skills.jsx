import { color } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiBootstrap } from "react-icons/si";
import "../Css/Skills.css";

function Skills() {
  return (
    <div className="Skills">
      <div className="card skill" style={{ width: "130px", height: "130px" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ textAlign: "center" }}>
            HTML
          </h6>
          <FaHtml5
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            CSS
          </h6>
          <FaCss3Alt
            className="card-text"
            style={{
              fontSize: "80px",
              margin: "6px",
            }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            JAVASCRIPT
          </h6>
          <FaJs
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            REACT JS
          </h6>
          <FaReact
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            REDUX
          </h6>
          <SiRedux
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            BOOTSTRAP
          </h6>
          <SiBootstrap
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            NODE JS
          </h6>
          <FaNodeJs
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            EXPRESS JS
          </h6>
          <SiExpress
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            MONGODB
          </h6>
          <SiMongodb
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            JAVA
          </h6>
          <FaJava
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>

      <div className="card skill">
        <div className="card-body" style={{ width: "130px", height: "130px" }}>
          <h6 className="card-title" style={{ textAlign: "center" }}>
            AWS(EC2,S3,VPC)
          </h6>

          <FaAws
            className="card-text"
            style={{ fontSize: "80px", margin: "6px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
