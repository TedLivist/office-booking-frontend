import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Item from './components/Item';
import Login from './components/Login';
import ItemForm from './components/ItemForm';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Item />} />
        <Route path="/deleteList" element={<DeleteListItems />} />
        <Route path="/:username/reservation" element={<Reserve />} />
        <Route path="/:username/reservation/item/:id" element={<Reserve details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addItem" element={<ItemForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
