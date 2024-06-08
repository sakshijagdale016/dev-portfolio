import React from "react";
import api from "../assets/icons/api.svg";
import SkillCard from "./SkillCard";
import backend from "../assets/icons/backend.svg";
import computer from "../assets/icons/computer.svg";
const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js",
  },
  {
    icon: backend,
    title: "Backend Development",
    about: "I can handle database, server & api's",
  },
  {
    icon: api,
    title: "Devops",
    about: "I can automate and manage your infrastructure with CI/CD pipelines and cloud services",
  }
];
const About = () => {
  return (
    <div className="about">
      <div className="about_intro">I describe myself as a full stack developer who loves creating new web applications, leveraging both frontend and backend technologies to deliver seamless and efficient solutions.
</div>
      <div className="container about_container">
        <h1 className="about_heading">Skills To offer</h1>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
