import React from "react";
import Col from "react-bootstrap/Col";
import WeatherIcon from "./WeatherIcon";
import "../../css/DailyForecast.css";

const DailyForecast = ({ dt, min, max, name, clear }) => (
  <Col xs={2} className="DailyForecast">
    <div className="text-uppercase">Mon</div>
    <WeatherIcon code="04d" size={36} />
    <div>
      <span className="fw-bold">{Math.round(max || 30)}°</span>
      <span>{Math.round(min || 10)}°</span>
    </div>
  </Col>
);

export default DailyForecast;
