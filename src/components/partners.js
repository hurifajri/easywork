import { Col, Container, Image, Row } from 'react-bootstrap';
import partner1 from '../assets/images/apple.png';
import partner2 from '../assets/images/airbnb.png';
import partner3 from '../assets/images/google.png';
import partner4 from '../assets/images/nvidia.png';
import partner5 from '../assets/images/tesla.png';
import partner6 from '../assets/images/samsung.png';
import partner7 from '../assets/images/facebook.png';
import partner8 from '../assets/images/microsoft.png';
import React from 'react';
import SectionTitle from '../components/section-title';

export default () => {
  const partners = [
    { id: 1, img: partner1 },
    { id: 2, img: partner2 },
    { id: 3, img: partner3 },
    { id: 4, img: partner4 },
    { id: 5, img: partner5 },
    { id: 6, img: partner6 },
    { id: 7, img: partner7 },
    { id: 8, img: partner8 },
  ];
  return (
    <Container className="section">
      <Row className="partners">
        <Col>
          <SectionTitle>We've worked with</SectionTitle>
        </Col>
      </Row>
      <Row className="partners-list">
        <Col>
          {partners.map(partner => (
            <Image src={partner.img} key={partner.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
