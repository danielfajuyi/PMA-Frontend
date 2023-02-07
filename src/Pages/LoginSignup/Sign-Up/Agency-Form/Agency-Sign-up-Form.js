import { useEffect, useState, useContext } from "react";
import SignUpInput from "./FormInputs";
import "./Agency-Sign-up-Form.css";
import HandlePayment from "./Payment";
import SignUpContext from "../../../../Context/Sign-up-context";

import axios from "../../../../Api/axios";
const SIGNUp_URL = "/Register";

function AgencySignUpForm() {
  const { activeSignup, toggleSignup, setToggleSignup, handleModal } = useContext(SignUpContext);

  // user data state
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    referral: "",
    terms: true,
  });

  // destructured user data state
  const { firstName, lastName, email, password, mobileNo, referral, terms } = userData;

  //confirm password state
  const [confirm, setConfirm] = useState("");

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
  const { fNameErr, lNameErr, emailErr, passErr, confirmErr, mobileErr, referralErr, termsErr } =
    error;

  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    name === "terms"
      ? setUserData((prevData) => ({ ...prevData, [name]: !terms }))
      : name === "confirm"
      ? setConfirm(value)
      : setUserData((prevData) => ({ ...prevData, [name]: value }));
  }

  //paystack payment config

  const config = {
    email: userData.email,

    amount: 50000 * 100,

    metadata: {
      name: userData.firstName,
      phone: userData.mobileNo,
    },

    publicKey: "pk_test_2738ea7b83386afd8897e7092bbe084d785adc92",

    channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],
  };

  //validating first name input
  useEffect(() => {
    const nameRegex = /^[A-Z]+$/i;

    function validateFName() {
      firstName.length < 3 || firstName.length > 15 || !nameRegex.test(firstName)
        ? setError((prevErr) => ({
            ...prevErr,
            fNameErr:
              "First should have a min of (3), max of (15) characters and must contain only letter A-Z!",
          }))
        : setError((prevErr) => ({ ...prevErr, fNameErr: null }));
    }

    firstName && validateFName();
  }, [firstName]);

  // validating last name inputs
  useEffect(() => {
    const nameRegex = /^[A-Z]+$/i;

    function validateLName() {
      lastName.length < 3 || lastName.length > 12 || !nameRegex.test(lastName)
        ? setError((prevErr) => ({
            ...prevErr,
            lNameErr:
              "First should have a min of (3), max of (15) characters and must contain only letter A-Z!",
          }))
        : setError((prevErr) => ({ ...prevErr, lNameErr: null }));
    }
    lastName && validateLName();
  }, [lastName]);

  // validating email inputs
  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function validateEmail() {
      !emailRegex.test(email)
        ? setError((prevErr) => ({
            ...prevErr,
            emailErr: "Please ensure you enter a valid email",
          }))
        : setError((prevErr) => ({ ...prevErr, emailErr: null }));
    }
    email && validateEmail();
  }, [email]);

  // validating password inputs
  useEffect(() => {
    function validatePassword() {
      const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

      password.length < 6 || password.length > 15 || !passRegex.test(password)
        ? setError((prevErr) => ({
            ...prevErr,
            passErr:
              "Password should have a min of (6), max of (15) characters must contain at least 1 Uppercase and Lowercase letter",
          }))
        : setError((prevErr) => ({ ...prevErr, passErr: null }));
    }

    // validating confirm-password inputs
    function confirmPassword() {
      confirm !== password
        ? setError((prevErr) => ({
            ...prevErr,
            confirmErr: "Ensure password corresponds to previous  password entered ",
          }))
        : setError((prevErr) => ({ ...prevErr, confirmErr: null }));
    }

    password && validatePassword();
    confirm && confirmPassword();
  }, [password, confirm]);

  // validating mobile-No inputs
  useEffect(() => {
    const numRegex = /^[0-9]+$/;
    function validateMobileNum() {
      !numRegex.test(mobileNo) || mobileNo.length < 6
        ? setError((prevErr) => ({
            ...prevErr,
            mobileErr:
              "Mobile-No should have at least six(6) digits and must contains only numbers 0-9",
          }))
        : setError((prevErr) => ({ ...prevErr, mobileErr: null }));
    }
    mobileNo && validateMobileNum();
  }, [mobileNo]);

  // validating terms  inputs
  useEffect(() => {
    terms
      ? setError((prevErr) => ({
          ...prevErr,
          termsErr: null,
        }))
      : setError((prevErr) => ({
          ...prevErr,
          termsErr: "Please click the above button to Accept our terms of service",
        }));
  }, [terms]);

  //Checking for error
  useEffect(() => {
    let err = false;

    if (
      error.fNameErr !== null ||
      error.lNameErr !== null ||
      error.emailErr !== null ||
      error.passErr !== null ||
      error.confirmErr !== null ||
      error.mobileErr !== null ||
      error.termsErr !== null
    ) {
      err = true;
    } else {
      err = false;
    }

    setIsError(err);
  }, [error]);

  //submit form and creating account
  const createAccount = async () => {
    let data = {
      account: { ...userData },
      profile: {
        deactivateAccount: false,
      },
    };

    try {
      const response = await axios.post(SIGNUp_URL, JSON.stringify({ ...data }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      console.log(JSON.stringify(response));

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

      setConfirm("");
    } catch (error) {
      if (!error?.response) {
        console.log("No Server response");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <section
      style={{
        transform: activeSignup === "agency" && toggleSignup && `translateX(${0}%)`,
      }}
      className="sign--up">
      <form className="agency-sign-up" onSubmit={(e) => e.preventDefault()}>
        <div className="sign--up-img">
          <img src="/images/agent_1.jpg" alt="" />
          <div className="image--text-rapper">
            <h4 className="image--title">Almost there!</h4>
            <p className="image--text">You are moments away from Awesomeness!!</p>
          </div>
        </div>

        <section className="sign--up-section">
          <i
            onClick={() => setToggleSignup(false)}
            className="fa-solid fa-xmark close--sign-up colored-hover"></i>
          <h2 className="sign--up-text">Sign-up</h2>
          <div className="input--sections">
            <div className="name--section">
              <div className="input--container">
                <SignUpInput
                  type="text"
                  id="first Name"
                  name="firstName"
                  placeholder="Enter FirstName..."
                  label="FirstName"
                  value={firstName}
                  handleChange={handleChange}
                  error={fNameErr}
                />
              </div>
              <div className="input--container">
                <SignUpInput
                  type="text"
                  id="last Name"
                  name="lastName"
                  placeholder="Enter LastName..."
                  label="LastName"
                  value={lastName}
                  handleChange={handleChange}
                  error={lNameErr}
                />
              </div>
            </div>

            <div className="email--section">
              <SignUpInput
                type="email"
                id="email."
                name="email"
                placeholder="Enter your email..."
                label="Email"
                value={email}
                handleChange={handleChange}
                error={emailErr}
              />
            </div>
            <div className="other--section">
              <div className="input--container">
                <SignUpInput
                  type="password"
                  id="pass word"
                  name="password"
                  placeholder="Enter password..."
                  label="Password"
                  value={password}
                  handleChange={handleChange}
                  error={passErr}
                />
              </div>
              <div className="input--container">
                <SignUpInput
                  type="password"
                  id="confirm pwd"
                  name="confirm"
                  placeholder="Confirm password..."
                  label="Confirm"
                  value={confirm}
                  handleChange={handleChange}
                  error={confirmErr}
                />
              </div>
              <div className="input--container">
                <SignUpInput
                  type="tel"
                  id="mobile No"
                  name="mobileNo"
                  placeholder="Mobile Num..."
                  label="Mobile-No"
                  value={mobileNo}
                  handleChange={handleChange}
                  error={mobileErr}
                />
              </div>
              <div className="input--container">
                <SignUpInput
                  type="tel"
                  id="referral code"
                  name="referral"
                  placeholder="Enter referral..."
                  label="Referral"
                  value={referral}
                  handleChange={handleChange}
                  error={referralErr}
                />
              </div>
            </div>

            <div className="other--container">
              <div>
                <input
                  className="terms-check"
                  onChange={handleChange}
                  type="checkbox"
                  id="agency"
                  name="terms"
                  checked={terms}
                />
                <label className="colored-hover" htmlFor="agency">
                  I Agree to the Policy & Terms of Service
                </label>
                <p className="error-text">{termsErr}</p>
              </div>

              <HandlePayment
                config={config}
                isError={isError}
                createAccount={createAccount}
                handleModal={handleModal}
              />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
export default AgencySignUpForm;
