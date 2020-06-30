import React from "react";
import Projects from "./projects.js";
import About from "./about.js";
import "./App.css";
import { Helmet } from "react-helmet";

function App(props) {
  console.log("props app", props);

  const displayColorSpot = () => {
    const colorspotImg = document.querySelector("img.color-spot");
    colorspotImg.style.display = "block";
  };

  const hideColorSpot = () => {
    const colorspotImg = document.querySelector("img.color-spot");
    colorspotImg.style.display = "none";
  };

  const toggleAbout = () => {
    const about = document.querySelector("div.about-container");
    console.log("about", about);
    about.classList.toggle("show");
  };

  return (
    <>
      <Helmet>
        <title>Audrey Kadjar portfolio</title>
        <meta name="description" content="Audrey Kadjar portfolio" />
        <meta
          name="keywords"
          content="portfolio, web development, web developer, full stack"
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
        <div className="hovereffect-container">
          <img className="color-spot" src="color-spot.png" alt="color-spot" />
        </div>
        <div className="projects-index">
          <span className="project"> projects: </span>
          <a
            className="project-index-links"
            href="#colorspot"
            onMouseEnter={displayColorSpot}
            onMouseLeave={hideColorSpot}
          >
            color search app
          </a>
          <div className="circle"></div>
          <a href="#covid19" className="project-index-links break">
            covid19 app
          </a>

          <a href="#exchange" className="project-index-links">
            exchange app
          </a>
          <div className="circle"></div>
          <a href="#facedetection" className="project-index-links break">
            face-detection app
          </a>

          <a href="#signcause" className="project-index-links">
            sign for a cause app
          </a>
          <div className="circle"></div>
          <a href="#3danim" className="project-index-links break">
            3-d web animation
          </a>

          <a href="#mag1" className="project-index-links">
            creative magazine I
          </a>
          <div className="circle"></div>
          <a href="#mag2" className="project-index-links">
            creative magazine II
          </a>
        </div>

        <div className="black-strip"> </div>
      </div>

      <div className="projects" id="projects">
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;

// <span
//   className="name"
//   onMouseEnter={displayPortrait}
//   onMouseLeave={hidePortrait}
// >
//   Audrey Kadjar
// </span>
//
// const displayPortrait = () => {
//   const colorspotImg = document.querySelector("img.portrait");
//   colorspotImg.style.display = "block";
// };
//
// const hidePortrait = () => {
//   const colorspotImg = document.querySelector("img.portrait");
//   colorspotImg.style.display = "none";
// };

//  <a className="links-home" href="#projects">
//projects
//</a>
// <div className="about-link">
//   <a className="links-about" href="#about" onClick={toggleAbout}>
//     about
//   </a>
// </div>

// <div className="about-link">
//   <a className="links-about" href="#about" onClick={toggleAbout}>
//     about
//   </a>
// </div>

//  <a className="links-home" href="#projects">
//   projects
// </a>

// <div className="home" id="home">
//   <div className="circle-logo"> </div>
//   {state.isLoaded && <div className="loading"></div>}
//   <header>
//     <a className="links-home" href="#projects">
//       INFO & CONTACT
//     </a>
//
//     <span class="about-line">
//       Audrey Kadjar is a Web Developer based in Berlin, Germany.
//     </span>
//   </header>
//   <img className="color-spot" src="color-spot.png" alt="color-spot" />
//
//   <div class="projects-index">
//     <span className="project"> PROJECTS </span>
//     <br />
//     <a
//       href="#colorspot"
//       onMouseEnter={displayColorSpot}
//       onMouseLeave={hideColorSpot}
//     >
//       COLOR SPOT APP
//     </a>
//     <div className="circle"> </div>
//     <span> COVID 19 APP </span> <div className="circle"> </div>
//     <span> EXCHANGE APP </span> <div className="circle"> </div>
//     <br />
//     <span> FACE-DETECTION APP </span> <div className="circle"> </div>
//     <span> SIGN FOR A CAUSE APP </span> <div className="circle"> </div>
//     <br />
//     <span> CREATIVE MAGAZINE I </span> <div className="circle"> </div>
//     <span> CREATIVE MAGAZINE II </span>
//     <div className="circle"> </div>
//   </div>
// </div>
//
// <div className="projects" id="projects">
//   <Projects></Projects>
//   <a className="top" href="#home">
//     TOP
//   </a>
//   <a className="top-mobile" href="#home-mobile">
//     TOP
//   </a>
// </div>
// </div>

// <div className="projects" id="projects">
//   <a className="links-home-home" href="#home">
//     HOME
//   </a>
//   <Projects></Projects>
//   <a className="top" href="#home">
//     TOP
//   </a>
//   <a className="top-mobile" href="#home-mobile">
//     TOP
//   </a>
// </div>

//
// <br />
// <a className="link-header" href="mailto:audreykadjar@gmail.com">
//   audreykadjar@gmail.com
// </a>

// <a
//   className="link-header"
//   href="https://www.linkedin.com/in/audreykadjar/"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   LINKEDIN
// </a>
// <span> &nbsp;|&nbsp; </span>
// <a
//   className="link-header"
//   href="https://github.com/AudreyKj"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   GITHUB
// </a>

/* eslint-disable */
// useEffect(() => {
//   setTimeout(() => {
//     setisLoaded(false);
//   }, 2000);
// }, []);

// {isLoaded && <div className="loading"></div>}
