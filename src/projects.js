import React from "react";
import Fade from "react-reveal/Fade";
import "./App.css";
import Weather from "./weather.js";
import { Waypoint } from "react-waypoint";
import corona_video from "./videos/covid-app.mp4";
import color_spot from "./videos/color-spot.mp4";
import social_network from "./videos/socialnetwork.mp4";
import sign_cause from "./videos/sign-cause.mp4";
import imageboard_video from "./videos/imageboard.mp4";
import anim_3d from "./videos/3d-anim.mp4";
import threeten_video from "./videos/threeten_new.mp4";
import fiveforty_video from "./videos/fiveforty_new.mp4";

//COLOR SPOT
const color_spot_play = () => {
  document.querySelector(".color-spot").play();
};

const color_spot_stop = () => {
  document.querySelector(".color-spot").pause();
  document.querySelector(".color-spot").currentTime = 0;
};

//EXCHANGE
const exchange_play = () => {
  document.querySelector(".exchange").play();
};

const exchange_stop = () => {
  document.querySelector(".exchange").pause();
  document.querySelector(".exchange").currentTime = 0;
};

//SIGN FOR CAUSE
const signcause_play = () => {
  document.querySelector(".signcause").play();
};

const signcause_stop = () => {
  document.querySelector(".signcause").pause();
  document.querySelector(".signcause").currentTime = 0;
};

//COVID
const covid_play = () => {
  document.querySelector(".covid").play();
};

const covid_stop = () => {
  document.querySelector(".covid").pause();
  document.querySelector(".covid").currentTime = 0;
};

//FACE-DETECTION
const facedetection_play = () => {
  document.querySelector(".facedetection").play();
};

const facedetection_stop = () => {
  document.querySelector(".facedetection").pause();
  document.querySelector(".facedetection").currentTime = 0;
};

//3d ANIM
const anim3d_play = () => {
  document.querySelector(".anim3d").play();
};

const anim3d_stop = () => {
  document.querySelector(".anim3d").pause();
  document.querySelector(".anim3d").currentTime = 0;
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
          Software for searching and categorizing colors. An "admin" page
          visualizes data from the app's users.
          <br />
          <span className="tech">
            Tech: SASS/SCSS, React, Node.js, chart.js, PostgreSQL
          </span>
          <br />
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
          Users exchange languages, services, and skills with their friends.
          <br />
          <span className="tech">
            Tech: CSS, React, Redux, Node.js, socket.io, AWS/Cloudinary,
            PostgreSQL, Three.js, Jest
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

      <div className="project-2" id="signcause">
        <p className="description">
          <span className="project-title"> SIGN FOR CAUSE APP </span> <br />
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
          <span className="tech">
            Tech: HTML, CSS, Node.js, Handlebars.js, PostgreSQL, SuperTest
          </span>
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
          <Waypoint
            onEnter={() => signcause_play()}
            onLeave={() => signcause_stop()}
          />
          <Fade>
            <video className="signcause" muted playsInline loop>
              <source src={sign_cause} type="video/mp4" />
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

      <div className="project-2" id="facedetection">
        <p className="description">
          <span className="project-title"> FACE-DETECTION APP </span> <br />
          Users can use the API, upload selfies, and leave comments.
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

      <div className="project-2" id="3danim">
        <p className="description">
          <span className="project-title"> 3-D WEB ANIMATION </span> <br />
          The 3D pieces are draggable and move with the physics engine's
          gravity.
          <br />
          <span className="tech">
            Tech: CSS, React, Three.js, physics engine Physijs
          </span>
          <br />
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
          <Waypoint
            onEnter={() => anim3d_play()}
            onLeave={() => anim3d_stop()}
          />
          <Fade>
            <video className="anim3d" muted playsInline loop>
              <source src={anim_3d} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </div>
      </div>

      <div className="project-last" id="mag1">
        <p className="description">
          <span className="project-title">WEBSITES FOR CREATIVE MAGAZINE</span>
          <br />
          I've designed and developed 2 creative websites with interactive UX
          for online magazine synthetic velvet.
          <br />
          <span className="tech">
            Tech: HTML, CSS, JavaScript, jQuery, Three.js
          </span>
          <br />
          ISSUE I:&nbsp;
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
          <br />
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
          <a
            className="website-link"
            href="https://github.com/AudreyKj/Three-Ten"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <div className="image-project-container-magazine">
          <Waypoint
            onEnter={() => fiveforty_play()}
            onLeave={() => fiveforty_stop()}
          />
          <Waypoint
            onEnter={() => threeten_play()}
            onLeave={() => threeten_stop()}
          />
          <Fade>
            <video className="fiveforty" muted playsInline loop>
              <source src={fiveforty_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
          <Fade>
            <video className="threeten" muted playsInline loop>
              <source src={threeten_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
