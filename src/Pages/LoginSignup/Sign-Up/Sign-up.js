import "./Sign-up.css";
import SignupBtn from "./Sign-up-btn";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ModelSignUpForm from "./Model-Form/Models-Sign-up-Form";
import AgencySignUpForm from "./Agency-Form/Agency-Sign-up-Form";
import ClientSignUpForm from "./Client-Form/Client-Sign-up-Form";
import SignUpContext from "../../../Context/Sign-up-context";

function SignUp() {
  const { AlertModal } = useContext(SignUpContext);

  //Jsx render section
  return (
    <section className="sign-up-container">
      {AlertModal()}
      <section className="sign-up-info">
        <h2 className="info-title">Sign up</h2>
        <p className="info-text">I want to sign up</p>
        <SignupBtn btnText="As a model" />
        <SignupBtn btnText="As a client" />
        <SignupBtn btnText="As an agency" />

        <div className="other-info">
          <p className="terms-text">By creating an account you agree to our Terms and Polices</p>
          <span className="info-text">Already a member?</span>
          <Link to="/login" className="login-btn colored--btn">
            Login
          </Link>
          <span>Forgot your password?</span>
        </div>
      </section>
      <AgencySignUpForm />
      <ClientSignUpForm />
      <ModelSignUpForm />
    </section>
  );
}

export default SignUp;
