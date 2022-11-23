import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo = ({ id, className }) => {
  return (
    <Link to="/" as="logo" className={`${className}`}>
      <div className={`logo-2 `} id={id}>
        <span>Premium</span>
        <span>Models</span>
      </div>
    </Link>
  );
};

export default Logo;
