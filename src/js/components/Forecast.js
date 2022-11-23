import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import apiKey from "../constants/apiKey";
import apiUrl from "../constants/apiUrl";
import DailyForecast from "./DailyForecast";

const Forecast = ({ coordinates: { lat, lon } }) => {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleResponse = ({ data: { daily } }) => {
    setForecast(daily);
    setLoaded(true);
  };

  if (loaded) {
    console.log("forecast", forecast);

    return (
      <div className="text-align-center">
        <Row>
          {forecast.slice(0, 6).map((weatherData, index) => (
            <DailyForecast data={weatherData} key={index} />
          ))}
        </Row>
      </div>
    );
  } else {
    const url = `${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return null;
  }
};

export default Forecast;
