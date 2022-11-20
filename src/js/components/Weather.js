import React, { useState } from "react";
import axios from "axios";
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
    const apiKey = "b5e52b0183dd015aa8333edb5e3eada1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => console.log("There is no such destination."));
  };

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <SearchForm handleSearch={search} location={defaultCity} />
        <WeatherNow data={weatherData} />
        <Forecast />
      </div>
    );
  } else {
    search(defaultCity);
    return "Loading...";
  }
};

export default Weather;
