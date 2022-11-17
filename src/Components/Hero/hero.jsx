import React from "react";
import Line from "../Line/line";
import HeroCheckMark from "../../Assets/main-assets/header-icon.png";
import HeroImg from "../../Images/hero/hero-img.png";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <Line />
      <div className="hero-container">
        <section className="hero-section container">
          <img src={HeroImg} className="hero-img" alt="hero-img"></img>
          <div className="hero-text">
            <div className="heading">
              <span>Looking For Models?</span>
            </div>

            <div className="paragraph">
              <span className="paragraph-head">Find The right Model Now!</span>

              <span>
                <img
                  src={HeroCheckMark}
                  alt="check-markicon"
                  className="circle-icon"
                />
                <p>Quick & Easy Model Search</p>
              </span>

              <span>
                <img
                  src={HeroCheckMark}
                  alt="check-markicon"
                  className="circle-icon"
                />
                <p>Efficient Messaging Services</p>
              </span>

              <span>
                <img
                  src={HeroCheckMark}
                  alt="check-markicon"
                  className="circle-icon"
                />
                <p>Fast Model responses</p>
              </span>
              <div className="hero-btn">
                <button className="btn btn2">Signup</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
