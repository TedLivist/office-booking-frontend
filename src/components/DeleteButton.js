import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/items/items';

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const onDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <button type="button" onClick={onDelete} className="btn btn-sm btn-danger">Delete Item</button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
