import React from "react";
import { metric, imperial } from "../constants/units";
import "../../css/WeatherTemperature.css";

const WeatherTemperature = ({ temperature, unit, handleSetUnit }) => {
  const showCelsius = (event) => {
    event.preventDefault();
    handleSetUnit(metric);
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    handleSetUnit(imperial);
  };

  const isCelsius = unit === metric;

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(temperature)}</span>
      {isCelsius ? (
        <div className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            °F
          </a>
        </div>
      ) : (
        <div className="unit">
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            °C
          </a>{" "}
          | °F
        </div>
      )}
    </div>
  );
};

export default WeatherTemperature;
