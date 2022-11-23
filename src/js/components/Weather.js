import React, { useState } from "react";
import axios from "axios";
import apiKey from "../constants/apiKey";
import apiUrl from "../constants/apiUrl";
import SearchForm from "./SearchForm";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";

import "../../css/Weather.css";

const Weather = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({});

  const handleResponse = ({
    data: {
      coord,
      main: { temp, humidity },
      dt,
      weather,
      wind: { speed },
      name,
    },
  }) => {
    const { icon, description } = weather[0];

    setWeatherData({
      loaded: true,
      coordinates: coord,
      temperature: temp,
      humidity,
      date: new Date(dt * 1000),
      description,
      icon,
      wind: speed,
      city: name,
    });
  };

  const search = (location) => {
    let url = `${apiUrl}weather?q=${location}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then(handleResponse)
      .catch(() => console.log("There is no such destination."));
  };

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <SearchForm handleSearch={search} location={defaultCity} />
        <WeatherNow data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search(defaultCity);
    return "Loading...";
  }
};

export default Weather;
