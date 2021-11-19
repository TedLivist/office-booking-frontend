import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialVimeo,
  TiSocialPinterest,
} from 'react-icons/ti';
import './Nav.css';

const Nav = ({ routes, username }) => (
  <nav>
    <div className="brand-logo">
      <span>Office Space</span>
    </div>

    <ul className="nav-links">
      {username ? (
        routes.map(({ name, path, isNavItem }) => (
          <li key={path} className="nav-link">
            {isNavItem && (
              <NavLink
                style={({ isActive }) => ({
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? '#fff' : '',
                })}
                to={path}
              >
                {name}
              </NavLink>
            )}
          </li>
        ))
      ) : (
        <NavLink
          style={({ isActive }) => ({
            display: 'block',
            margin: '1rem 0',
            color: isActive ? '#fff' : '',
          })}
          to="/sign-up"
        >
          Signup
        </NavLink>
      )}
    </ul>
    <div>
      <div className="social">
        <TiSocialTwitter />
        <TiSocialFacebook />
        <TiSocialGooglePlus />
        <TiSocialVimeo />
        <TiSocialPinterest />
      </div>
      <small>
        &copy;
        {new Date().getFullYear()}
        {' '}
        Office Space, Inc.
      </small>
    </div>
  </nav>
);

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  username: PropTypes.string.isRequired,
};

export default Nav;
