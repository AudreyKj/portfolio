import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  //disabling eslint to pass an empty array to useEffect
  /* eslint-disable */
  const [state, setState] = useState({
    temp: "",
    weather: ""
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(response => {
        console.log("response", response);
        setState({
          ...state,
          temp: response.data.main.temp,
          weather: response.data.weather[0].description
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <span className="weather">
      it's {state.temp}°C in Berlin right now...{state.weather}
    </span>
  );
}

export default Weather;
