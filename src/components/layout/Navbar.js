import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-blue.png";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-left">
        <img src={Logo} alt="foundation-logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/form">Apply</Link>
      </div>
      <div />
      <h1>The GlucoBasal Foundation</h1>
    </div>
  );
};

export default Navbar;
