import React, { useRef } from "react";
import "./App.css";
import RefsContext from "./context/refsContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/qualification";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const qualificationRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <RefsContext.Provider
      value={{
        homeRef,
        aboutRef,
        skillsRef,
        qualificationRef,
        portfolioRef,
        contactRef,
      }}
    >
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </RefsContext.Provider>
  );
}

export default App;
