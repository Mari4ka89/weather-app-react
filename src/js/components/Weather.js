import React, { useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../constants/api";
import { metric } from "../constants/units";
import SearchForm from "./SearchForm";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";
import BusyIndicator from "./BusyIndicator";

import "../../css/Weather.css";

const Weather = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState(metric);

  const handleSetUnit = (value) => {
    setUnit(value);
  };

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
    let url = `${apiUrl}weather?q=${location}&appid=${apiKey}&units=${unit}`;

    axios
      .get(url)
      .then(handleResponse)
      .catch(() => console.log("There is no such destination."));
  };

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <SearchForm handleSearch={search} unit={unit} location={defaultCity} />
        <WeatherNow
          data={weatherData}
          unit={unit}
          handleSetUnit={handleSetUnit}
        />
        <Forecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search(defaultCity);

    return (
      <div className="w-100 text-center">
        <BusyIndicator />
      </div>
    );
  }
};

export default Weather;
