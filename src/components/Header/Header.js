import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-container">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.email && (
          <span style={{ color: "white" }}>Hello {user.displayName}</span>
        )}
        {user.email ? (
          <button className="logOut-btn" onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
