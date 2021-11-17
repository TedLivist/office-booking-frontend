import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import Reserve from './components/Rerserve';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <Reserve />
    </div>
  );
};

export default App;
