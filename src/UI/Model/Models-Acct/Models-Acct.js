import AcctSetting from "./Acct-Setting/Models-Acct-Setting";
import ModelForms from "./Kyc-Section/Models-Kyc-Forms";
import ModelSignUpForm from "./Sign-up-Form.js/Models-Sign-up-Form";
import ModelsDashBoard from "./Dash-Board/Models-Dash-Board";
import DomItems from "./InputItems.json";
import userData from "../../user-db.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function ModelsAcct() {
  const [accountId, setAccountId] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [activeModel, setActiveModal] = useState("");

  function AlertModal() {
    /* modal section */
    return (
      <section
        style={{ transform: toggleModal && `translateX(${0}%)` }}
        className="modal-section"
      >
        {/* category modal text */}
        <div className="alert-box">
          {activeModel === "category" && (
            <h2 className="alert-title">
              Choose which type of model you suited!
            </h2>
          )}
          {activeModel === "category" && (
            <p className="alert-text">
              <span className="bold-text colored-text">Note: </span>
              You can only make a maximum of two choices from the list of
              categories.
            </p>
          )}

          {/* job interest modal text */}

          {activeModel === "job" && (
            <h2 className="alert-title">
              Choose the type of job you will be interest in!
            </h2>
          )}
          {activeModel === "job" && (
            <p className="alert-text">
              <span className="bold-text colored-text">Note: </span>
              You can make as many choices as you can from the list of job.
            </p>
          )}
          {activeModel === "photo" && (
            <h2 className="alert-title">Add photos that best off your work</h2>
          )}
          {activeModel === "photo" && (
            <p className="alert-text">
              <span className="bold-text colored-text">Note: </span>
              Photos has to be up to six(6) and at least three or more
              (optional) polaroid photos and a Comp card (optional)
            </p>
          )}

          <div className="alert-btn">
            <button
              onClick={() => setToggleModal((prev) => !prev)}
              className="del-alert-btn bold-text yes-btn"
            >
              Got it
            </button>
          </div>
        </div>
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
    userData.push(data);
    setAccountId(uniqueId);
    console.log(userData);
  }
  return (
    <>
      <AcctSetting
        DomItems={DomItems}
        userData={userData}
        handleModal={handleModal}
      />

      {AlertModal()}

      {/*<ModelForms
        DomItems={DomItems}
        accountId={accountId}
        userData={userData}
        handleModal={handleModal}
      />
       */}

      {/*
     <ModelSignUpForm createAccount={createAccount} />
    
   
       */}
      {/* <ModelsDashBoard userData={userData} /> */}
    </>
  );
}

export default ModelsAcct;
