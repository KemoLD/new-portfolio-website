import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              title="NodeJS"
              alt="NodeJS"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">NodeJS</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              title="Spring Boot"
              alt="Spring Boot"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Spring Boot</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              title="Express"
              alt="Express"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">Express</h3>
            </div>
          </div>
          <div className="skills__data">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              title="PosgreSQL"
              alt="PosgreSQL"
              width="30"
              height="30"
            />
            <div>
              <h3 className="skills__name">PosgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
