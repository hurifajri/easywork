import { Image, Modal } from 'react-bootstrap';
import React from 'react';

export default props => {
  const { person, status } = props;
  console.log(props);
  return (
    <Modal
      show={props.show}
      onHide={props.handleCLose}
      // backdrop="static"
      keyboard={false}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Body>
        {person && status === 'view' ? (
          <>
            <Image src={person.img} alt={person.name} />
            <div className="person">
              <Modal.Title>{person.name}</Modal.Title>
              <p className="position">{person.position}</p>
              <p className="desc">{person.desc}</p>
            </div>
          </>
        ) : person && status === 'edit' ? (
          <div>edit</div>
        ) : (
          <div>add</div>
        )}
      </Modal.Body>
    </Modal>
  );
};
