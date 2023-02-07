import { useContext } from "react";
import SignUpContext from "../../../Context/Sign-up-context";

function SignupBtn({ btnText }) {
  const { setActiveSignup, setToggleSignup } = useContext(SignUpContext);

  return (
    <button
      onClick={() => {
        let active;
        btnText === "As a model" && (active = "model");
        btnText === "As a client" && (active = "client");
        btnText === "As an agency" && (active = "agency");
        setActiveSignup(active);
        setToggleSignup(true);
      }}
      className="sign-up--btn">
      {btnText}
    </button>
  );
}

export default SignupBtn;
