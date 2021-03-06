import React from "react";
import Fade from "react-reveal/Fade";
import "./App.css";
import Weather from "./weather.js";
import { Waypoint } from "react-waypoint";
import corona_video from "./videos/covid-app.mp4";
import color_spot from "./videos/color-spot.mp4";
import social_network from "./videos/exchange-network.mp4";
import imageboard_video from "./videos/imageboard.mp4";
import threeten_video from "./videos/threeten_new.mp4";
import fiveforty_video from "./videos/fiveforty-new.mp4";
import spacex_video from "./videos/spacex.mp4";
import goldenhour_video from "./videos/goldenhour.mp4";

//COLOR SPOT
const color_spot_play = () => {
  document.querySelector(".color-spot").play();
};

const color_spot_stop = () => {
  document.querySelector(".color-spot").pause();
  document.querySelector(".color-spot").currentTime = 0;
};

//SPACEX
const spacex_play = () => {
  document.querySelector("video.spacex").play();
};

const spacex_stop = () => {
  document.querySelector("video.spacex").pause();
  document.querySelector("video.spacex").currentTime = 0;
};

//EXCHANGE
const exchange_play = () => {
  document.querySelector(".exchange").play();
};

const exchange_stop = () => {
  document.querySelector(".exchange").pause();
  document.querySelector(".exchange").currentTime = 0;
};

//FACE-DETECTION
const facedetection_play = () => {
  document.querySelector(".facedetection").play();
};

const facedetection_stop = () => {
  document.querySelector(".facedetection").pause();
  document.querySelector(".facedetection").currentTime = 0;
};

//COVID
const covid_play = () => {
  document.querySelector(".covid").play();
};

const covid_stop = () => {
  document.querySelector(".covid").pause();
  document.querySelector(".covid").currentTime = 0;
};

//GOLDEN HOUR - CREATIVE MAGAZINE
const goldenhour_play = () => {
  document.querySelector(".goldenhour").play();
};

const goldenhour_stop = () => {
  document.querySelector(".goldenhour").pause();
  document.querySelector(".goldenhour").currentTime = 0;
};

//THREE TEN - CREATIVE MAGAZINE
const threeten_play = () => {
  document.querySelector(".threeten").play();
};

const threeten_stop = () => {
  document.querySelector(".threeten").pause();
  document.querySelector(".threeten").currentTime = 0;
};

//FIVE FORTY - CREATIVE MAGAZINE
const fiveforty_play = () => {
  document.querySelector(".fiveforty").play();
};

const fiveforty_stop = () => {
  document.querySelector(".fiveforty").pause();
  document.querySelector(".fiveforty").currentTime = 0;
};

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="project-first" id="colorspot">
        <p className="description">
          <span className="project-title"> COLOR SEARCH APP </span> <br />
          Software for searching and categorizing colors. <br />
          The app also features an admin dashboard using data visualization.
          <br />
          <span className="tech">
            Tech: SASS/SCSS, Styled Components, React, Node.js, chart.js,
            PostgreSQL, Google Auth, Material-UI, Jest
          </span>
          <br />
          <a
            className="website-link"
            href="https://color-spot.space/"
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
          <Waypoint
            onEnter={() => color_spot_play()}
            onLeave={() => color_spot_stop()}
          />
          <Fade>
            <video className="color-spot" muted playsInline loop>
              <source src={color_spot} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-2" id="exchange">
        <p className="description">
          <span className="project-title"> EXCHANGE APP </span> <br />
          App where users exchange languages, services, and skills with their
          friends.
          <br />
          <span className="tech">
            Tech: SASS/SCSS, React, Redux, Node.js, socket.io, AWS/Cloudinary,
            PostgreSQL, Three.js, Material-UI, Jest
          </span>
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
          <Waypoint
            onEnter={() => exchange_play()}
            onLeave={() => exchange_stop()}
          />
          <Fade>
            <video className="exchange" muted playsInline loop>
              <source src={social_network} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-2" id="spacex">
        <p className="description">
          <span className="project-title"> SPACE X APP </span>
          <br /> Web app using the&nbsp;
          <a
            className="website-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-spacex/SpaceX-API"
          >
            REST API spaceX.
          </a>
          <br />
          Featuring infinite scroll, search, filter, and data visualization.
          <br />
          <span className="tech">
            Tech: SASS/SCSS, React, JavaScript, Redux, Redux Thunk, chart.js,
            styled-components, Jest
          </span>
          <br />
          <a
            className="website-link"
            href="https://spacex-spacex.netlify.app/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          <a
            className="website-link"
            href="https://github.com/AudreyKj/spacex-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <div className="image-project-container">
          <Waypoint
            onEnter={() => spacex_play()}
            onLeave={() => spacex_stop()}
          />
          <Fade>
            <video className="spacex" muted playsInline loop>
              <source src={spacex_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-2" id="facedetection">
        <p className="description">
          <span className="project-title"> FACE-DETECTION APP </span> <br />
          Users use the face-detection tool, upload selfies, and leave comments.
          <br />
          <span className="tech">
            Tech: HTML, CSS, Vue.js, Node.js, AWS/Cloudinary, PostgreSQL,
            face-api.js
          </span>
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
          <Waypoint
            onEnter={() => facedetection_play()}
            onLeave={() => facedetection_stop()}
          />
          <Fade>
            <video className="facedetection" muted playsInline loop>
              <source src={imageboard_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-2" id="covid19">
        <p className="description">
          <span className="project-title"> COVID-19 APP </span> <br />
          Users share their personal experiences of the COVID-19 outbreak.
          <br />A dashboard visualizes data from the submissions. <br />
          <span className="tech">
            Tech: SASS/SCSS, React, Node.js, PostgreSQL, Jest, chart.js
          </span>
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
          <Waypoint onEnter={() => covid_play()} onLeave={() => covid_stop()} />
          <Fade>
            <video className="covid" muted playsInline loop>
              <source src={corona_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-last" id="mag1">
        <p className="description">
          <span className="project-title">WEBSITES FOR CREATIVE MAGAZINE</span>
          <br />
          I've designed and developed 3 creative websites with interactive UX
          for an online magazine project.
          <br />
          <span className="tech">
            Tech - issue III: React, CSS, Threejs React-Fiber <br />
            Tech - issue I and II: HTML, CSS, JavaScript, jQuery, Three.js
          </span>
          <br />
          ISSUE III:&nbsp;
          <a
            className="website-link"
            href="https://www.syntheticvelvet-goldenhour.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          ISSUE II:&nbsp;
          <a
            className="website-link"
            href="https://www.syntheticvelvet-threeten.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          &nbsp; | &nbsp;
          ISSUE I:&nbsp;
          <a
            className="website-link"
            href="https://www.syntheticvelvet-fiveforty.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
        </p>
        <div className="image-project-container-magazine">
        <Waypoint
            onEnter={() => goldenhour_play()}
            onLeave={() => goldenhour_stop()}
          />
          <Waypoint
            onEnter={() => fiveforty_play()}
            onLeave={() => fiveforty_stop()}
          />
          <Waypoint
            onEnter={() => threeten_play()}
            onLeave={() => threeten_stop()}
          />
          <Fade>
            <video className="goldenhour" muted playsInline loop>
              <source src={goldenhour_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
          <Fade>
            <video className="threeten" muted playsInline loop>
              <source src={threeten_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
          <Fade>
            <video className="fiveforty marginTop" muted playsInline loop>
              <source src={fiveforty_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <footer>
        <a
          className="link-footer"
          href="https://github.com/AudreyKj?tab=repositories&q=&type=public&language="
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
