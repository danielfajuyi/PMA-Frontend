import React from "react";

import "../About/about.css";
import "./HowItWorks.css";
import Line from "../../Components/Line/line";

const HowItWorks = () => {
  return (
    <>
      <Line />
      <div className="  HIWheader-container">
        <div className="HIWsection header-section container">
          <h2>How It Works</h2>

          <span> For Models Client and Agencies</span>
          <span>
            Premium model App is a digital portfolio hub for models and a
            booking platform, <br></br>which helps clients around the world to
            source for models for their projects.
          </span>
        </div>
      </div>

      <div className=" howitworks-card ">
        <div className="container">
          <div className="howitworks-card-heading">
            <h2>We connect you with models near you or internationally</h2>
            <span>3 of your benefits</span>
          </div>

          <div className="howitworks-carditems container">
            <div>
              <h2>01</h2>
              <h3>Get Exciting Jobs</h3>
              <p>
                Have you ever wanted to shown in catelogs, magazines or
                connecials as a model?
              </p>
            </div>

            <div>
              <h2>02</h2>
              <h3>Get Exciting Jobs</h3>
              <p>
                Have you ever wanted to shown in catelogs, magazines or
                connecials as a model?
              </p>
            </div>

            <div>
              <h2>03</h2>
              <h3>Get Exciting Jobs</h3>
              <p>
                Have you ever wanted to shown in catelogs, magazines or
                connecials as a model?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container howitworks-container ">
        <div className="about-section">
          <img
            src="./images/how-it-works/model2.png"
            alt="img1"
            className="about-img"
          />
          <div className="about-text">
            <h2>For people who want to model</h2>
            <span>
              Premium models app works with both freelance models and agency
              signed models to gurantee a high professional level to clents. If
              you want to sign up and increase your exposure towards clients
            </span>
            <span>
              Register and set up your portfolio so that all booking request go
              through you directly or your agency.
            </span>
          </div>
        </div>

        <div className="about-section section-2">
          <div className="about-text">
            <h2>For clients who need models</h2>
            <span>
              Our search function allows you to easily find models. Choose
              freely among a vast selection of highky professionL models for the
              look you want to book for your campaign.
            </span>
            <span>
              You can make booking request for the models ou are interested in
              and get started with your creative project.
            </span>
          </div>
          <img
            src="./images/how-it-works/model3.png"
            alt="img2"
            className="about-img"
          />
        </div>

        <div className="about-section section-3">
          <img
            src="./images/how-it-works/model8.png"
            alt="img3"
            className="about-img"
          />
          <div className="about-text">
            <h2>For Agencies who want to market models</h2>
            <span>
              We have created a solition to allow you to easily market your
              models online and connect to clients around the world.
            </span>
            <span>
              You can manage your models on our portal and receive all booking
              request directly.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
