import React from 'react';

const DeleteListItem = (props) => {
  
  const { id, name, location, description } = props

  return (
    <>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{description}</td>
      <td>Delete Action</td>
    </>
  );
}
 
export default DeleteListItem;