import { Col, Container, Image, Row } from 'react-bootstrap';
import intro001 from '../assets/images/intro-001.png';
import intro002 from '../assets/images/intro-002.png';
import React from 'react';

export default () => (
  <Container className="section">
    <Row className="intro">
      <Col xs={12} md={6} lg={7} className="image">
        <Image src={intro001} alt="First intro" />
      </Col>
      <Col xs={12} md={6} lg={5} className="text">
        <h2 className="title">
          We can give you our best user experience to your system
        </h2>
        <p className="description">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Col>
    </Row>
    <Row className="intro">
      <Col xs={12} md={{ span: 6, order: 2 }} lg={7} className="image">
        <Image src={intro002} alt="Second intro" />
      </Col>
      <Col xs={12} md={{ span: 6, order: 1 }} lg={5} className="text">
        <h2 className="title">Easy access. Whenever, wherever you want</h2>
        <p className="description">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Col>
    </Row>
  </Container>
);
