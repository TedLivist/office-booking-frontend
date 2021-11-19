import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Login from './components/Login';
import Details from './components/details/Details';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Nav from './components/navigation/Nav';
import ItemForm from './components/ItemForm';
import NavMobile from './components/navigation/NavMobile';

const routes = [
  {
    path: '/',
    name: 'OFFICES',
    component: <Home />,
    isNavItem: true,
  },
  {
    path: '/:username/reservations',
    name: 'MY RESERVATIONS',
    component: <Reservations />,
    isNavItem: true,
  },
  {
    path: '/items/:id',
    name: 'Items',
    component: <Details />,
  },
  {
    path: '/:username/reservation',
    name: 'RESERVE OFFICE',
    component: <Reserve />,
    isNavItem: true,
  },
  {
    path: '/:username/reservation/item/:id',
    name: 'Reserve',
    component: <Reserve details />,
  },
  {
    path: '/add_office',
    name: 'ADD OFFICE',
    component: <ItemForm />,
    isNavItem: true,
  },
  {
    path: '/deleteList',
    name: 'REMOVE OFFICE',
    component: <DeleteListItems />,
    isNavItem: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: <Login />,
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <Router>
      <NavMobile routes={routes} />
      <Nav routes={routes} />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
