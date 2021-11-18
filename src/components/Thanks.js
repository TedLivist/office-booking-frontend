import React from 'react';
import PropTypes from 'prop-types';
import { Card, Modal } from 'react-bootstrap';
import '../css/item.css';

const Thanks = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton />
    <Modal.Body>
      <Card className="item-card border-0 my-auto w-100">
        <div className="d-flex justify-content-between">
          <Card.Title className="item-name">Thank you</Card.Title>
        </div>
        <Card.Body>
          <Card.Text className="item-description text-dark">
            Reservation saved
          </Card.Text>
        </Card.Body>
      </Card>
    </Modal.Body>
  </Modal>
);

Thanks.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default Thanks;
