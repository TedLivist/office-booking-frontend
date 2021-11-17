import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/items/items';

const DeleteButton = (props) => {
  const dispatch = useDispatch()
  const { id } = props

  const onDelete = () => {
    dispatch(deleteItem(id))
  }
  
  return (
    <button type="button" onClick={onDelete} className="btn btn-sm btn-danger">Delete Item</button>
  )
}

export default DeleteButton;
