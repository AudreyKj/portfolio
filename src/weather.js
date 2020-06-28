import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  //disabling eslint to pass an empty array to useEffect
  /* eslint-disable */
  const [state, setState] = useState({
    temp: "",
    weather: "",
    weatherReady: false,
    weatherReadyMobile: false
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
          weatherReady: true,
          weatherReadyMobile: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {state.weatherReady && (
        <span className="weather">
          it's {state.temp}°C in Berlin right now... {state.weather}
        </span>
      )}

      {state.weatherReadyMobile && (
        <span className="weather-mobile">
          it's {state.temp}°C in Berlin right now...{state.weather}
        </span>
      )}
    </div>
  );
}

export default Weather;
