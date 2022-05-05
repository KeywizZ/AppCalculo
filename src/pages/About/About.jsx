import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export const About = () => {
  return (
    <div className="profileContainer">
      <div className="profileCard">
        <h1>Pedro González</h1>
        <h2>pedrogonzalezfernandez@gmail.com</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/pedrogonzalezfernandez">
            <GrLinkedin />
          </a>
          <a href="https://github.com/pedrogf84">
            <GrGithub />
          </a>
        </div>
      </div>
      <div className="profileCard">
        <h1>Xulio Xaviert Rojas</h1>
        <h2>xulioxaviert@gmail.com</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/xulio-xaviert-rojas-teixeira/">
            <GrLinkedin />
          </a>
          <a href="https://github.com/xulioxaviert">
            <GrGithub />
          </a>
        </div>
      </div>
      <div className="profileCard">
        <h1>Raúl Ruiz</h1>
        <h2>raul.dev.rm@gmail.com</h2>
        <div className="socials">
          <a href="www.linkedin.com/in/raul-ruiz-manglano">
            <GrLinkedin />
          </a>
          <a href="https://github.com/KeywizZ">
            <GrGithub />
          </a>
        </div>
      </div>
    </div>
  );
};