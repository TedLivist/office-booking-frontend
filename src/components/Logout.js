import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logOut } from '../redux/users/users';
import { logout } from '../redux/users/usersAPI';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logOut());
  }, [dispatch]);

  if (logout()) {
    return (
      <Navigate to="/" />
    );
  }

  return <p>Unable to logout</p>;
};

export default Logout;
