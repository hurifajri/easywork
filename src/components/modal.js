import * as ACT from '../actions';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '../components/icons/cancel';

const initialPerson = {
  id: 0,
  name: '',
  position: '',
  img: 'https://picsum.photos/158/172', // Handle file input without backend service
  description: '',
};

export default ({ person, actions: { isView, isEdit } }) => {
  const { modal, people } = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(people);
  console.log(`person: ${person}`);
  console.log(`is view: ${isView}`);
  console.log(`is edit: ${isEdit}`);

  // Change value dynamically based on current target name
  const [newPerson, setNewPerson] = useState(initialPerson);

  // Set value from user input
  const handleChange = event => {
    const { name, value } = event.target;

    // Set new person details to temp state
    setNewPerson({ ...newPerson, [name]: value });
  };

  // Submitting new person
  const handleSubmit = event => {
    dispatch(ACT.addPerson({ ...newPerson, id: people.length + 1 }));

    // Reset initial state of person
    setNewPerson(initialPerson);

    // Hide modal
    dispatch(ACT.hideModal());

    event.preventDefault();
  };

  return (
    <Modal
      show={modal}
      onHide={() => dispatch(ACT.hideModal())}
      keyboard={false}
      centered
      dialogClassName={isView ? 'modal-view' : 'modal-add-edit'}
    >
      <Modal.Body>
        <Button
          as="span"
          className="modal-close-wrapper"
          onClick={() => dispatch(ACT.hideModal())}
        >
          <CancelIcon color="var(--blue)" className="modal-close" />
        </Button>
        {person && isView ? (
          <>
            <Image src={person.img} alt={person.name} />
            <div className="person">
              <Modal.Title>{person.name}</Modal.Title>
              <p className="position">{person.position}</p>
              <p className="description">{person.description}</p>
            </div>
          </>
        ) : person && isEdit ? (
          <>
            <h2 className="title">Edit People</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                  value={person.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  onChange={handleChange}
                  value={person.position}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Enter description"
                  name="description"
                  onChange={handleChange}
                  value={person.description}
                />
              </Form.Group>
              <div className="button-wrapper">
                <Button
                  className="cancel-button"
                  type="button"
                  onClick={() => dispatch(ACT.hideModal())}
                >
                  Cancel
                </Button>
                <Button className="submit-button" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </>
        ) : (
          <>
            <h2 className="title">Add People</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                  value={newPerson.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  onChange={handleChange}
                  value={newPerson.position}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Enter description"
                  name="description"
                  onChange={handleChange}
                  value={newPerson.description}
                />
              </Form.Group>
              <div className="button-wrapper">
                <Button
                  className="cancel-button"
                  type="button"
                  onClick={() => dispatch(ACT.hideModal())}
                >
                  Cancel
                </Button>
                <Button className="submit-button" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};
