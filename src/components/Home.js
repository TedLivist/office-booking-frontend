import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllItems } from '../redux/items/items';
import '../css/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (!items.length) {
      dispatch(getAllItems());
    }
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id}>
            <li key={item.id}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
