import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import HappyIcon from '../components/icons/happy';
import Modal from '../components/modal';
import person004 from '../assets/images/person-004.jpg';
import person005 from '../assets/images/person-005.jpg';
import person006 from '../assets/images/person-006.jpg';
import person007 from '../assets/images/person-007.jpg';
import person008 from '../assets/images/person-008.jpg';
import person009 from '../assets/images/person-009.jpg';
import person010 from '../assets/images/person-010.jpg';
import SectionHeader from '../components/section-header';

const initialState = [
  {
    id: 1,
    name: 'Frank Ltarnam',
    position: 'CEO',
    img: person004,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: 'Bob Shefley',
    position: 'UI/UX Designer',
    img: person005,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: 'Jason Stewars',
    position: 'Full-Stack Developer',
    img: person006,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    name: 'Sabrina Rachel',
    position: 'Marketing',
    img: person007,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: 'Marissa Lawren',
    position: 'Customer Support',
    img: person008,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,
    name: 'Romane Regad',
    position: 'Jr UI/UX Designer',
    img: person009,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,
    name: 'Tania Ferreira',
    position: 'Business Analyst',
    img: person010,
    desc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default () => {
  // Status of action for dynamic modal [view, add, edit]
  const [status, setStatus] = useState(null);

  const [show, setShow] = useState(false);
  const [people] = useState(initialState);
  const [person, setPerson] = useState({});

  // Function to handle view person in modal
  const viewPerson = person => {
    setPerson(person);

    // Set status to 'view'
    setStatus('view');

    // Call the modal
    setShow(true);
  };

  // Function to handle add person in modal
  const addPerson = () => {
    // Set status to 'add'
    setStatus('add');

    // Reset current person
    setPerson(null);

    // Call the modal
    setShow(true);
  };

  return (
    <>
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
                  <Button className="add-button" onClick={() => addPerson()}>
                    Add
                  </Button>
                </>
              }
            />
          </Col>
        </Row>
        <Row className="our-people-grid">
          {people.map(person => (
            <Col
              className="item"
              xs={12}
              sm={5}
              md={3}
              lg={2}
              xl={2}
              key={person.id}
              as="button"
              onClick={() => viewPerson(person)}
            >
              <Card>
                <Card.Img variant="top" src={person.img} />
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Subtitle>{person.position}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        show={show}
        handleCLose={() => setShow(false)}
        status={status}
        person={person}
      />
    </>
  );
};
