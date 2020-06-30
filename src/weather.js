import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  //disabled eslint to pass empty array to useEffect
  /* eslint-disable */
  const [state, setState] = useState({
    temp: "",
    weather: "",
    weatherReady: false
  });

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(response => {
        setState({
          ...state,
          temp: response.data.main.temp,
          weather: response.data.weather[0].description,
          weatherReady: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {state.weatherReady && (
        <span className="weather">
          it's {state.temp}°C in Berlin right now, sky with {state.weather}
        </span>
      )}
    </>
  );
}

export default Weather;

// <img className="eye-icon" src="eye-icon.svg" alt="eye-icon" />
