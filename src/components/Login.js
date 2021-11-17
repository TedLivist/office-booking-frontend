import React from 'react';

const Login = () => {
  return (
    <div className="row justify-content-center">
      <h1 className="mt-3 text-center">Tada!!</h1>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email address</label>
            <input type="text" className="form-control" id="username" aria-describedby="username" />
            <div id="username" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;