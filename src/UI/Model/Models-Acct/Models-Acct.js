import AcctSetting from "./Acct-Setting/Models-Acct-Setting";
import ModelForms from "./Kyc-Section/Models-Kyc-Forms";
import ModelsDashBoard from "./Dash-Board/Models-Dash-Board";
import "./Models-Acct.css";
import DomItems from "./InputItems.json";
import Data from "../../data/Data-db.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import AlertBox from "./Alert-Box";

function ModelsAcct() {
  const [userData, setUserData] = useState(Data.models);
  const [activeSection, setActiveSection] = useState("setting");
  const [accountId, setAccountId] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [activeModel, setActiveModal] = useState("");

  function AlertModal() {
    /* modal section */
    return (
      <section style={{ transform: toggleModal && `translateX(${0}%)` }} className="alert-section">
        {/* sign up */}

        {activeModel === "sign-up-Err" && (
          <AlertBox
            title="Complete the form!"
            note="You're required to fill out this form completely before you can continue with your registration!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {activeModel === "close-payment" && (
          <AlertBox
            title="Wait!!!"
            note="Why are you leaving... You are Moments away from Awesomeness!! We hope to see You again"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {activeModel === "confirm-payment" && (
          <AlertBox
            title="Successful"
            note="Your payment have been submitted for confirmation, you will receive an email once your payment is confirm!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {/* successful saving */}

        {activeModel === "save" && (
          <AlertBox
            title=" Saved"
            note=" All current changes made have been saved successfully!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {/* successful kyc text  */}

        {activeModel === "kyc" && (
          <AlertBox
            title="Successful"
            note="Your kyc form has been submitted successfully! Congrats and
              Welcome On Board!"
            icon={true}
            setToggleModal={setToggleModal}
          />
        )}

        {/*add image text  */}

        {activeModel === "add-photo" && (
          <AlertBox
            title="Add Photos"
            note="You're required to add six(6) work Photos, Polaroid photos(optional) and a CompCard(optional)"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {/* trash image text */}

        {activeModel === "trash-photo" && (
          <AlertBox
            title="Delete Photos"
            note="You're required to have more than six(6) work photos to perform this Action!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}
        {activeModel === "trash-polaroid" && (
          <AlertBox
            title="Delete Polaroids"
            note="You're required to have more than three(3) polaroid photos to perform this Action!"
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {/* category modal text */}

        {activeModel === "category" && (
          <AlertBox
            title=" Choose which type of model you suited!"
            note="You can only make a maximum of two choices from the list of
              categories."
            icon={false}
            setToggleModal={setToggleModal}
          />
        )}

        {/* job interest modal text */}

        {activeModel === "job" && (
          <AlertBox
            title="Choose the type of job you will be interest in!"
            note="You can make as many choices as you can from the list of job."
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
      .post("http://localhost:3500/models", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setAccountId(uniqueId);
  }
  return (
    <>
      {AlertModal()}
      {activeSection === "dash-board" && <ModelsDashBoard userData={userData} />}
      {activeSection === "kyc" && (
        <ModelForms
          DomItems={DomItems}
          accountId={accountId}
          userData={userData}
          handleModal={handleModal}
        />
      )}
      {activeSection === "setting" && (
        <AcctSetting DomItems={DomItems} userData={userData} handleModal={handleModal} />
      )}
    </>
  );
}

export default ModelsAcct;
