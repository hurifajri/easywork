import * as actions from '../actions';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import HappyIcon from './icons/happy';
import Modal from './modal';
import React from 'react';
import SectionHeader from '../components/section-header';

export default () => {
  const { modal, people, person } = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(people);
  console.log(person);

  // Get detail of person in a modal
  const getPerson = person => {
    // Get person data
    dispatch(actions.getPerson(person));

    // Set status of action to view
    dispatch(actions.isView());

    // Call modal
    dispatch(actions.showModal());
  };

  // Add a new person
  const addPerson = () => {
    // Set status of action to add
    dispatch(actions.isAdd());

    // Call modal
    dispatch(actions.showModal());
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
          {people?.map(person => (
            <Col
              className="item"
              xs={12}
              sm={5}
              md={3}
              lg={2}
              xl={2}
              key={person.id}
              as="button"
              onClick={() => getPerson(person)}
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

      <Modal show={modal} />
    </>
  );
};
