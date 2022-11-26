import React from "react";
import Line from "../Line/line";
import HeroCheckMark from "../../Assets/main-assets/header-icon.png";
import HeroImg from "../../Images/hero/hero-img.png";
import HeroImg2 from "../../Images/hero/hero-img2.png";
import HeroImg3 from "../../Images/hero/hero-img3.png";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <Line />
      <div className="hero-container">
        <section className="hero-section container">
          <div className="hero-img-container">
            <img src={HeroImg} className="hero-img " alt="hero-img"></img>
            <img src={HeroImg2} className="hero-img" alt="hero-img"></img>
            <img src={HeroImg3} className="hero-img" alt="hero-img"></img>
            <img src={HeroImg2} className="hero-img " alt="hero-img"></img>
          </div>

          <div className="hero-text">
            <article>
              <div className="heading">
                <span>Looking For Models?</span>
              </div>

              <div className="paragraph">
                <span className="paragraph-head">
                  Find The right Model Now!
                </span>

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
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
