import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://athletics.sfu.ca/sports/mens-basketball/roster/kemo-sonko/6134"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <IoBasketballOutline />
      </a>
      <a
        href="https://github.com/KemoLD"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/kemo-sonko/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
