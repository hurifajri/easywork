import * as contents from '../contents/intro';
import { Col, Container, Image, Row } from 'react-bootstrap';
import intro001 from '../assets/images/intro-001.png';
import intro002 from '../assets/images/intro-002.png';
import React from 'react';

export default () => (
  <Container className="section">
    <Row className="intro">
      <Col xs={12} md={6} lg={7} className="image">
        <Image src={intro001} alt={contents.FEATURE_1} />
      </Col>
      <Col xs={12} md={6} lg={5} className="text">
        <h2 className="title">{contents.FEATURE_1_TITLE}</h2>
        <p className="description">{contents.FEATURE_1_DESC}</p>
      </Col>
    </Row>
    <Row className="intro">
      <Col xs={12} md={{ span: 6, order: 2 }} lg={7} className="image">
        <Image src={intro002} alt={contents.FEATURE_2} />
      </Col>
      <Col xs={12} md={{ span: 6, order: 1 }} lg={5} className="text">
        <h2 className="title">{contents.FEATURE_2_TITLE}</h2>
        <p className="description">{contents.FEATURE_2_DESC}</p>
      </Col>
    </Row>
  </Container>
);
