import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import TechStack from "./TechStack";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="project__media">
        {item.video ? (
          <video className="project__video" src={item.video} controls />
        ) : (
          <img className="project__img" src={item.images[0]} alt={item.title} />
        )}
      </div>
      <h3 className="project__title">{item.title}</h3>
      <h2 className="project__description">{item.description}</h2>
      <div className="project__stack">
        <TechStack stack={item.stack} />
      </div>
      <div className="project__buttons-container">
        {item.source && (
          <a
            href={item.source}
            className="project__button project__button-source"
          >
            Source Code
            <HiOutlineArrowSmRight className="project__button-icon" />
          </a>
        )}
        {item.live && (
          <a href={item.live} className="project__button project__button-site">
            Live Site
            <HiOutlineArrowSmRight className="project__button-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
