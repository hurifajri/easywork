import * as ACT from '../actions';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '../components/icons/edit';
import HappyIcon from './icons/happy';
import Modal from './modal';
import SectionHeader from '../components/section-header';

export default () => {
  const { modal, people } = useSelector(state => state);
  const dispatch = useDispatch();

  const [currentPerson, setCurrentPerson] = useState({});
  const [actions, setActions] = useState({ isView: false, isEdit: false });

  // Send the detail of person to a modal
  const viewPerson = person => {
    // Set current action to view
    setActions({ isView: true, isEdit: false });

    // Get the selected person by user
    setCurrentPerson(person);

    // Call the modal
    dispatch(ACT.showModal());
  };

  const editPerson = person => {
    // Set current action to edit
    setActions({ isView: false, isEdit: true });

    dispatch(ACT.editPerson(person));

    // Call the modal
    dispatch(ACT.showModal());
  };

  // Open a new modal to fill out for adding new person
  const addPerson = () => {
    // Set current action is not view nor edit
    setActions({ isView: false, isEdit: false });

    // Call the modal. of course.
    dispatch(ACT.showModal());
  };

  return (
    <>
      <Container className="section">
        <Row className="people">
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
                  <Button
                    className="edit-button"
                    disabled={!currentPerson && 'disabled'}
                    onClick={() => editPerson(currentPerson)}
                  >
                    Edit
                  </Button>
                  <Button className="add-button" onClick={() => addPerson()}>
                    Add
                  </Button>
                </>
              }
            />
          </Col>
        </Row>
        <Row className="people-grid">
          {people.map(person => (
            <Col className="item" xs={12} sm={5} md={3} lg={2} key={person.id}>
              <Button
                as="div"
                className="edit-icon-wrapper"
                onClick={() => setCurrentPerson(person)}
              >
                <EditIcon size={8} color="var(--blue-smp)" />
              </Button>
              <Button
                onClick={() => viewPerson(person)}
                className="card-wrapper"
              >
                <Card>
                  <Card.Img variant="top" src={person.img} />
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Subtitle>{person.position}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Button>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={modal} person={currentPerson} actions={actions} />
    </>
  );
};
