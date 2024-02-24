import React, { useContext } from "react";
import RefsContext from "../../context/refsContext";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Infrastructure from "./Infrastructure";

const Skills = () => {
  const { skillsRef } = useContext(RefsContext);

  return (
    <section className="skills section" id="skills" ref={skillsRef}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Proficency</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Infrastructure />
      </div>
    </section>
  );
};

export default Skills;
