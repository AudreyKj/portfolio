import React from "react";
import threeten_video from "./videos/threeten.mp4";
import fiveforty_video from "./videos/fiveforty.mp4";
import socialnetwork_video from "./videos/socialnetwork.mp4";
import imageboard_video from "./videos/imageboard.mp4";
import corona_video from "./videos/covid-emotions-new.mp4";
import sign_for_cause_video from "./videos/sign-for-cause_1.mp4";
import color_spot_video from "./videos/color-spot-new.mp4";
import { Waypoint } from "react-waypoint";
import "./App.css";

function Projects() {
  //VIDEO1
  const video1play = () => {
    document.querySelector(".video1").play();
  };

  const video1stop = () => {
    document.querySelector(".video1").pause();
    document.querySelector(".video1").currentTime = 0;
  };

  //VIDEO2
  const video2play = () => {
    document.querySelector(".video2").play();
  };

  const video2stop = () => {
    document.querySelector(".video2").pause();
    document.querySelector(".video2").currentTime = 0;
  };

  //VIDEO3
  const video3play = () => {
    document.querySelector(".video3").play();
  };

  const video3stop = () => {
    document.querySelector(".video3").pause();
    document.querySelector(".video3").currentTime = 0;
  };

  //VIDEO4
  const video4play = () => {
    document.querySelector(".video4").play();
  };

  const video4stop = () => {
    document.querySelector(".video4").pause();
    document.querySelector(".video4").currentTime = 0;
  };

  //VIDEO5
  const video5play = () => {
    document.querySelector(".video5").play();
  };

  const video5stop = () => {
    document.querySelector(".video5").pause();
    document.querySelector(".video5").currentTime = 0;
  };

  //VIDEO6
  const video6play = () => {
    document.querySelector(".video6").play();
  };

  const video6stop = () => {
    document.querySelector(".video6").pause();
    document.querySelector(".video6").currentTime = 0;
  };

  //VIDEO7
  const video7play = () => {
    document.querySelector(".video7").play();
  };

  const video7stop = () => {
    document.querySelector(".video7").pause();
    document.querySelector(".video7").currentTime = 0;
  };

  //  <Waypoint onEnter={() => video7play()} onLeave={() => video7stop()} />

  return (
    <div className="projects-wrapper">
      <div className="project-2" id="colorspot">
        <div className="image-project-container">
          <img className="image-project" src="color-spot.png" alt="colorspot" />
          <img
            className="image-project"
            src="color-spot-1.png"
            alt="colorspot"
          />
          <img
            className="image-project"
            src="color-spot-2.png"
            alt="colorspot"
          />
        </div>
        <p className="description">
          COLOR SPOT APP <br />
          Users detect colors in images and save color palettes.
          <br /> An "admin" page visualizes data from the app's users.
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
      </div>

      <Waypoint onEnter={() => video5play()} onLeave={() => video5stop()} />
      <div className="project-2" id="covid19">
        <video
          className="video5"
          width="700"
          height="460"
          muted
          playsInline
          loop
        >
          <source src={corona_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          COVID-19 APP <br />
          Users share their personal experiences of the COVID-19 outbreak and
          browse through others' submissions. A dashboard visualizes the data of
          submissions. <br /> App made with Node.js + React.
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
      </div>

      <Waypoint onEnter={() => video1play()} onLeave={() => video1stop()} />
      <div className="project-2" id="exchange">
        <video
          className="video1"
          width="700"
          height="460"
          muted
          playsInline
          loop
        >
          <source src={socialnetwork_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          EXCHANGE APP <br /> React app where users can exchange languages,
          services, and skills with their friends. <br />
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
      </div>

      <Waypoint onEnter={() => video2play()} onLeave={() => video2stop()} />
      <div className="project-2">
        <video className="video2" muted playsInline loop>
          <source src={imageboard_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          FACE-DETECTION APP <br />
          App made with Vue.js and face recognition API. <br />
          Users can upload selfies and leave comments.
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
      </div>

      <Waypoint onEnter={() => video6play()} onLeave={() => video6stop()} />
      <div className="project-2">
        <video className="video6" muted playsInline loop>
          <source src={sign_for_cause_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          SIGN FOR CAUSE APP <br />
          App inspired by&nbsp;
          <a
            className="links-text"
            href="https://www.change.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            change.org.
          </a>
          <br />
          Users register, create a profile, and sign for a cause.
          <br />
          The homepage's customizable design enables users to choose the
          background-color.
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
      </div>

      <Waypoint onEnter={() => video3play()} onLeave={() => video3stop()} />
      <div className="project-2">
        <video className="video3" muted playsInline loop>
          <source src={threeten_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE II) <br />
          synthetic velvet is an online, creative magazine which explores the
          concept of time. Each issue takes the form of a website and is themed
          around one specific hour. I've designed and developed the project's
          second issue: a creative website inspired by the time 3:10 pm.
          <br />
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
      </div>

      <div className="project-last">
        <Waypoint onEnter={() => video4play()} onLeave={() => video4stop()} />
        <video className="video4" muted playsInline loop>
          <source src={fiveforty_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="description">
          WEBSITE FOR CREATIVE MAGAZINE (ISSUE I)
          <br />
          synthetic velvet is an online, creative magazine which explores the
          concept of time. Each issue takes the form of a website and is themed
          around one specific hour. I've designed and developed the project's
          first issue: a creative website inspired by the time 5:40 am.
          <br />
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
      </div>
      <div className="project-last footer">
        <ul>
          INDEX <br />
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        LinkedIn GitHub Email: audreykadjar@gmail.com
      </div>
    </div>
  );
}

export default Projects;
