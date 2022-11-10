import React from "react";
import Container from "react-bootstrap/Container";
import SearchForm from "./SearchForm";
import WeatherNow from "./WeatherNow";
import SourceLinks from "./SourceLinks";

import "../css/App.css";

const App = () => (
  <Container>
    <div className="content">
      <SearchForm />
      <WeatherNow />
    </div>
    <SourceLinks />
  </Container>
);

export default App;
