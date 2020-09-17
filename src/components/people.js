import * as ACT from '../actions';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckedIcon from '../components/icons/checked';
import EditIcon from '../components/icons/edit';
import HappyIcon from './icons/happy';
import Modal from './modal';
import SectionHeader from '../components/section-header';
import TrashIcon from '../components/icons/trash';

export default () => {
  const { modal, people } = useSelector(state => state);
  const dispatch = useDispatch();

  const [currentPerson, setCurrentPerson] = useState('');
  const [actions, setActions] = useState({ isView: false, isEdit: false });

  // Send the detail of person to a modal
  const showViewModal = person => {
    // Set current action to view
    setActions({ isView: true, isEdit: false });

    // Get the selected person by user
    setCurrentPerson(person);

    // Call the modal
    dispatch(ACT.showModal());
  };

  const [checkedDelete, setCheckedDelete] = useState(false);
  const checkDeletePerson = (event, person) => {
    const { checked, parentElement, nextSibling } = event.target;

    nextSibling.style.display = checked ? 'block' : 'none';
    nextSibling.style.fill = checked ? 'var(--white)' : 'var(--blue-smp)';
    parentElement.style.background = checked
      ? 'var(--blue)'
      : 'var(--light-cyan)';
    parentElement.style.display = 'flex';

    setCheckedDelete(checked);
    setCurrentPerson(person);
  };

  const checkEditPerson = (event, person) => {
    const { checked, parentElement, nextSibling } = event.target;

    nextSibling.style.fill = checked ? 'var(--white)' : 'var(--blue-smp)';
    parentElement.style.background = checked
      ? 'var(--blue)'
      : 'var(--light-cyan)';
    parentElement.style.display = 'flex';

    setCurrentPerson(checked ? person : '');
  };

  const showEditModal = () => {
    // Set current action to edit
    setActions({ isView: false, isEdit: true });

    // Call the modal
    dispatch(ACT.showModal());
  };

  // Open a new modal to fill out for adding new person
  const showAddModal = () => {
    // Set current action is not view nor edit
    setActions({ isView: false, isEdit: false });

    // Call the modal. of course.
    dispatch(ACT.showModal());
  };

  const deletePerson = () => {
    dispatch(ACT.deletePerson(currentPerson.id));
    setCheckedDelete(false);
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
                checkedDelete ? (
                  <>
                    <Button
                      className="cancel-button"
                      onClick={() => setCheckedDelete(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      as="span"
                      className="delete-button"
                      onClick={() => deletePerson()}
                    >
                      <TrashIcon
                        size={13}
                        color="var(--light-red)"
                        className="trash-icon"
                      />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="edit-button"
                      disabled={!currentPerson && 'disabled'}
                      onClick={() => showEditModal()}
                    >
                      Edit
                    </Button>
                    <Button
                      className="add-button"
                      onClick={() => showAddModal()}
                    >
                      Add
                    </Button>
                  </>
                )
              }
            />
          </Col>
        </Row>
        <Row className="people-grid">
          {people.map(person => (
            <Col className="item" xs={12} sm={5} md={3} lg={2} key={person.id}>
              <div className="actions-wrapper">
                <div className="delete-icon-wrapper">
                  <input
                    type="checkbox"
                    onChange={event => checkDeletePerson(event, person)}
                  />
                  <CheckedIcon size={8} />
                </div>
                <div className="edit-icon-wrapper">
                  <input
                    type="checkbox"
                    onChange={event => checkEditPerson(event, person)}
                  />
                  <EditIcon size={8} />
                </div>
              </div>
              <Button
                onClick={() => showViewModal(person)}
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
