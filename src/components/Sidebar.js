import React from "react";
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/tie.svg'
import tie from '../assets/icons/tie.svg'
import coder from '../assets/coder.jpg'
import resume from '../assets/Sakshi_Jagdale.pdf'
const Sidebar = () => {

  
    const handleEmailMe =()=>{
        window.open("mailto:ashok.sakshi21@vit.edu")
    }
  return (
    <div className="app_sidebar">
      <img  src={coder} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Sakshi<span> Jagdale</span>
      </div>
      <div className="sidebar_item sidebar_title"> Web Developer </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={tie} alt="resume" className="sidebar_icon" /> Download Resume
        </div>
      </a>

      <figure className="sidebar_social-icons my-2">
        <a href='https://www.instagram.com/sakshi.jagdale29' target='_blank'>

          <img src={facebook} alt="facebook" className="sidebar_icon mr-3" />
        </a>
        <a href='https://www.instagram.com/sakshi.jagdale29' target='_blank'>

          <img src={instagram} alt="instagram" className="sidebar_icon" />

        </a>
      </figure>
      <div className="sidebar_contact">
        <div className="sidebar_item sidebar_github ">
          <a href='https://github.com/sakshijagdale016' target='_blank'>
            <img src={github} alt="github" className="sidebar_icon mr-2" />
            github
          </a>
        </div>
      <div className="sidebar_location">
        <img src={pin} alt="location"  className="sidebar_icon mr-2"/>
        Pune,India
      </div>
        <div className="sidebar_item">ashok.sakshi21@vit.edu</div>
        <div className="sidebar_item">8626047016</div>
      </div>
    <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me</div>


    </div>
  );
};



export default Sidebar;
