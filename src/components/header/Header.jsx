import React, { useState, useEffect, useContext } from "react";
import RefsContext from "../../context/refsContext";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlinePuzzle,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const {
    homeRef,
    aboutRef,
    skillsRef,
    qualificationRef,
    portfolioRef,
    contactRef,
  } = useContext(RefsContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("moved");
            console.log(entry.target);
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 } // Adjust this value if needed
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    const homeRefCurrent = homeRef.current;
    const aboutRefCurrent = aboutRef.current;
    const skillsRefCurrent = skillsRef.current;
    const qualificationRefCurrent = qualificationRef.current;
    const portfolioRefCurrent = portfolioRef.current;
    const contactRefCurrent = contactRef.current;

    if (homeRefCurrent) observer.unobserve(homeRefCurrent);
    if (aboutRefCurrent) observer.unobserve(aboutRefCurrent);
    if (skillsRefCurrent) observer.unobserve(skillsRefCurrent);
    if (qualificationRefCurrent) observer.unobserve(qualificationRefCurrent);
    if (portfolioRefCurrent) observer.unobserve(portfolioRefCurrent);
    if (contactRefCurrent) observer.unobserve(contactRefCurrent);
  }, [
    aboutRef,
    contactRef,
    homeRef,
    portfolioRef,
    qualificationRef,
    skillsRef,
  ]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Kemo Sonko
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineClipboardCheck className="nav__icon" />
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePuzzle className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineMail className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
