import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Login from './components/Login';
import Details from './components/details/Details';
import Home from './components/Home';
import Reservations from './components/Reservations';
// import ItemForm from './components/ItemForm';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/:username/reservations',
    name: 'Reservations',
    component: <Reservations />,
  },
  {
    path: '/items/:id',
    name: 'Items',
    component: <Details />,
  },
  {
    path: '/:username/reservation',
    name: 'Reserve',
    component: <Reserve />,
  },
  {
    path: '/:username/reservation/item/:id',
    name: 'Reserve',
    component: <Reserve details />,
  },
  {
    path: '/deleteList',
    name: 'DeleteListItems',
    component: <DeleteListItems />,
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
  const username = 'Lameck';
  return (
    <Router>
      <nav>
        <ul className="nav-links">
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            to={`/${username}/reservations`}
            key={username}
          >
            Reservations
          </NavLink>
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
};
export default App;
