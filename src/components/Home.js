import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllItems } from '../redux/items/items';
import '../css/Home.css';
import Carr from './Carr';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <div className="w-100 container mt-5 pt-5 mt-lg-2">
      <h1>OFFICES</h1>
      <Carr />
    </div>
  );
};

export default Home;
