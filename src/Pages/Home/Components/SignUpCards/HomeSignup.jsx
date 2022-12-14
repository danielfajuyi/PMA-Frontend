import React from "react";
import { Link } from "react-router-dom";
import "./HomeSignup.scss";

const HomeSignup = () => {
  return (
    <>
      <div className=" SignUpCard">
        <div className="SignUpBox">
          <div className="SignUpContent text-center">
            <h2>01</h2>
            <h3 id="modelhover">Models</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              provident. Deleniti distinctio optio cupiditate molestiae numquam,
              temporibus excepturi dolor vitae!
            </p>
            <Link to="/" className="btn_shadow">
              Signup Now
            </Link>
          </div>
        </div>
      </div>

      <div className=" SignUpCard">
        <div className="SignUpBox">
          <div className="SignUpContent">
            <h2>02</h2>
            <h3 id="clienthover">Client</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              provident. Deleniti distinctio optio cupiditate molestiae numquam,
              temporibus excepturi dolor vitae!
            </p>
            <Link to="/" className="btn_shadow">
              Signup Now
            </Link>
          </div>
        </div>
      </div>

      <div className=" SignUpCard">
        <div className="SignUpBox">
          <div className="SignUpContent">
            <h2>03</h2>
            <h3 id="agencyhover">Agency</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              provident. Deleniti distinctio optio cupiditate molestiae numquam,
              temporibus excepturi dolor vitae!
            </p>
            <Link to="/" className="btn_shadow">
              Signup Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSignup;
