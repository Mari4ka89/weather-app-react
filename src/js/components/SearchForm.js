import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SearchForm = () => (
  <Form>
    <Row className="align-items-center">
      <Col xs={8}>
        <Form.Control placeholder="Location" autoFocus />
      </Col>
      <Col xs={2}>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Col>
      <Col xs={2}>
        <Button variant="secondary">Here</Button>
      </Col>
    </Row>
  </Form>
);

export default SearchForm;
