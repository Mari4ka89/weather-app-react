import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { apiKey, apiUrl } from "../constants/api";
import DailyForecast from "./DailyForecast";

const Forecast = ({ coordinates, unit }) => {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(false), [coordinates]);

  const handleResponse = ({ data: { daily } }) => {
    setForecast(daily);
    setLoaded(true);
  };

  const loadForecast = () => {
    const { lat, lon } = coordinates;
    const url = `${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    axios.get(url).then(handleResponse);
  };

  if (loaded) {
    return (
      <Row>
        {forecast.slice(0, 6).map((weatherData, index) => (
          <DailyForecast data={weatherData} key={index} />
        ))}
      </Row>
    );
  } else {
    loadForecast();

    return null;
  }
};

export default Forecast;
