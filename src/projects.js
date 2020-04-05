import React from "react";
import threeten_video from "./videos/threeten.mp4";
import fiveforty_video from "./videos/fiveforty.mp4";
import socialnetwork_video from "./videos/socialnetwork.mp4";
import imageboard_video from "./videos/imageboard.mp4";
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

  return (
    <div className="projects-wrapper">
      <Waypoint onEnter={() => video1play()} onLeave={() => video1stop()} />
      <div className="project-2">
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
            href="https://github.com/AudreyKj/the-exchange-network"
            target="_blank"
            rel="noopener noreferrer"
          >
            the-exchange-network
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
          The API detects faces and indicates their age, gender, and emotion;
          users can upload selfies and leave comments.
          <br />
          <a
            className="website-link"
            href="https://github.com/AudreyKj/Face-dectection-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Face-dectection-app
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
          ISSUE II OF MAGAZINE SYNTHETIC VELVET <br />
          synthetic velvet is a digital, creative project that explores the
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
            syntheticvelvet-threeten.com
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
          ISSUE I OF MAGAZINE SYNTHETIC VELVET <br />
          synthetic velvet is a digital, creative project that explores the
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
            syntheticvelvet-fiveforty.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
