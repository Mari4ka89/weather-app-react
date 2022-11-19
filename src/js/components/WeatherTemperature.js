import React, { useState } from "react";
import "../../css/WeatherTemperature.css";

const WeatherTemperature = ({ celsius }) => {
  const [unit, setUnit] = useState("celsius");

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit(fahrenheit);
  };

  const fahrenheit = () => (celsius * 9) / 5 + 32;
  const isCelsius = unit === "celsius";

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {Math.round(isCelsius ? celsius : fahrenheit())}
      </span>
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
