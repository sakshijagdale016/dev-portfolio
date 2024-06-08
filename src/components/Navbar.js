import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith('/')) {
      setActive('About');
    } else if (currentUrl.endsWith('/resume')) {
      setActive('Resume');
    } else if (currentUrl.endsWith('/projects')) {
      setActive('Projects');
    } else {
      setActive('About');
    }
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: '-30vh',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div
      variants={navbar_variant}
      initial='hidden'
      animate='visible'
      className="navbar"
    >
      <div className="navbar_active">{active}</div>
      <div className="navbar_items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar_item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar_item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar_item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
