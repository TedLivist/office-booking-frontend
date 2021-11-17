import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeleteListItems from './components/DeleteListItems';
import Item from './components/Item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Item />} />
        <Route path ="/deleteList" element={<DeleteListItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
