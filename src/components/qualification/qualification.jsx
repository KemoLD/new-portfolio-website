import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";
import sfu from "../../assets/sfu.jpeg";
import diligent from "../../assets/diligent.jpeg";
import apollo from "../../assets/apollo-insurance.jpeg";
import later from "../../assets/later.jpeg";
import wenso from "../../assets/wenso.jpeg";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <img
                  src={sfu}
                  alt="Simon Fraser University"
                  title="Simon Fraser university"
                  className="qualification__img"
                />
                <h3 className="qualification__title">Computing Science</h3>
                <span className="qualification__subtitle">
                  Simon Fraser University
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  <div className="qualification__calendar-text">2019-2024</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <img
                  src={diligent}
                  alt="Diligent"
                  title="Diligent"
                  className="qualification__img"
                />
                <h3 className="qualification__title">
                  Software Development Engineer Intern
                </h3>
                <span className="qualification__subtitle">Diligent</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  <div className="qualification__calendar-text">
                    Sep 2023-Jan 2024
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <img
                  src={apollo}
                  alt="Apollo Insurance"
                  title="apollo Insurance"
                  className="qualification__img"
                />
                <h3 className="qualification__title">
                  Software Engineer Intern
                </h3>
                <span className="qualification__subtitle">
                  Apollo Insurance
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  <div className="qualification__calendar-text">
                    Sep 2022-May 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <img
                  src={later}
                  alt="Later"
                  title="Later"
                  className="qualification__img"
                />
                <h3 className="qualification__title">
                  Quality Assurance Developer Intern
                </h3>
                <span className="qualification__subtitle">Later</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  <div className="qualification__calendar-text">
                    May 2022-August 2022
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <img
                  src={wenso}
                  alt="Wenso Ltd"
                  title="Wenso Ltd"
                  className="qualification__img"
                />
                <h3 className="qualification__title">Product Manager Inter</h3>
                <span className="qualification__subtitle">Wenso Ltd</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  <div className="qualification__calendar-text">
                    May 2021- Sep 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
