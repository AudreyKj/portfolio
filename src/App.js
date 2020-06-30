import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Temp from "./temp";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Audrey Kadjar portfolio</title>
        <meta name="description" content="Audrey Kadjar portfolio" />
        <meta
          name="keywords"
          content="portfolio, web development, web developer, full stack"
        />
        <meta name="application-name" content="portfolio" />
        <meta name="theme-color" content="#a7b9c4" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:url" content="https://audreykadjar.world" />
        <meta property="og:title" content="portfolio" />
        <meta property="og:description" content="portfolio" />
        <meta property="og:image" content="preview.jpg" />
        <meta property="og:image:url" content="preview.jpg" />
      </Helmet>

      <Temp> </Temp>
    </div>
  );
}

export default App;
