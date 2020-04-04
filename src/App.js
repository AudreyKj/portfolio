import React, { useState, useEffect } from "react";
import Projects from "./projects.js";
import Playground from "./playground.js";
import Weather from "./weather.js";
import "./App.css";

function App() {
  const [state, setState] = useState({
    homelink: false,
    projectlink: true,
    temp: "",
    weather: "",
    isLoaded: true
  });

  //disabling eslint to pass an empty array to useEffect
  /* eslint-disable */
  useEffect(() => {
    console.log("state before useEffect", state);

    setTimeout(() => {
      setState(state => {
        return {
          isLoaded: false,
          homeThreeVisible: true,
          homelink: false,
          projectlink: true
        };
      });

      console.log("state after useEffect", state);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <div className="circle"></div>
      {state.isLoaded && <div className="loading"></div>}

      <header className="App-header">
        <span className="title">
          AUDREY KADJAR <br /> BERLIN-BASED <br />
          <a
            className="link-header"
            href="https://www.linkedin.com/in/audreykadjar/"
            target="_blank"
          >
            LINKEDIN
          </a>
          <span> &nbsp;|&nbsp; </span>
          <a
            className="link-header"
            href="https://github.com/AudreyKj"
            target="_blank"
          >
            GITHUB
          </a>
          <br />
          <a className="link-header" href="mailto:audreykadjar@gmail.com">
            audreykadjar@gmail.com
          </a>
        </span>
      </header>
      <Weather> </Weather>

      <div className="home" id="home">
        <a className="links-home" href="#projects">
          PROJECTS
        </a>
        <Playground></Playground>
        <div className="gradient"></div>
      </div>

      <div className="projects" id="projects">
        <a className="links-home" href="#home">
          HOME
        </a>
        <Projects></Projects>
        <a className="top" href="#home">
          TOP
        </a>
      </div>

      <footer> last updated on FRI APRIL 3, 2020, 17:54 </footer>
    </div>
  );
}

export default App;
