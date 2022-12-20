import React from "react";
import { AgencySignupBtn } from "../../../Components/AgencySignupBtn/AgencySignupBtn";

export const AgencySignupFormThree = () => {
  return (
    <div className="agency-signup__form-three fx-gr-2">
      <div className="portfolio__wrapper">
        <p className="portfolio__paragraph">Portfolio Photos</p>
        <p className="portfolio__sub-paragraph">
          Uploas pictures of some of the modeling jobs done by your models
        </p>

        <div className="portfolio__image-wrapper mt-24">
          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>

          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>

          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>

          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>

          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>

          <div className="portfolio__image1-box d-flex justify-content-center align-items-center">
            <div className="upload__imageOne  d-flex justify-content-center align-items-center">
              <img src="./assets/upload-icon.png" alt="" />
            </div>
          </div>
        </div>

        <div className="d-flex ">
          <div>
            <p className="portfolio__paragraph" style={{ marginTop: "36px" }}>
              Header picture
            </p>
            <p className="portfolio__sub-paragraph">
              Add a display picture for your dashboard
            </p>

            <div className="mt-24 d-flex">
              <div className="portfolio__image1-box d-flex justify-content-center align-items-center ">
                <div className="upload__imageOne  d-flex justify-content-center align-items-center">
                  <img src="./assets/upload-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-160px" }}>
          <AgencySignupBtn content="Finish" />
        </div>
      </div>
    </div>
  );
};
