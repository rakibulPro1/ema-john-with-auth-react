import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div>
      <div className="text-center w-25 mx-auto mt-3">
        <h3 className="mb-3">Please Login</h3>
        <div>
          <input type="email" placeholder="Email " className="form-control" />
          <br />
          <input
            type="password"
            placeholder="Password "
            className="form-control mb-2"
          />

          <p>
            New to ema-john? <Link to="/register">Creat an account</Link>
          </p>
          <div>---------or---------</div>
          <button
            onClick={signInUsingGoogle}
            className="border-0 py-1 px-4 mb-3 mt-2"
          >
            Google Sign in
          </button>

          <input
            type="submit"
            value="Submit"
            className="form-control btn btn-primary mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
