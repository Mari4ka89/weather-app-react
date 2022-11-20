import React from "react";
import Col from "react-bootstrap/Col";
import WeatherIcon from "./WeatherIcon";
import "../../css/DailyForecast.css";

const DailyForecast = ({ dt, min, max, name, clear }) => (
  <Col>
    <div className="text-uppercase">Mon</div>
    <WeatherIcon code="04d" size={36} />
    <div>
      <span className="DailyForecast-temperature-max">
        {Math.round(max || 30)}°
      </span>
      <span className="DailyForecast-temperature-min">
        {Math.round(min || 10)}°
      </span>
    </div>
  </Col>
);

export default DailyForecast;
