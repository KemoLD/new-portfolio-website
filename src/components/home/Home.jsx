import React, { useContext } from "react";
import RefsContext from "../../context/refsContext";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";

const Home = () => {
  const { homeRef } = useContext(RefsContext);
  return (
    <section className="home section" id="home" ref={homeRef}>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
