import React, { useState, useEffect } from "react";
import Projects from "./projects.js";
import Playground from "./playground.js";
import PlaygroundMobile from "./playground-mobile.js";
import Weather from "./weather.js";
import "./App.css";

function App() {
  const [state, setState] = useState({
    isLoaded: true
  });

  /* eslint-disable */
  useEffect(() => {
    setTimeout(() => {
      setState(state => {
        return {
          isLoaded: false
        };
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      {state.isLoaded && <div className="loading"></div>}

      <header className="App-header">
        <span className="title">
          AUDREY KADJAR <br /> BERLIN-BASED <br />
          <a
            className="link-header"
            href="https://www.linkedin.com/in/audreykadjar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <span> &nbsp;|&nbsp; </span>
          <a
            className="link-header"
            href="https://github.com/AudreyKj"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <br />
          <a className="link-header" href="mailto:audreykadjar@gmail.com">
            audreykadjar@gmail.com
          </a>
        </span>
      </header>

      <div className="home" id="home">
        <Weather> </Weather>
        <a className="links-home" href="#projects">
          PROJECTS
        </a>
        <Playground></Playground>
      </div>

      <div className="home-mobile" id="home-mobile">
        <Weather> </Weather>
        <a className="links-home" href="#projects">
          PROJECTS
        </a>
        <PlaygroundMobile></PlaygroundMobile>
      </div>

      <div className="projects" id="projects">
        <a className="links-home-home" href="#home">
          HOME
        </a>
        <Projects></Projects>
        <a className="top" href="#home">
          TOP
        </a>
        <a className="top-mobile" href="#home-mobile">
          TOP
        </a>
      </div>

      <footer> last updated on FRI MAY 22, 2020, 23:14 </footer>
    </div>
  );
}

export default App;
