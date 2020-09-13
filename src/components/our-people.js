import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import HappyIcon from '../components/icons/happy';
import person004 from '../assets/images/person-004.jpg';
import person005 from '../assets/images/person-005.jpg';
import person006 from '../assets/images/person-006.jpg';
import person007 from '../assets/images/person-007.jpg';
import person008 from '../assets/images/person-008.jpg';
import person009 from '../assets/images/person-009.jpg';
import person010 from '../assets/images/person-010.jpg';
import React from 'react';
import SectionHeader from '../components/section-header';

export default () => {
  const people = [
    {
      id: 1,
      name: 'Frank Ltarnam',
      role: 'CEO',
      img: person004,
    },
    {
      id: 2,
      name: 'Bob Shefley',
      role: 'UI/UX Designer',
      img: person005,
    },
    {
      id: 3,
      name: 'Jason Stewars',
      role: 'Full-Stack Developer',
      img: person006,
    },
    {
      id: 4,
      name: 'Sabrina Rachel',
      role: 'Marketing',
      img: person007,
    },
    {
      id: 5,
      name: 'Marissa Lawren',
      role: 'Customer Support',
      img: person008,
    },
    {
      id: 6,
      name: 'Romane Regad',
      role: 'Jr UI/UX Designer',
      img: person009,
    },
    {
      id: 7,
      name: 'Tania Ferreira',
      role: 'Business Analyst',
      img: person010,
    },
  ];
  return (
    <Container className="section">
      <Row className="our-people">
        <Col>
          <SectionHeader
            title="Our important people is listed here"
            rightClassName="right-wrapper"
            iconWrapperClassName="icon-wrapper"
            icon={
              <HappyIcon
                size={13}
                color="var(--white)"
                className="happy-icon"
              />
            }
            button={
              <>
                <Button className="edit-button">Edit</Button>
                <Button className="add-button">Add</Button>
              </>
            }
          />
        </Col>
      </Row>
      <Row className="our-people-grid">
        {people.map(({ id, name, role, img }) => (
          <Col className="item" xs={12} sm={5} md={3} lg={2} xl={2} key={id}>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{role}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
