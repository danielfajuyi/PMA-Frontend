import AcctSetting from "./Acct-Setting/Agency-Acct-Setting";
import AgencyForms from "./Kyc-Section/Agency-Kyc-Forms";
import AgencySignUpForm from "./Sign-up-Form/Agency-Sign-up-Form";
import AgencyDashBoard from "./Dash-Board/Agency-Dash-Board";
import "./Agency-Acct.css";
import DomItems from "./InputItems.json";
import Data from "../../data/Data-db.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import AlertBox from "./Alert-Box";

function AgencyAcct() {
  const [userData, setUserData] = useState(Data.agency);
  const [activeSection, setActiveSection] = useState("setting");
  const [accountId, setAccountId] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [activeAgency, setActiveModal] = useState("");

  function AlertModal() {
    /* modal section */
    return (
      <section
        style={{ transform: toggleModal && `translateX(${0}%)` }}
        className="alert--section"
      >
        {/* sign up */}

        {activeAgency === "sign-up-Err" && (
          <AlertBox
            title="Complete the form!"
            note="You're required to fill out this form completely before you can continue with your registration!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {activeAgency === "close-payment" && (
          <AlertBox
            title="Wait!!!"
            note="Why are you leaving... You are Moments away from Awesomeness!! We hope to see You again"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeAgency === "confirm-payment" && (
          <AlertBox
            title="Successful"
            note="Your payment have been submitted for confirmation, you will receive an email once your payment is confirm!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {/* successful form submit */}

        {activeAgency === "save" && (
          <AlertBox
            title=" Saved"
            note=" All current changes made have been saved successfully!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeAgency === "kyc" && (
          <AlertBox
            title="Successful"
            note="Your kyc form has been submitted successfully! Congrats and
              Welcome On Board!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeAgency === "add-photo" && (
          <AlertBox
            title="Add Photos"
            note="You're required to add a profile photo, six(6) work photos and a cover photo(optional)"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {activeAgency === "trash-photo" && (
          <AlertBox
            title="Delete Photos"
            note="You're required to have more than six(6) work photos and a cover photo(optional)"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}
      </section>
    );
  }

  function handleModal(mode) {
    setActiveModal(mode);
    setToggleModal((prev) => !prev);
  }

  function createAccount(info) {
    const uniqueId = uuidv4();

    let data = {
      id: uniqueId,
      account: { ...info },
      profile: {
        deactivateAccount: false,
        displayProfile: true,
        marketPhoto: false,
      },
    };

    axios
      .post("http://localhost:3500/agency", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setAccountId(uniqueId);
  }
  return (
    <>
      {AlertModal()}
      {activeSection === "dash-board" && (
        <AgencyDashBoard userData={userData} />
      )}
      {activeSection === "kyc" && (
        <AgencyForms
          DomItems={DomItems}
          accountId={accountId}
          userData={userData}
          handleModal={handleModal}
        />
      )}
      {activeSection === "setting" && (
        <AcctSetting
          DomItems={DomItems}
          userData={userData}
          handleModal={handleModal}
        />
      )}
      {activeSection === "sign-up" && (
        <AgencySignUpForm
          createAccount={createAccount}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default AgencyAcct;
