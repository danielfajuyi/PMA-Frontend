import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo = ({ id }) => {
  return (
    <Link to="/">
      <div className="logo " id={id}>
        <span>Premium</span>
        <span>Models</span>
      </div>
    </Link>
  );
};

export default Logo;
