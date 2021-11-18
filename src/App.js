import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeleteListItems from './components/DeleteListItems';
import Item from './components/Item';
import Login from './components/Login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Item />} />
        <Route path="/deleteList" element={<DeleteListItems />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
  )}
export default App;
