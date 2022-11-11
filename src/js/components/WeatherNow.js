import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate } from "../utils/formatUtils";
import WeatherIcon from "./WeatherIcon";

import "../../css/WeatherNow.css";

const WeatherNow = () => (
  <Row className="align-items-center pt-3">
    <Col xs={5} className="d-flex">
      <WeatherIcon name="04d" alt="clear" className="weather-now-icon" />
      <div>
        <span className="temperature">11</span>
        <span className="scale">°C</span>
      </div>
    </Col>
    <Col xs={3}>
      <div>Humidity: 52%</div>
      <div>Wind: 2km/h</div>
    </Col>
    <Col xs={4}>
      <h1>Dnipro</h1>
      <div>{formatDate(new Date())}</div>
      <div>Cloudy</div>
    </Col>
  </Row>
);

export default WeatherNow;
