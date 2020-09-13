import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import React from 'react';

export default () => (
  <Row className="footer">
    <Col>
      <Container className="section">
        <Row>
          <Col xs={12} md={4} className="logo">
            <Image src={logo} alt="EasyWork" />
            <h2 className="title">Easy Work</h2>
          </Col>
          <Col xs={12} md={4} className="address">
            <h2>Address</h2>
            <p>
              52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur,
              Wilayah Persekutuan Kuala Lumpur
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h2>Contact</h2>
            <p>03-7451 5283</p>
            <h2>Fax</h2>
            <p>03-7451 5283</p>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
);
