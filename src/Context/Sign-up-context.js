import { createContext, useState } from "react";
import AlertBox from "../Pages/LoginSignup/Sign-Up/Alert-Box";

const SignUpContext = createContext({});

export const DataProvider = ({ children }) => {
  const [activeSignup, setActiveSignup] = useState("");
  const [toggleSignup, setToggleSignup] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  function handleModal(mode) {
    setActiveModal(mode);
    setToggleModal((prev) => !prev);
  }

  //modal section
  //this function returns a modal

  function AlertModal() {
    /* modal section */
    return (
      <section style={{ transform: toggleModal && `translateX(${0}%)` }} className="alert-section">
        {/* sign up */}

        {activeModal === "sign-up-Err" && (
          <AlertBox
            title="Complete the form!"
            note="You're required to fill out this form completely before you can continue with your registration!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {activeModal === "close-payment" && (
          <AlertBox
            title="Wait!!!"
            note="Why are you leaving... You are Moments away from Awesomeness!! We hope to see You again"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeModal === "confirm-payment" && (
          <AlertBox
            title="Successful"
            note="Your payment have been submitted for confirmation, you will receive an email once your payment is confirm!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}
      </section>
    );
  }

  return (
    <SignUpContext.Provider
      value={{
        toggleSignup,
        setToggleSignup,
        activeSignup,
        setActiveSignup,
        handleModal,
        AlertModal,
      }}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
