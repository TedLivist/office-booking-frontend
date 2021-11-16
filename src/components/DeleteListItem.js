import React from 'react';

const DeleteListItem = (props) => {
  
  const { id, name, location, description } = props

  return (
    <div>
      <span>{id}</span> - <span>{name}</span>
      <p></p>
      <span>{location}</span> - <span>{description}</span>
      <p></p>
      <hr />
    </div>
  );
}
 
export default DeleteListItem;