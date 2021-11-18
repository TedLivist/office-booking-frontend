/* eslint-disable */ 

import React, {useState} from 'react';

// import { useDispatch } from 'react-redux';
// import { deleteItem } from '../redux/items/items';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Prac = (props) => {
  // const dispatch = useDispatch();
  // const { id } = props;



  // const onDelete = () => {
  //   // dispatch(deleteItem(id));
  //   console.log("Deleted")
    
  // };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = () => {
      handleClose();
      console.log("Delete Successfully")

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};


export default Prac;
