import React from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../redux/users/usersAPI';

const Logout = () => {
  if (logout()) {
    return (
      <Navigate to="/login" />
    );
  }

  return <p>Unable to logout</p>;
};

export default Logout;
