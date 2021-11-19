import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ isOpen }) => (
  <>
    <div className="humburger">
      <span />
      <span />
      <span />
    </div>

    <style jsx>
      {`
        .humburger {
          cursor: pointer;
          width: 48px;
          height: 48px;
          transform: rotate(0deg);
          transition: 0.7s ease-in-out;
        }

        .humburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 30px;
          background-color: #8a2c2c;
          border-radius: 3px;
          opacity: 1;
          transform: rotate(0deg);
          transition: 0.7s ease-in-out;
        }

        .humburger span:nth-child(1) {
          top: 13px;
          transform-origin: left center;
        }

        .humburger span:nth-child(2) {
          top: 23px;
          transform-origin: left center;
        }

        .humburger span:nth-child(3) {
          top: 34px;
          transform-origin: left center;
        }

        .humburger.is-active span {
          background-color: #8a2c2c;
        }

        .humburger span:nth-child(1) {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .humburger span:nth-child(2) {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .humburger span:nth-child(3) {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        @media screen and (min-width: 992px) {
          .humburger {
            display: none;
          }
        }
      `}
    </style>
  </>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
