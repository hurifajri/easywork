import * as contents from '../contents/footer';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import React from 'react';

export default () => (
  <Row className="footer">
    <Col>
      <Container className="section">
        <Row>
          <Col xs={12} md={4} className="logo">
            <Image src={logo} alt={contents.TITLE} />
            <h2 className="title">{contents.TITLE}</h2>
          </Col>
          <Col xs={12} md={4} className="address">
            <h2>{contents.ADDRESS_TITLE}</h2>
            <p>{contents.ADDRESS}</p>
          </Col>
          <Col xs={12} md={4}>
            <h2>{contents.CONTACT_TITLE}</h2>
            <p>{contents.CONTACT}</p>
            <h2>{contents.FAX_TITLE}</h2>
            <p>{contents.FAX}</p>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
);
