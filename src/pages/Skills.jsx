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

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React JS", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node JS", icon: FaNodeJs },
  { name: "Express JS", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Java", icon: FaJava },
  { name: "AWS (EC2, S3, VPC)", icon: FaAws },
];

import "../Css/Skills.css";

function Skills() {
  return (
    <>
      <div className="container py-5 text-center">
        <h2 className="mb-4">My Tech Stack</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2 mb-4 ">
              <div
                className="tech-icon-circle rounded-circle  d-flex justify-content-center align-items-center mx-auto"
                style={{ width: "100px", height: "100px" }}
              >
                <skill.icon style={{ fontSize: "50px" }} />
              </div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
