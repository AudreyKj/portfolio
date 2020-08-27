import React from "react";
import Projects from "./projects.js";
import About from "./about.js";
import "./App.css";
import { Helmet } from "react-helmet";

function App(props) {
  const toggleAbout = () => {
    const about = document.querySelector("div.about-container");

    about.classList.toggle("show");
  };

  return (
    <>
      <Helmet>
        <title>Audrey Kadjar portfolio</title>
        <meta name="description" content="Audrey Kadjar portfolio" />
        <meta
          name="keywords"
          content="portfolio, web development, web developer, full stack, frontend, UX"
        />
        <meta name="application-name" content="portfolio" />
        <meta name="theme-color" content="#a7b9c4" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:url" content="https://audreykadjar.world" />
        <meta property="og:title" content="portfolio" />
        <meta property="og:description" content="portfolio" />
        <meta property="og:image" content="preview.jpg" />
        <meta property="og:image:url" content="preview.jpg" />
      </Helmet>

      <div className="home" id="home">
        <header>
          <span className="name">Audrey Kadjar</span>

          <a className="links-home" href="#about" onClick={toggleAbout}>
            about
          </a>
        </header>

        <div className="about-container">
          <About toggleAbout={toggleAbout}></About>
        </div>

        <div className="projects-index">
          <span className="project"> PROJECT INDEX </span>
          <a className="project-index-links" href="#colorspot">
            color search app
          </a>
          <a href="#exchange" className="project-index-links  break">
            exchange app
          </a>

          <a href="#spacex" className="project-index-links">
            spaceX app
          </a>

          <a href="#facedetection" className="project-index-links">
            face-detection app
          </a>

          <a href="#covid19" className="project-index-links break">
            covid19 app
          </a>

          <a href="#signcause" className="project-index-links">
            sign for a cause app
          </a>

          <a href="#mag1" className="project-index-links">
            creative magazine
          </a>
        </div>
      </div>

      <div className="projects" id="projects">
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
