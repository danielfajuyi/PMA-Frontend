import React from "react";

import { AgencySignupBtn } from "../../../Components/AgencySignupBtn/AgencySignupBtn";
import { InputDescription } from "../../../Components/InputDscription/InputDescription";

export const AgencySignupFormTwo = () => {
  return (
    <form
      className="agency-signup__form-two fx-gr-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form__wrapper ">
        <div className="d-flex column">
          <label htmlFor="agency-name">Agency Name</label>
          <input
            type="text"
            name="agency-name"
            id="agency-name"
            className="fx-gr-2"
          />
        </div>

        <div className="d-flex column mail-input__wrapper">
          <label htmlFor="agency-url">Agency Url</label>
          <input
            type="url"
            name="agency-url"
            id="agency-url"
            className="fx-gr-2"
          />
        </div>

        <div className="d-flex column mail-input__wrapper">
          <label htmlFor="agency-url">Address</label>
          <input
            type="text"
            name="agency-address"
            id="agency-address"
            className="fx-gr-2"
          />
        </div>

        <div className="d-flex justify-content-between mt-48">
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              className="agency-signup-one__input-width"
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              className="agency-signup-one__input-width"
            />
          </div>
        </div>

        <div className="mt-48 d-flex column ">
          <label htmlFor="agency-bio">Agency Bio</label>
          <textarea
            type="text"
            rows="6"
            name="agency-bio"
            id="agency-bio"
            className="fx-gr-2"
          />
        </div>

        <div className="d-flex column mt-12">
          <label htmlFor="agency-name">Industry</label>
          <input
            type="text"
            name="agency-name"
            id="agency-name"
            className="fx-gr-2"
          />
        </div>

        <InputDescription text="Social media URL links" mgTop="35px" />

        <div className="d-flex mt-12">
          <div>
            <label htmlFor="facebook-url">
              Facebook <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="facebook-url"
              id="facebook-url"
              className="input-link__width"
            />
          </div>

          <div>
            <label htmlFor="instagram-url">
              Instagram <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="instagram-url"
              id="instagram-url"
              className="input-link__width"
            />
          </div>

          <div>
            <label htmlFor="twitter-url">
              Twitter <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="twitter-url"
              id="twitter-url"
              className="input-link__width"
            />
          </div>
        </div>

        <InputDescription text="Social Media" mgTop="48px" />
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex mt-24 social-media__container">
          <div>
            <label htmlFor="facebook-link">
              Facebook <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="facebook-link"
              id="facebook-link"
              className="input-link__width"
            />
          </div>

          <div>
            <label htmlFor="instagram-link">
              Instagram <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="instagram-link"
              id="instagram-link"
              className="input-link__width"
            />
          </div>

          <div>
            <label htmlFor="twitter-link">
              Twitter <span className="link-required__symbol">&#42;</span>
            </label>
            <input
              type="url"
              name="twitter-link"
              id="twitter-link"
              className="input-link__width"
            />
          </div>
        </div>

        <AgencySignupBtn
          content="Next"
          mgTop="-40px"
          url="agency/signup/three"
        />
      </div>

      {/* <div className="d-flex mt-24 social-media__container">
        <div>
          <label htmlFor="facebook-link">
            Facebook <span className="link-required__symbol">&#42;</span>
          </label>
          <input
            type="url"
            name="facebook-link"
            id="facebook-link"
            className="input-link__width"
          />
        </div>

        <div>
          <label htmlFor="instagram-link">
            Instagram <span className="link-required__symbol">&#42;</span>
          </label>
          <input
            type="url"
            name="instagram-link"
            id="instagram-link"
            className="input-link__width"
          />
        </div>

        <div>
          <label htmlFor="twitter-link">
            Twitter <span className="link-required__symbol">&#42;</span>
          </label>
          <input
            type="url"
            name="twitter-link"
            id="twitter-link"
            className="input-link__width"
          />
        </div>
      </div> */}
    </form>
  );
};
