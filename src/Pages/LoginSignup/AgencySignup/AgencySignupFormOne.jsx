import React from "react";
import { AgencySignupBtn } from "../../../Components/AgencySignupBtn/AgencySignupBtn";

export const AgencySignupFormOne = () => {
  return (
    <form
      className="agency-signup__form-one fx-gr-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form__wrapper">
        <div className="d-flex justify-content-between">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="agency-signup-one__input-width"
            />
          </div>

          <div>
            <label htmlFor="userNmae">Username</label>
            <input
              type="text"
              name="Username"
              id="Username"
              className="agency-signup-one__input-width"
            />
          </div>
        </div>

        <div className="d-flex column mail-input__wrapper">
          <label htmlFor="email">Email</label>
          <input className="fx-gr-2" type="email" name="email" id="email" />
        </div>

        <div className="mail-input__wrapper d-flex justify-content-between">
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="agency-signup-one__input-width"
            />
          </div>

          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className="agency-signup-one__input-width"
            />
          </div>
        </div>

        <div className="mail-input__wrapper d-flex justify-content-between">
          <div>
            <label htmlFor="mobile-number">Mobile No</label>
            <input
              type="tel"
              name="mobile-number"
              id="mobile-number"
              className="agency-signup-one__input-width"
            />
          </div>

          <div>
            <label htmlFor="referral-code">Referral Code (optional)</label>
            <input
              type="text"
              name="referral-code"
              id="referral-code"
              className="agency-signup-one__input-width"
            />
          </div>
        </div>
      </div>
      <div className="agreement__wrapper">
        <input type="radio" name="agreement" id="agreement" />
        <label htmlFor="agreement">
          I agree and understand the Privacy Policy & Terms of service
        </label>
      </div>

      <AgencySignupBtn content="Signup" url="agency/signup/two" />
    </form>
  );
};
