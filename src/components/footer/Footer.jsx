import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kemo Sonko</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="footer__social">
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
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
