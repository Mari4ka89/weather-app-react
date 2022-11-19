import React from "react";
import Row from "react-bootstrap/Row";
import DailyForecast from "./DailyForecast";

const Forecast = () => (
  <div className="text-align-center">
    <Row>
      <DailyForecast />
    </Row>
  </div>
);

export default Forecast;
