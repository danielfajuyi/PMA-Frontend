import React from "react";
import { Link } from "react-router-dom";
import "./HomeSignup.scss";
import AgencySignUpForm from "../../../LoginSignup/Sign-Up/Agency-Form/Agency-Sign-up-Form";
import ClientSignUpForm from "../../../LoginSignup/Sign-Up/Client-Form/Client-Sign-up-Form";
import ModelSignUpForm from "../../../LoginSignup/Sign-Up/Model-Form/Models-Sign-up-Form";
import { useContext } from "react";
import SignUpContext from "../../../../Context/Sign-up-context";

const HomeSignup = () => {
  const { setToggleSignup, setActiveSignup, AlertModal } = useContext(SignUpContext);

  const handleSignup = (active) => {
    setActiveSignup(active);
    setToggleSignup(true);
    console.log(active);
  };
  return (
    <>
      {AlertModal()}
      <div className=" SignUpCard">
        <div className="SignUpBox">
          <div className="SignUpContent text-center">
            <h2>01</h2>
            <h3 id="modelhover">Models</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, provident. Deleniti
              distinctio optio cupiditate molestiae numquam, temporibus excepturi dolor vitae!
            </p>
            <Link onClick={() => handleSignup("model")} className="btn_shadow">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, provident. Deleniti
              distinctio optio cupiditate molestiae numquam, temporibus excepturi dolor vitae!
            </p>
            <Link onClick={() => handleSignup("client")} className="btn_shadow">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, provident. Deleniti
              distinctio optio cupiditate molestiae numquam, temporibus excepturi dolor vitae!
            </p>
            <Link onClick={() => handleSignup("agency")} className="btn_shadow">
              Signup Now
            </Link>
          </div>
        </div>
      </div>
      <AgencySignUpForm />
      <ClientSignUpForm />
      <ModelSignUpForm />
    </>
  );
};

export default HomeSignup;
