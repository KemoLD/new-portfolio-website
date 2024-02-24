import React, { useContext } from "react";
import RefsContext from "../../context/refsContext";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  const { portfolioRef } = useContext(RefsContext);

  return (
    <section className="portfolio section" id="portfolio" ref={portfolioRef}>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Featured Projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
