import React from 'react';
import DeleteButton from './DeleteButton';

const DeleteListItem = (props) => {
  
  const { id, name, location, description } = props

  return (
    <>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{description}</td>
      <td><DeleteButton /></td>
    </>
  );
}
 
export default DeleteListItem;