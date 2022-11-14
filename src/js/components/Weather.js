import React from "react";
import SearchForm from "./SearchForm";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";

import "../../css/Weather.css";

const Weather = () => (
  <div className="Weather">
    <SearchForm />
    <WeatherNow />
    <Forecast />
  </div>
);

export default Weather;
