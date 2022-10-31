import React from "react";
import "./main.css";
import SignupImg1 from "../../Images/model/model1.jpg";
import SignupImg2 from "../../Images/model/model2.jpg";
import SignupImg3 from "../../Images/model/model3.jpg";
// import { SignupImg } from "../../Data/signup-img";

const Main = () => {
  return (
    <>
      <div className="container signup-container">
        <h2 className="signup-heading">
          Sign up on premium Model App and Explore
        </h2>

        <div className="signup-wrapper">
          <div className="sign-img1">
            <img src={SignupImg1} className="model"></img>
            <span> I am a Model</span>
          </div>

          <div className="sign-img2">
            <img src={SignupImg2} className="client"></img>
            <span> I am a Client</span>
          </div>

          <div className="sign-img3">
            <img src={SignupImg3} className="agency"></img>
            <span> I am a Agency</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
