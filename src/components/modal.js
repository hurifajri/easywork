import * as actions from '../actions';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '../components/icons/cancel';

const initialPerson = {
  id: '',
  name: '',
  position: '',
  img: 'https://picsum.photos/200',
  description: '',
};

export default props => {
  const { modal, people, person, status } = useSelector(state => state);
  const dispatch = useDispatch();

  const isAdd = status === 'add';
  const isView = status === 'view';
  const isEdit = status === 'edit';

  // Change value based on current target name
  const [newPerson, setNewPerson] = useState(initialPerson);

  // Set value from user input
  const handleChange = event => {
    const { name, value } = event.target;

    // Set new person details to temp state
    setNewPerson({ ...newPerson, [name]: value });
  };

  // Submit new person
  const handleSubmit = event => {
    // Set new person
    dispatch(actions.addPerson({ ...newPerson, id: people.length + 1 }));

    // Reset initial state of person
    setNewPerson(initialPerson);

    // Hide modal
    dispatch(actions.hideModal());

    event.preventDefault();
  };

  return (
    <Modal
      show={modal}
      onHide={() => dispatch(actions.hideModal())}
      keyboard={false}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Body
        style={{
          flexDirection: isAdd ? 'column' : 'row',
          padding: isAdd ? '20px' : 0,
        }}
      >
        <Button
          as="span"
          className="modal-close-wrapper"
          onClick={() => dispatch(actions.hideModal())}
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
          <div>edit</div>
        ) : (
          <>
            <Modal.Title>Add People</Modal.Title>
            <Form onSubmit={handleSubmit}>
              {/* <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Select picture"
                />
                <CancelIcon color="var(--blue)" className="modal-close" />
              </Form.Group> */}
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
                  rows="5"
                  placeholder="Enter description"
                  name="description"
                  onChange={handleChange}
                  value={newPerson.description}
                />
              </Form.Group>
              <div className="button-wrapper">
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
