import React from 'react';
import { Provider } from 'react-redux';
import './App.css';


const App = () => (
  <Provider store={store}>
    <h1>Hello team!</h1>
  </Provider>
);

export default App;
