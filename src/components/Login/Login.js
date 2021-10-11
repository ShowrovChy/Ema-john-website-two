import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { singInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";
  const handleGoogleSignIn = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="form-container">
      <div>
        <form className="this-form">
          <h2 className="form-heading"> Log in</h2>
          <input
            className="full-width"
            type="email"
            placeholder="your email "
            name=""
            id="2"
          />
          <br />
          <input
            className="full-width"
            type="password"
            placeholder="your password"
            name=""
            id="3"
          />
          <br />
          <input className="sub" type="submit" value="Submit" />
        </form>
        <p>
          <small>
            new user ?{" "}
            <Link to="/register">
              <b>Create Account</b>
            </Link>
          </small>
        </p>
        <p>-----------------or-------------------</p>
        <button onClick={handleGoogleSignIn} className="button-style">
          Google sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
