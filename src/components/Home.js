import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllItems } from '../redux/items/items';
import '../css/Home.css';
import Carr from './Carr';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (!items.length) {
      dispatch(getAllItems());
    }
  }, []);

  return (
    <div className="w-100 container mt-5 pt-5 mt-lg-2">
      <h1>OFFICES</h1>
      <Carr />
    </div>
  );
};

export default Home;
