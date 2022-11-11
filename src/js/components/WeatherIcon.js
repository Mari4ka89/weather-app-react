import React from "react";

const WeatherIcon = ({ name, alt, ...props }) => (
  <img
    {...props}
    src={`http://openweathermap.org/img/wn/${name}@2x.png`}
    alt={alt}
  />
);

export default WeatherIcon;
