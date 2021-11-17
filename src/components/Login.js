import React, { useState } from 'react';

const Login = () => {
  const [fieldsInput, setFieldInput] = useState({username: '', password: ''})

  const handleChange = (e) => {
    setFieldInput({...fieldsInput, [e.target.name]: e.target.value})
  }

  return (
    <div className="row justify-content-center">
      <h1 className="mt-3 text-center">Tada!!</h1>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email address</label>
            <input type="text" name="username" onChange={handleChange} value={fieldsInput.username} required className="form-control" id="username" aria-describedby="username" />
            <div id="username" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" onChange={handleChange} value={fieldsInput.password} required className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;