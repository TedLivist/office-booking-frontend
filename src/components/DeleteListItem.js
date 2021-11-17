import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const DeleteListItem = (props) => {
  const {
    id,
    name,
    location,
    description,
  } = props;

  return (
    <>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{description}</td>
      <td><DeleteButton /></td>
    </>
  );
};

DeleteListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DeleteListItem;
