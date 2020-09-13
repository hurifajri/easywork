import { Col, Row } from 'react-bootstrap';
import ContactUs from '../components/contact-us';
import Intro from '../components/intro';
import OurPeople from '../components/our-people';
import Partners from '../components/partners';
import React from 'react';
import Testimonial from '../components/testimonial';

export default () => {
  return (
    <Row className="main">
      <Col>
        <Intro />
        <Testimonial />
        <OurPeople />
        <Partners />
        <ContactUs />
      </Col>
    </Row>
  );
};
