import React from "react";

function Temp() {
  return (
    <div className="temp">
      <h1>
        I'm currently updating my portfolio - please come back soon!
      </h1>
      <p className="about-text">
        In the meantime, contact me on: <br />
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
    </div>
  );
}

export default Temp;
