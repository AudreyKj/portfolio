import React, { useState, useEffect } from "react";
import "./App.css";

function About(props) {
  console.log(props);
  return (
    <>
      <section className="about">
        <div className="close" onClick={props.toggleAbout}>
          X
        </div>
        <p className="about-text">
          I am a Web Developer based in Berlin, Germany. <br />
          <br />I develop full-stack products with a focus on JavaScript,
          Node.js, and React.
          <br />
          <br /> I thrive on crafting digital experiences that combine
          development and design.
          <br /> <br />
          <a
            className="links-about"
            href="https://github.com/AudreyKj"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br />
          <a
            className="links-about"
            href="https://www.linkedin.com/in/audreykadjar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <br />
          </a>
          <a className="links-about" href="mailto:audreykadjar@gmail.com">
            audreykadjar@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}

export default About;
