/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logUser } from '../redux/users/users';

const Login = () => {
  const dispatch = useDispatch();
  const [fieldsInput, setFieldInput] = useState({ username: '' });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setFieldInput({ ...fieldsInput, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fieldsInput.username.trim()) {
      dispatch(logUser(fieldsInput.username));
      setFieldInput({ username: '' });
    } else {
      setError('Empty fields are not allowed');
    }
  };

  return (
    <div className="auth-form">
      <div className="row justify-content-center">
        <h1 className="mt-3 text-center font">Login Page</h1>
        <div className="col-9">
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3">
              <label htmlFor="username" name="username" className="form-label">Username</label>
              <input type="text" name="username" onChange={handleChange} value={fieldsInput.username} placeholder="Enter username" required className="form-control rounded-pill" id="username" aria-describedby="username" />
              {error.length > 2 ? <div id="errorHelp" className="form-text text-danger">{error}</div> : '' }
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
            <br />
            <br />
            <p>
              Not registered? &nbsp;
              <Link to="/sign-up">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
