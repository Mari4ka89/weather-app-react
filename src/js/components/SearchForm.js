import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SearchForm = ({ handleSearch, location, unit }) => {
  const [city, setCity] = useState(location);

  const handleLocationChange = (event) => setCity(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(city);
  };

  useEffect(() => handleSearch(city), [unit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs={9}>
          <Form.Control
            placeholder="Location"
            autoFocus
            onChange={handleLocationChange}
          />
        </Col>
        <Col xs={3}>
          <Button type="submit" variant="primary" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
