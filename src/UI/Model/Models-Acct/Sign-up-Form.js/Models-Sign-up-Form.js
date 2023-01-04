import { useState } from "react";
import SignUpInput from "./FormInputs";
import "./Models-Sign-up-Form.css";

function ModelSignUpForm({ createAccount }) {
  // user data state
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    referral: "",
    terms: false,
  });

  // destructured user data state
  const { firstName, lastName, email, password, mobileNo, referral, terms } =
    userData;

  //confirm password state
  const [confirmPass, setConfirmPass] = useState("");

  //input error state
  const [error, setError] = useState({
    fNameErr: "",
    lNameErr: "",
    emailErr: "",
    passErr: "",
    confirmErr: "",
    mobileErr: "",
    referralErr: "",
    termsErr: "",
  });

  // destructured input error state
  const {
    fNameErr,
    lNameErr,
    emailErr,
    passErr,
    confirmErr,
    mobileErr,
    referralErr,
    termsErr,
  } = error;

  function handleChange(e) {
    const { name, value } = e.target;

    name === "confirm-Password"
      ? setConfirmPass(value)
      : setUserData((prevData) => ({ ...prevData, [name]: value }));

    validateForm(name, value);
  }

  function handleClick(name) {
    setUserData((prevData) => ({ ...prevData, [name]: !terms }));

    validateForm(name, !terms);
  }

  function validateForm(name, value) {
    const nameRegex = /^[A-Z]+$/i;
    const numRegex = /^[0-9]+$/;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

    if (name === "firstName") {
      //validating first name input

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            fNameErr: "First name can not be empty!",
          }))
        : value.length < 3
        ? setError((prevErr) => ({
            ...prevErr,
            fNameErr: "First name is too short!",
          }))
        : value.length > 12
        ? setError((prevErr) => ({
            ...prevErr,
            fNameErr: "First name is too long!",
          }))
        : !nameRegex.test(value)
        ? setError((prevErr) => ({
            ...prevErr,
            fNameErr: "First name must contain only letter A-Z!",
          }))
        : setError((prevErr) => ({ ...prevErr, fNameErr: null }));
    } else if (name === "lastName") {
      // validating last name inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            lNameErr: "Last name can not be empty!",
          }))
        : value.length < 3
        ? setError((prevErr) => ({
            ...prevErr,
            lNameErr: "Last name is too short!",
          }))
        : value.length > 12
        ? setError((prevErr) => ({
            ...prevErr,
            lNameErr: "Last name is too long!",
          }))
        : !nameRegex.test(value)
        ? setError((prevErr) => ({
            ...prevErr,
            lNameErr: "Last name must contain only letter A-Z!",
          }))
        : setError((prevErr) => ({ ...prevErr, lNameErr: null }));
    } else if (name === "email") {
      // validating email inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            emailErr: "Email can not be empty",
          }))
        : !emailRegex.test(value)
        ? setError((prevErr) => ({
            ...prevErr,
            emailErr: "Please enter a valid email",
          }))
        : setError((prevErr) => ({ ...prevErr, emailErr: null }));
    } else if (name === "password") {
      // validating password inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            passErr: "Password can not be empty",
          }))
        : value.length < 6
        ? setError((prevErr) => ({
            ...prevErr,
            passErr: "Password is too short",
          }))
        : value.length > 15
        ? setError((prevErr) => ({
            ...prevErr,
            passErr: "Password is too long",
          }))
        : !passRegex.test(value)
        ? setError((prevErr) => ({
            ...prevErr,
            passErr:
              "Password must have at least 1 Uppercase and Lowercase letter",
          }))
        : setError((prevErr) => ({ ...prevErr, passErr: null }));
    } else if (name === "confirm-Password") {
      // validating confirm-password inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            confirmErr: "Please confirm your password",
          }))
        : value !== password
        ? setError((prevErr) => ({
            ...prevErr,
            confirmErr: "Password dose not match",
          }))
        : setError((prevErr) => ({ ...prevErr, confirmErr: null }));
    } else if (name === "mobileNo") {
      // validating mobile-No inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            mobileErr: "Mobile-No can not be empty",
          }))
        : !numRegex.test(value)
        ? setError((prevErr) => ({
            ...prevErr,
            mobileErr: "Mobile-No must contain only numbers 0-9",
          }))
        : value.length < 6
        ? setError((prevErr) => ({
            ...prevErr,
            mobileErr: "Ensure that you enter a valid number",
          }))
        : setError((prevErr) => ({ ...prevErr, mobileErr: null }));
    } else if (name === "referral") {
      // validating referral  inputs

      value === ""
        ? setError((prevErr) => ({
            ...prevErr,
            referralErr: "Enter your referral code",
          }))
        : setError((prevErr) => ({ ...prevErr, referralErr: null }));
    } else if (name === "terms") {
      // validating terms  inputs

      value
        ? setError((prevErr) => ({
            ...prevErr,
            termsErr: null,
          }))
        : setError((prevErr) => ({
            ...prevErr,
            termsErr:
              "Please click the above button to Accept our terms of service",
          }));
    }
  }

  function sendForm() {
    let errorState = "";

    fNameErr !== null
      ? (errorState = true)
      : lNameErr !== null
      ? (errorState = true)
      : emailErr !== null
      ? (errorState = true)
      : passErr !== null
      ? (errorState = true)
      : confirmErr !== null
      ? (errorState = true)
      : mobileErr !== null
      ? (errorState = true)
      : referralErr !== null
      ? (errorState = true)
      : termsErr !== null
      ? (errorState = true)
      : (errorState = "");

    if (!errorState) {
      createAccount({ ...userData });

      setUserData((prevData) => ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNo: "",
        referral: "",
        terms: false,
      }));
      setError((prevErr) => ({
        fNameErr: "",
        lNameErr: "",
        emailErr: "",
        passErr: "",
        confirmErr: "",
        mobileErr: "",
        referralErr: "",
        termsErr: "",
      }));

      setConfirmPass("");
    }
  }

  return (
    <section className="sign-up">
      <form className="model-sign-up" onSubmit={(e) => e.preventDefault()}>
        <div className="sign-up-img">
          <img src="/images/sign-up (2).jpg" alt="" />
          <div className="image-text-rapper">
            <h4 className="image-title">Almost there!</h4>
            <p className="image-text">
              You are moments away from Awesomeness!!
            </p>
          </div>
        </div>

        <section className="sign-up-section">
          <i className="fa-solid fa-xmark close-sign-up"></i>
          <h2 className="sign-up-text">Sign-up</h2>
          <div className="input-sections">
            <div className="name-section">
              <div className="input-container">
                <SignUpInput
                  type="text"
                  id="firstName"
                  placeholder="Enter FirstName..."
                  label="FirstName"
                  value={firstName}
                  handleChange={handleChange}
                  error={fNameErr}
                />
              </div>
              <div className="input-container">
                <SignUpInput
                  type="text"
                  id="lastName"
                  placeholder="Enter LastName..."
                  label="LastName"
                  value={lastName}
                  handleChange={handleChange}
                  error={lNameErr}
                />
              </div>
            </div>

            <div className="email-section">
              <SignUpInput
                type="email"
                id="email"
                placeholder="Enter your email..."
                label="Email"
                value={email}
                handleChange={handleChange}
                error={emailErr}
              />
            </div>
            <div className="other-section">
              <div className="input-container">
                <SignUpInput
                  type="password"
                  id="password"
                  placeholder="Enter password..."
                  label="Password"
                  value={password}
                  handleChange={handleChange}
                  error={passErr}
                />
              </div>
              <div className="input-container">
                <SignUpInput
                  type="password"
                  id="confirm-Password"
                  placeholder="Confirm password..."
                  label="Confirm password"
                  value={confirmPass}
                  handleChange={handleChange}
                  error={confirmErr}
                />
              </div>
              <div className="input-container">
                <SignUpInput
                  type="tel"
                  id="mobileNo"
                  placeholder="Mobile Num..."
                  label="Mobile-No"
                  value={mobileNo}
                  handleChange={handleChange}
                  error={mobileErr}
                />
              </div>
              <div className="input-container">
                <SignUpInput
                  type="tel"
                  id="referral"
                  placeholder="Enter referral..."
                  label="Referral Code"
                  value={referral}
                  handleChange={handleChange}
                  error={referralErr}
                />
              </div>
            </div>

            <div className="other-container">
              <div className=" colored-hover">
                <button
                  type="button"
                  onClick={() => handleClick("terms")}
                  className="radio-btn colored-hover"
                  style={{
                    borderColor: terms ? "#ff007a" : "#808080",
                  }}
                >
                  <div
                    className="radio-btn_bg"
                    style={{
                      backgroundColor: terms ? "#ff007a" : "#808080",
                    }}
                  ></div>
                </button>

                <span onClick={() => handleClick("terms")}>
                  I Agree to the Policy & Terms of Service
                </span>
              </div>

              <p className="sign-up-error-text">{termsErr}</p>
              <button
                onClick={sendForm}
                className="sign-up-btn bold-text dark--btn on-hover"
                type="submit"
              >
                Sign-up
              </button>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
export default ModelSignUpForm;
