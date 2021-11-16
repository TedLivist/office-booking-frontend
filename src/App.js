import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Stores from './components/Stores';
import './App.css';

const App = () => (
  <Provider store={store}>
    <h1>Hello team!</h1>
    <Stores />
  </Provider>
);

export default App;
