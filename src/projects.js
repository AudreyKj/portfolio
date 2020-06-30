import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
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
          Tech: React, Node.js, chart.js, PostgreSQL <br />
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
          <ProgressiveImage src="color-spot.png" placeholder="red1.jpg">
            {src => (
              <img
                className="image-project margin-right"
                src={src}
                alt="image"
              />
            )}
          </ProgressiveImage>

          <img
            className="image-project"
            src="color-spot-2.png"
            alt="colorspot"
          />
        </div>
      </div>

      <div className="project-2" id="covid19">
        <p className="description">
          COVID-19 APP <br />
          Users share their personal experiences of the COVID-19 outbreak and
          browse through others' submissions. A dashboard visualizes data from
          the submissions. <br />
          Tech: React, Node.js, PostgreSQL, Jest, chart.js <br />
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
          <img
            className="image-project margin-right"
            src="covid-1.png"
            alt="covid"
          />
          <img className="image-project" src="covid-3.png" alt="covid" />
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
          <img
            className="image-project margin-right"
            src="covid-1.png"
            alt="covid"
          />
          <img className="image-project" src="covid-3.png" alt="covid" />
        </div>
      </div>

      <div className="project-2" id="facedetection">
        <p className="description">
          FACE-DETECTION APP <br />
          Users use the face-detection API, upload selfies, and leave comments.
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
          <img
            className="image-project  margin-right"
            src="facedetection-1.png"
            alt="face-detection"
          />
          <img
            className="image-project"
            src="facedetection-2.png"
            alt="face-detection"
          />
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
          The homepage's background-color can be customized.
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
          <img
            className="image-project  margin-right"
            src="facedetection-1.png"
            alt="face-detection"
          />
          <img
            className="image-project"
            src="facedetection-2.png"
            alt="face-detection"
          />
        </div>
      </div>

      <div className="project-2">
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE II) <br />
          synthetic velvet is an online, creative magazine which explores the
          concept of time. Each issue takes the form of a website and is themed
          around one specific hour. I've designed and developed the project's
          second issue: a creative website inspired by the time 3:10 pm.
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
          <img
            className="image-project"
            src="threeten-1.png  margin-right"
            alt="threeten"
          />
          <img className="image-project" src="threeten-2.png" alt="threeten" />
        </div>
      </div>

      <div className="project-last">
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE I)
          <br />
          synthetic velvet is an online, creative magazine which explores the
          concept of time. Each issue takes the form of a website and is themed
          around one specific hour. I've designed and developed the project's
          first issue: a creative website inspired by the time 5:40 am.
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
          <img
            className="image-project  margin-right"
            src="fiveforty-2.png"
            alt="fiveforty"
          />
          <img
            className="image-project"
            src="fiveforty-3.png"
            alt="fiveforty"
          />
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

// last update on June, 28th 2020 at 18:45
