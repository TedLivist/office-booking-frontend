import React from 'react';
import { Card, Modal } from 'react-bootstrap';
import '../css/item.css';

const Error = ({show, handleClose}) => (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton />
    <Modal.Body>
    <Card className="item-card border-0 my-auto w-100">
        <div className="d-flex justify-content-between">
          <Card.Title className="item-name">Error</Card.Title>
        </div>
        <Card.Body>
          <Card.Text className="item-description text-dark">
            Please select an office and enter valid date
          </Card.Text>
        </Card.Body>
      </Card>
    </Modal.Body>
  </Modal>
);

export default Error;
