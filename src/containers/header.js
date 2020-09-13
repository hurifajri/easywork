import { Col, Row } from 'react-bootstrap';
import Jumbotron from '../components/jumbotron';
import Navbar from '../components/navbar';
import React from 'react';

export default () => {
  return (
    <Row className="header">
      <Col>
        <Navbar />
        <Jumbotron />
      </Col>
    </Row>
  );
};
