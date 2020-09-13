import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import mapMockup from '../assets/images/map-mockup.png';
import React from 'react';
import SectionTitle from '../components/section-title';

export default () => (
  <Container className="section">
    <Row className="contact-us">
      <Col>
        <SectionTitle>Contact Us</SectionTitle>
      </Col>
    </Row>
    <Row className="contact-us scale">
      <Col xs={12} md={6} className="form-wrapper">
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select">
              <option>Please select your subject</option>
              <option>Question</option>
              <option>Help</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Write your message here"
            />
          </Form.Group>
          <div className="button-wrapper">
            <Button className="submit-button" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
      <Col xs={12} md={6} className="map-wrapper">
        <Image src={mapMockup} alt="location" />
      </Col>
    </Row>
  </Container>
);
