import { Col, Row } from 'react-bootstrap';
import Contact from '../components/contact';
import Intro from '../components/intro';
import Partners from '../components/partners';
import People from '../components/people';
import React from 'react';
import Testimonial from '../components/testimonial';

export default () => (
  <Row className="main">
    <Col>
      <Intro />
      <Testimonial />
      <People />
      <Partners />
      <Contact />
    </Col>
  </Row>
);
