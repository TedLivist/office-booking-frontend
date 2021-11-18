import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/items/items';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = () => {
    dispatch(deleteItem(id));
    handleClose();
    console.log("Deleted")
  };

  return (
    <>
    <button type="button" onClick={handleShow} className="btn btn-sm btn-danger">Delete Item</button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Office</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this office from your list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
