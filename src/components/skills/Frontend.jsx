import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              title="JavaScript"
              alt="JavaScript"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              title="React/React-Native"
              alt="React/React-Native"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">React/React-Native</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              title="HTML"
              alt="HTML"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              title="Typecript"
              alt="TypeScript"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">TypeScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              title="Java"
              alt="Java"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              title="CSS"
              alt="CSS"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
