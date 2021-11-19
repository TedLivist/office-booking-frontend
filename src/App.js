import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllItems } from './redux/items/items';
import { getUsername } from './redux/users/users';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/details/Details';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Carr from './components/Carr';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/Carr',
    name: 'Carr',
    component: <Carr />,
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
  {
    path: '/sign-up',
    name: 'Signup',
    component: <Signup />,
  },
];

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems());
    dispatch(getUsername());
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
            to="/Carr"
          >
            Carr
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
