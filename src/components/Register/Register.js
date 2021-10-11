import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-container">
      <div>
        <form className="this-form">
          <h2 className="form-heading">Create Account </h2>
          <input
            className="full-width"
            type="email"
            placeholder="your email "
            name=""
            id="1"
          />
          <br />
          <input
            className="full-width"
            type="password"
            placeholder="your password"
            name=""
            id="2"
          />
          <br />
          <input
            className="full-width"
            type="password"
            placeholder=" re-enter your password"
            name=""
            id="3"
          />
          <br />
          <input className="sub" type="submit" value="Submit" />
        </form>
        <p>
          <small>
            Already have an account?{" "}
            <Link to="/login">
              <b>Log in</b>
            </Link>
          </small>
        </p>
        <p>-----------------or--------------------</p>
        <button className="button-style">Google sign in</button>
      </div>
    </div>
  );
};

export default Register;
