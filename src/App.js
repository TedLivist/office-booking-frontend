import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from './redux/users/users';
import Reserve from './components/Rerserve';
import DeleteListItems from './components/DeleteListItems';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/details/Details';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Logout from './components/Logout';
import Nav from './components/navigation/Nav';
import ItemForm from './components/ItemForm';
import NavMobile from './components/navigation/NavMobile';

const App = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.users.username);

  const routes = [
    {
      path: '/',
      name: 'OFFICES',
      component: <Home />,
      isNavItem: true,
    },
    {
      path: `/${username}/reservations`,
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
      path: `/:${username}/reservation`,
      name: 'RESERVE OFFICE',
      component: <Reserve />,
      isNavItem: true,
    },
    {
      path: `/:${username}/reservation/item/:id`,
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
    {
      path: '/logout',
      name: 'Logout',
      component: <Logout />,
      isNavItem: true,
    },
  ];

  useEffect(() => {
    dispatch(getUsername());
  }, [dispatch]);

  return (
    <Router>
      <NavMobile routes={routes} />
      <Nav routes={routes} />
      {username ? (
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} key={path} element={component} />
          ))}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
