import React from "react";
import Fade from "react-reveal/Fade";
import "./App.css";
import Weather from "./weather.js";

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="project-first" id="colorspot">
        <p className="description">
          COLOR SEARCH APP <br />
          Software for searching and categorizing colors. <br />
          An "admin" page visualizes data from the app's users.
          <br />
          Tech: SASS/SCSS, React, Node.js, chart.js, PostgreSQL <br />
          <a
            className="website-link"
            href="https://color-spot.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/color-spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              src="colorspot-1.png"
              className="image-project margin-right"
              alt="colorspot"
            />
            <img
              src="colorspot-2.png"
              className="image-project"
              alt="colorspot"
            />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="exchange">
        <p className="description">
          EXCHANGE APP <br />
          Users exchange languages, services, and skills with their friends.
          <br />
          Tech: React, Redux, Node.js, socket.io, AWS/Cloudinary, PostgreSQL,
          Three.js, Jest
          <br />
          <a
            className="website-link"
            href="https://the-exchange-network.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/the-exchange-network"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project margin-right"
              src="exchange1.png"
              alt="exchange-app"
            />
            <img
              className="image-project"
              src="exchange2.png"
              alt="exchange-app"
            />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="signcause">
        <p className="description">
          SIGN FOR CAUSE APP <br />
          App inspired by&nbsp;
          <a
            className="website-link"
            href="https://www.change.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            change.org.
          </a>
          <br />
          Users register, create a profile, and sign for a cause.
          <br />
          Tech: Node.js, Handlebars.js, PostgreSQL, SuperTest
          <br />
          <a
            className="website-link"
            href="https://sign-for-cause.herokuapp.com/petition"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/sign-for-cause"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project  margin-right"
              src="signcause1.png"
              alt="signforcause"
            />
            <img
              className="image-project"
              src="signcause2.png"
              alt="signforcause"
            />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="covid19">
        <p className="description">
          COVID-19 APP <br />
          Users share their personal experiences of the COVID-19 outbreak.
          <br />A dashboard visualizes data from the submissions.
          <br /> Tech: SASS/SCSS, React, Node.js, PostgreSQL, Jest, chart.js
          <br />
          <a
            className="website-link"
            href="https://corona-emotions.club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/corona-emotions"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project margin-right"
              src="covid-1.png"
              alt="covid"
            />
            <img className="image-project" src="covid-2.png" alt="covid" />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="facedetection">
        <p className="description">
          FACE-DETECTION APP <br />
          Users can use the API, upload selfies, and leave comments.
          <br />
          Tech: Vue.js, Node.js, AWS/Cloudinary, PostgreSQL, face-api.js
          <br />
          <a
            className="website-link"
            href="https://face-face-face.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/Face-dectection-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project margin-right"
              src="face.png"
              alt="face-detection"
            />
            <img
              className="image-project"
              src="face2.png"
              alt="face-detection"
            />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="3danim">
        <p className="description">
          3-D WEB ANIMATION <br />
          The 3D pieces are draggable and move with the physics engine's
          gravity.
          <br />
          Tech: React, Three.js, physics engine Physijs <br />
          <a
            className="website-link"
            href="https://3d-animation.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/3d-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project margin-right"
              src="3danim-1.png"
              alt="3d-anim"
            />
            <img className="image-project" src="3d-anim-2.png" alt="3d-anim" />
          </Fade>
        </div>
      </div>

      <div className="project-2" id="mag1">
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE I)
          <br />
          I've designed and developed a creative website with interactive UX for
          online magazine synthetic velvet.
          <br />
          Tech: HTML, CSS, JavaScript, jQuery, Three.js <br />
          <a
            className="website-link"
            href="https://www.syntheticvelvet-fiveforty.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/Five-Forty"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <div className="image-project-container">
          <Fade>
            <img
              className="image-project  margin-right"
              src="fiveforty-1.png"
              alt="fiveforty"
            />
            <img
              className="image-project"
              src="fiveforty-2.png"
              alt="fiveforty"
            />
          </Fade>
        </div>
      </div>

      <div className="project-last" id="mag2">
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE II) <br />
          I've designed and developed a creative website with interactive UX for
          online magazine synthetic velvet.
          <br />
          Tech: HTML, CSS, JavaScript, jQuery, Three.js <br />
          <a
            className="website-link"
            href="https://www.syntheticvelvet-threeten.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/Three-Ten"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Fade>
            <img
              className="image-project margin-right"
              src="threeten2.png"
              alt="threeten"
            />
            <img className="image-project" src="threeten1.png" alt="threeten" />
          </Fade>
        </div>
      </div>

      <footer>
        <a
          className="link-footer"
          href="https://github.com/AudreyKj"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="link-footer"
          href="https://www.linkedin.com/in/audreykadjar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a className="link-footer" href="mailto:audreykadjar@gmail.com">
          audreykadjar@gmail.com
        </a>
        <br />
        <span className="link-footer"> © Audrey Kadjar, 2020 </span>
        <span className="link-footer">
          <Weather> </Weather>
        </span>
        <a className="top" href="#home">
          BACK TO TOP
        </a>
      </footer>
    </div>
  );
}

export default Projects;
