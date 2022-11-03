import React from "react";
import "./main.css";
import SignupImg1 from "../../Images/model/model1.jpg";
import SignupImg2 from "../../Images/model/model2.jpg";
import SignupImg3 from "../../Images/model/model3.jpg";
import Checkmark from "../../Assets/main-assets/hero-checkmark.png";
import FeaturedModel from "../FeaturedModel/featured-model";
import SectionHead from "../SectionHead/sectionhead";
import Client from "../Client-Testimonials/client";
import Jobpost from "../JobPost/jobpost";
import Counter from "../Counter/counter";
import Partner from "../Partners/partner";
import News from "../News/news";
import Footer from "../Footer/footer";
// import { SignupImg } from "../../Data/signup-img";

const Main = () => {
  return (
    <>
      <div className="container signup-container">
        <SectionHead title="Sign up on premium Model App and Explore" />

        <div className="signup-wrapper">
          <div className="sign-img">
            <img src={SignupImg1}></img>
            <span> I am a Model</span>
          </div>

          <div className="sign-img">
            <img src={SignupImg2}></img>
            <span> I am a Client</span>
          </div>

          <div className="sign-img">
            <img src={SignupImg3}></img>
            <span> I am a Agency</span>
          </div>
        </div>
        <button className="btn btn2">Signup</button>
      </div>

      <article className="join-model-container">
        <SectionHead title="Join Model Community Today" />
        <div className="model-img">
          <div className="overlap-group container">
            <div className="model-text">
              Become part of a growing community and connect with other models
              around the world
            </div>
            <div className="model-icon">
              <div className="model-item">
                <img src={Checkmark} alt="" />
                <span>Connect</span>
              </div>

              <div className="model-item">
                <img src={Checkmark} alt="" />
                <span>Interact</span>
              </div>

              <div className="model-item">
                <img src={Checkmark} alt="" />
                <span>Engage</span>
              </div>
            </div>
            <div className="model-btn btn btn2">Join community</div>
          </div>
        </div>
      </article>

      <FeaturedModel />
      <Client />
      <Jobpost />
      <Counter />
      <Partner />
      <News />
      <Footer />
    </>
  );
};

export default Main;
