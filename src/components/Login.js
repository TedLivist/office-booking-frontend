import React, { useState } from 'react';

const Login = () => {
  const [fieldsInput, setFieldInput] = useState({username: '', password: ''})
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFieldInput({...fieldsInput, [e.target.name]: e.target.value.toLowerCase()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (fieldsInput.username.trim() && fieldsInput.password.trim()) {
      // const {username, password} = fieldsInput
      setFieldInput({username: '', password: ''})
    } else {
      setError('Empty fields are not allowed')
    }
  }

  return (
    <div className="row justify-content-center">
      <h1 className="mt-3 text-center">Login Page</h1>
      <div className="col-6">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" name="username" onChange={handleChange} value={fieldsInput.username} placeholder="Enter username" required className="form-control rounded-pill" id="username" aria-describedby="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" onChange={handleChange} value={fieldsInput.password} placeholder="Enter password" required className="form-control rounded-pill" id="password" />
            {error.length > 2 ? <div id="errorHelp" className="form-text text-danger">{error}</div> : '' }
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;