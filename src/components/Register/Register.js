import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="text-center w-25 mx-auto mt-3">
        <h3 className="mb-3">Please Register</h3>
        <form onSubmit="">
          <input type="email" placeholder="Email " className="form-control" />
          <br />
          <input
            type="password"
            placeholder="Password "
            className="form-control mb-2"
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password "
            className="form-control mb-2"
          />

          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <button className="border-0 py-1 px-4 mb-3 mt-2">
            Google Sign in
          </button>

          <input
            type="submit"
            value="Submit"
            className="form-control btn btn-primary mb-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
