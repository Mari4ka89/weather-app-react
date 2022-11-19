import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate } from "../utils/formatUtils";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "../../css/WeatherNow.css";

const WeatherNow = ({
  data: { city, date, temperature, icon, wind, humidity, description },
}) => {
  return (
    <Row className="WeatherNow pt-3">
      <Col xs={5}>
        <div className="d-flex align-items-center">
          <WeatherIcon code={icon} size={52} />
          <WeatherTemperature celsius={temperature} />
        </div>
      </Col>
      <Col xs={3} className="text-muted">
        <div>Humidity: {humidity}%</div>
        <div>Wind: {Math.round(wind)}km/h</div>
      </Col>
      <Col xs={4}>
        <h1>{city}</h1>
        <div className="text-muted">{formatDate(date)}</div>
        <div className="text-muted text-capitalize">{description}</div>
      </Col>
    </Row>
  );
};

export default WeatherNow;
