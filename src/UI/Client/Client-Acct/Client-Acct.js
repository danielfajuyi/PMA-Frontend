import AcctSetting from "./Acct-Setting/Client-Acct-Setting";
import ClientForms from "./Kyc-Section/Client-Kyc-Forms";
import ClientSignUpForm from "./Sign-up-Form/Client-Sign-up-Form";
import ClientsDashBoard from "./Dash-Board/Client-Dash-Board";
import "./Client-Acct.css";
import DomItems from "./InputItems.json";
import Data from "../../data/Data-db.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import AlertBox from "./Alert-Box";

function ClientsAcct() {
  const [userData, setUserData] = useState(Data.client);
  const [activeSection, setActiveSection] = useState("setting");
  const [accountId, setAccountId] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [activeClient, setActiveModal] = useState("");

  function AlertModal() {
    /* modal section */
    return (
      <section
        style={{ transform: toggleModal && `translateX(${0}%)` }}
        className="--alert-section"
      >
        {/* sign up */}

        {activeClient === "sign-up-Err" && (
          <AlertBox
            title="Complete the form!"
            note="You're required to fill out this form completely before you can continue with your registration!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {/* successful form submit */}

        {activeClient === "save" && (
          <AlertBox
            title=" Saved"
            note="All current changes made have been saved successfully!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeClient === "kyc" && (
          <AlertBox
            title="Successful"
            note="Your kyc form has been submitted successfully! Congrats and
              Welcome On Board!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeClient === "add-photo" && (
          <AlertBox
            title="Add Photos"
            note="You're required to add a profile photo, Six(6) work photos and a cover photo(optional)"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {activeClient === "trash-photo" && (
          <AlertBox
            title="Delete Photos"
            note="You're required to have more than Six(6) work photos to perform this Action!"
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
      .post("http://localhost:3500/client", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setAccountId(uniqueId);
  }
  return (
    <>
      {AlertModal()}
      {activeSection === "dash-board" && (
        <ClientsDashBoard userData={userData} />
      )}
      {activeSection === "kyc" && (
        <ClientForms
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
        <ClientSignUpForm
          createAccount={createAccount}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default ClientsAcct;
