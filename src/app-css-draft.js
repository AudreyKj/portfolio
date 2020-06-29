@import-normalize;

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: Arial, Helvetica, "sans-serif";
  /* background: linear-gradient(to top, #cfd9df 0%, #4f8aab 100%); */
  background-color: #f7f7f7;
  overflow-x: hidden;
  color: #333;
  min-height: 100vh;
}

/* loading */
@keyframes fadeOff {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

div.loading {
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(to top, #4f8aab 30%, #cfd9df 100%);
  z-index: 1000;
  position: fixed;

  animation: fadeOff 2s;
}

/* header + weather api */
header {
  width: 100%;
}

span.title {
  font-size: 1rem;
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  text-align: left;
  z-index: 500;
}

@media (min-width: 1900px) {
  span.title {
    font-size: 1.5rem;
  }
}

@media (max-width: 700px) {
  span.title {
    position: absolute;
  }
}

a.link-header,
a.link-header:visited {
  text-decoration: none;
  color: #333;
}

a.link-header:hover {
  color: white;
  text-decoration: none;
}

span.weather {
  font-size: 1rem;
  position: absolute;
  top: 1.6rem;
  left: 20rem;
  padding: 5px;
  font-style: italic;

  animation: fadeIn 2.5s;
}

span.weather-mobile {
  font-size: 1rem;
  position: absolute;
  top: 8rem;
  left: 0;
  padding: 5px;
  font-style: italic;

  display: none;
  z-index: 1000;

  animation: fadeIn 2s;
}

@media (min-width: 1900px) {
  span.weather {
    font-size: 1.5rem;
  }
}

@media (max-width: 900px) {
  span.weather {
    display: none;
  }

  span.weather-mobile {
    display: block;
  }
}

@media (max-width: 700px) {
  span.weather-mobile {
    top: 60%;
  }
}

@media (max-height: 500px) {
  span.weather-mobile {
    top: 85%;
  }
}

/* home: 3d animation  */
canvas {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}

div#board-canvas {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  vertical-align: bottom;
  position: fixed;
}

div.home {
  background: linear-gradient(to top, #4f8aab 30%, #cfd9df 100%);
  width: 100%;
  min-height: 100vh;
}

@media (max-width: 700px) {
  div.home {
    display: none;
  }
}

/* div.gradient {
  height: 8rem;
  background: linear-gradient(to top, #cfd9df 30%, #4f8aab 100%);
  position: absolute;
  bottom: 0;
} */

/* mobile  */
div.home-mobile {
  background: linear-gradient(to top, #4f8aab 30%, #cfd9df 100%);
  width: 100%;
  min-height: 100vh;

  display: none;
}

@media (max-width: 700px) {
  div.home-mobile {
    display: block;
  }
}

/* projects */
div.projects {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #cfd9df;
}

/* nav */
a.links-home {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 5000;
}

@media (min-width: 2000px) {
  a.links-home {
    font-size: 3rem;
  }
}

@media (max-width: 700px) {
  a.links-home {
    font-size: 1.5rem;
  }
}

a.links-home-home {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 5000;
}

@media (min-width: 1900px) {
  a.links-home-home {
    font-size: 3rem;
  }
}

@media (max-width: 700px) {
  a.links-home-home {
    display: none;
  }
}

a.links-home-project {
  position: fixed;
  right: 1rem;
  top: 0.5rem;
  font-size: 2rem;
  z-index: 5000;
  cursor: pointer;
}

a.link-playground,
a.link-playground:visited,
a.links-home,
a.links-home:visited,
a.links-home-home,
a.links-home-home:visited {
  text-decoration: none;
  color: #333;
}

a.top,
a.top:visited {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 5000;
  color: #333;
  text-decoration: none;
}

@media (max-width: 700px) {
  a.top {
    display: none;
  }
}

a.top-mobile,
a.top-mobile:visited {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 5000;
  color: #333;
  text-decoration: none;

  display: none;
}

@media (max-width: 700px) {
  a.top-mobile {
    display: block;
  }
}

a.links-home:hover,
a.top:hover,
a.top-mobile:hover,
a.links-home-home:hover {
  color: white;
}

/* projects */
div.projects-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

@media (max-width: 960px) {
  div.projects-wrapper {
    padding-top: 50px;
  }
}

div.project {
  margin-top: 8%;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  position: relative;
}

div.project-2 {
  margin-top: 3%;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}

div.project-last {
  margin-top: 3%;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}

div.image-container,
div.image-container-two {
  position: relative;
  margin-bottom: 210px;
  height: 150px;
  width: 200px;

  display: flex;
  justify-content: center;
}

img.project-1 {
  width: 650px;
  height: auto;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

p.description {
  width: 60%;
  text-align: center;
  font-size: 1.4rem;
  color: #333;
  line-height: 1.5;
}

a.links-text,
a.links-text:hover,
a.links-text:visited {
  text-decoration: underline;
  color: #333;
}

a.website-link,
a.website-link:visited {
  color: #4f8aab;
}

a.website-link:hover {
  color: white;
}

video {
  -webkit-box-shadow: 1px 1px 19px 2px #333;
  box-shadow: 1px 1px 19px 2px #333;
  width: 700px;
  height: auto;
}

@media (min-width: 1900px) {
  video {
    width: 1000px;
    height: auto;
  }
}

@media (max-width: 710px) {
  video {
    width: 550px;
    height: auto;
  }
}

@media (max-width: 615px) {
  video {
    width: 400px;
    height: auto;
  }
}

@media (max-width: 450px) {
  video {
    width: 300px;
    height: auto;
  }
}

/* footer */
footer {
  position: fixed;
  bottom: 0.5rem;
  left: 0.5rem;
  font-size: 0.7rem;
  text-transform: uppercase;
}

@media (max-width: 745px) {
  footer {
    display: none;
  }
}

/* COLORS */


/* #colorspot {
  background-color: #231f20;
}

#covid19 {
  background-color: #83a3a2;
}

#exchange {
  background-color: #ae9f9e;
}

#facedetection {
  background-color: #cfd9df;
} */

/* #7a898e background-color: #e9e5dd; */
