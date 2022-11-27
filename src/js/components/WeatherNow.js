import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate } from "../utils/formatUtils";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "../../css/WeatherNow.css";

const WeatherNow = ({
  data: { city, date, temperature, icon, wind, humidity, description },
  unit,
  handleSetUnit,
}) => {
  return (
    <Row className="WeatherNow">
      <Col xs={7} md={5}>
        <div className="d-flex align-items-center">
          <WeatherIcon code={icon} size={52} />
          <WeatherTemperature
            temperature={temperature}
            unit={unit}
            handleSetUnit={handleSetUnit}
          />
        </div>
      </Col>
      <Col xs={5} md={3} className="text-muted">
        <div>Humidity: {humidity}%</div>
        <div>Wind: {Math.round(wind)}km/h</div>
      </Col>
      <Col xs={12} md={4}>
        <h1>{city}</h1>
        <div className="text-muted">{formatDate(date)}</div>
        <div className="text-muted text-capitalize">{description}</div>
      </Col>
    </Row>
  );
};

export default WeatherNow;
