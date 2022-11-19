import React from "react";
import Container from "react-bootstrap/Container";
import Weather from "./Weather";
import SourceLinks from "./SourceLinks";

import "../../css/App.css";

const App = () => (
  <div className="App">
    <Container>
      <Weather defaultCity="Dnipro" />
      <SourceLinks />
    </Container>
  </div>
);

export default App;
