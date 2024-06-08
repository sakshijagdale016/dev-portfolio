import React from "react";
import react from '../assets/icons/react.svg'
import Bar from "./Bar";
const languages = [
  {
    icon:react,
    skillName:'HTML5',
    level:'75',
  },
  {
    icon:react,
    skillName:'CSS3',
    level:'60',
  },
  {
    icon:react,
    skillName:'React',
    level:'60',
  },
  {
    icon:react,
    skillName:'Node js',
    level:'50',
  },
  {
    icon:react,
    skillName:'Express js',
    level:'50',
  },
  {
    icon:react,
    skillName:'MongoDB',
    level:'55',
  },

  
]

const tools = [
  {
    icon:react,
    skillName:'Git',
    level:'45',
  },
  
 
]

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card ">
          <h4 className="resume-card_heading ">Education</h4>
          <div className="resume-card_body mt-4">
            <h5 className="resume-card_title"> B.Tech Computer Engineering</h5>
            <p className="resume-card_name">Vishwakarma Institute of technology,Pune</p>
            <p className="resume-card_details">I am currently pursuing B.tech from VIT,Pune.</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card_body mt-4">
            <h5 className="resume-card_title"> HSC </h5>
            <p className="resume-card_name">Billiant Academy And Jr. College of Science ,Karad</p>
            <p className="resume-card_details">I have completed HSC with 96.67%. </p>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="col-lg-6 resume-languages">
        <h5 className="resume-language_heading">
          Languages And Framework
        </h5>
        <div className="resume-language_body mt-3">
        {
          languages.map(language=>
          <Bar value={language}/>
          )
        }
        </div>
      </div>
       <div className="col-lg-6 resume-languages">
        <h5 className="resume-language_heading">
         Tools and Softwares
        </h5>
        <div className="resume-language_body mt-3">
        {
          tools.map(tool=>
          <Bar value={tool}/>
          )
        }

        </div>
      </div>

      </div>
    </div>
  );
};

export default Resume;
