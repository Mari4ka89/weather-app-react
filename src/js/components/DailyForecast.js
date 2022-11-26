import React from "react";
import Col from "react-bootstrap/Col";
import WeatherIcon from "./WeatherIcon";
import "../../css/DailyForecast.css";

const DailyForecast = ({
  data: {
    dt,
    temp: { min, max },
    weather,
  },
}) => {
  const calculateDay = () => {
    let date = new Date(dt * 1000);
    let day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  };

  return (
    <Col xs={4} md={2} className="text-center mt-2">
      <div className="pb-2">{calculateDay()}</div>
      <WeatherIcon code={weather[0].icon} size={36} />
      <div>
        <span className="DailyForecast-temperature-max">
          {Math.round(max)}°
        </span>
        <span className="DailyForecast-temperature-min">
          {Math.round(min)}°
        </span>
      </div>
    </Col>
  );
};

export default DailyForecast;
