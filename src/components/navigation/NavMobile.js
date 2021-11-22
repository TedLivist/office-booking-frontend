/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Hamburger from './Humburger';

const NavMobile = ({ routes }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <header>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <h1>Office Space</h1>
      </header>
      <div className="nav-mobile">
        <ul className="nav-links">
          {routes.map(({ name, path, isNavItem }) => (
            <li key={path} className="nav-link">
              {isNavItem && (
                <NavLink
                  style={({ isActive }) => ({
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? '#fff' : '',
                  })}
                  to={path}
                  onClick={toggleHamburger}
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .nav-mobile {
            transform: ${hamburgerOpen
          ? 'translateX(0%)'
          : 'translateX(-100%)'};
            width: 75%;
            height: 90vh;
            position: fixed;
            background: #eee;
            top: 10vh;
            left: 0;
            right: 0;
            will-change: transform;
            z-index: 2;
            transition: all 0.7s ease;
          }

          header {
            display: flex;
            align-items: center;
            width: 100%;
            background: #eee;
            height: 10vh;
            position: fixed;
            top: 0;
            left: 0;
            padding: 0 1rem;
            z-index: 2;
          }
          @media screen and (min-width: 992px) {
            header,
            .nav-mobile {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

NavMobile.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NavMobile;
