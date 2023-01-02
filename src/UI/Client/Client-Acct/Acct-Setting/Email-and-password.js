import "./Email-and-password.css";
import EditBtn from "./Edit-btn";
import SwitchBtn from "./Switch-Btn";
import { useState, useEffect } from "react";

function EmailAndPassword({
  handleActiveEdit,
  activeEdit,
  userData,
  resetDiscard,
  handleModal,
}) {
  const [pwdDescription, setPwdDescription] = useState("");
  const [emailDescription, setEmailDescription] = useState("");

  const { email, password, deactivateAccount } = userData[0].account;

  const [deactivation, setDeactivation] = useState(deactivateAccount);

  const [newEmail, setNewEmail] = useState("");
  const [VerifyEmail, setVerifyEmail] = useState(false);
  const [emailNotice, setEmailNotice] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [VerifyPwd, setVerifyPwd] = useState(false);
  const [pwdNotice, setPwdNotice] = useState(false);

  const [error, setError] = useState({
    emailErr: "",
    passErr: "",
  });

  const [activateSave, setActivateSave] = useState(false);

  useEffect(() => {}, []);

  // validating email inputs

  function handleEmail(text) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (text === "Check" && newEmail === email) {
      setNewEmail("");
      setVerifyEmail(true);
      setEmailNotice(true);

      setError((prevErr) => ({
        ...prevErr,
        emailErr: "",
      }));
    } else if (text === "Check" && newEmail !== email && !emailNotice) {
      setError((prevErr) => ({
        ...prevErr,
        emailErr: "Sorry, Email does not match!",
      }));
    }

    if (text === "Check" || text === "Done") {
      if (emailNotice && !emailRegex.test(newEmail)) {
        setError((prevErr) => ({
          ...prevErr,
          emailErr: "Please make sure you enter a valid email",
        }));
      } else if (text === "Done" && emailRegex.test(newEmail)) {
        setVerifyEmail(false);
        setEmailNotice(false);

        setError((prevErr) => ({
          ...prevErr,
          emailErr: "",
        }));
      }
    }
  }

  //validating password inputs

  function handlePassword(text) {
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

    if (text === "Verify" && newPassword === password) {
      setNewPassword("");
      setVerifyPwd(true);
      setPwdNotice(true);

      setError((prevErr) => ({
        ...prevErr,
        passErr: "",
      }));
    } else if (text === "Verify" && newPassword !== password && !pwdNotice) {
      setError((prevErr) => ({
        ...prevErr,
        passErr: "Sorry, Password does not match!",
      }));
    }

    if (text === "Verify" || text === "Done") {
      if (pwdNotice && !passRegex.test(newPassword)) {
        setError((prevErr) => ({
          ...prevErr,
          passErr:
            "Password should be 6 to 15 characters and must contain at least 1 Uppercase and Lowercase letter",
        }));
      } else if (text === "Done" && passRegex.test(newPassword)) {
        setVerifyPwd(false);
        setPwdNotice(false);

        setError((prevErr) => ({
          ...prevErr,
          passErr: "",
        }));
      }
    }
  }

  //toggling switch

  function handleSwitch(key) {
    key === "Deactivate" && setDeactivation((prev) => !prev);
  }

  useEffect(() => {
    function handleDescription() {
      let pwdDescription;
      let emailDescription;

      if (activeEdit !== "Reset" && activeEdit !== "Verify" && !VerifyPwd) {
        pwdDescription = "Change your password or Create a new password";
      } else if (!VerifyPwd) {
        pwdDescription = "Please enter previous password used.";
      } else if (VerifyPwd) {
        pwdDescription = "Set a new password.";
      }

      if (activeEdit !== "Update" && activeEdit !== "Check" && !VerifyEmail) {
        emailDescription = "Change and update your email address";
      } else if (!VerifyEmail) {
        emailDescription = " Please enter previous email address used.";
      } else if (VerifyEmail) {
        emailDescription = " Enter a new email address.";
      }

      setPwdDescription(pwdDescription);
      setEmailDescription(emailDescription);
    }

    handleDescription();
  }, [activeEdit, VerifyPwd, VerifyEmail]);

  //setting activate save
  useEffect(() => {
    activeEdit === "Done"
      ? setActivateSave(true)
      : activeEdit === ""
      ? setActivateSave(true)
      : setActivateSave(false);
  }, [activeEdit]);

  //handle save
  function handleSave(btn) {
    let xPwd = newPassword ? newPassword : password;
    let xEmail = newEmail ? newEmail : email;
    let x = {
      ...userData[0].account,
      email: xEmail,
      password: xPwd,
      deactivateAccount: deactivation,
    };

    if (btn === "save") {
      console.log((userData[0].account = x));
      handleModal("save");
    } else {
      setNewEmail("");
      setNewPassword("");
      setDeactivation(deactivateAccount);
      handleActiveEdit(activeEdit, "Done");
      setVerifyEmail(false);
      setVerifyPwd(false);
      console.log(userData[0].account);
    }
  }

  return (
    <form className="--content-container" onSubmit={(e) => e.preventDefault()}>
      {/* password section */}

      <section className="--set_sections-container">
        <div className="--set_sections-title-rapper">
          <h2 className="--set_sections-title">Reset Password</h2>
          <EditBtn
            btnText={
              activeEdit === "Reset"
                ? "Verify"
                : activeEdit === "Verify"
                ? VerifyPwd
                  ? "Done"
                  : "Verify"
                : !VerifyPwd
                ? "Reset"
                : "Done"
            }
            section="reset-password"
            handleActiveEdit={handleActiveEdit}
            handlePassword={handlePassword}
          />
        </div>

        <p className="--set_note-text">
          <i className="fa-solid fa-angles-right --points"></i>
          {pwdDescription}
        </p>

        {activeEdit !== "Reset" && activeEdit !== "Verify" && !VerifyPwd && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Password :{newPassword ? newPassword : "**********"}
          </p>
        )}

        {activeEdit === "Verify" || activeEdit === "Reset" || VerifyPwd ? (
          <label className="--set-label bold-text" htmlFor="set-password">
            Password:
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              className="--set-input-field"
              type="password"
              id="set-password"
              placeholder="Enter password"
              value={newPassword}
            />
            <p className="--error-text">{error.passErr}</p>
          </label>
        ) : null}
      </section>

      {/* email section */}

      <section className="--set_sections-container">
        <div className="--set_sections-title-rapper">
          <h2 className="--set_sections-title">Update Email</h2>
          <EditBtn
            btnText={
              activeEdit === "Update"
                ? "Check"
                : activeEdit === "Check"
                ? VerifyEmail
                  ? "Done"
                  : "Check"
                : !VerifyEmail
                ? "Update"
                : "Done"
            }
            section="update-email"
            handleActiveEdit={handleActiveEdit}
            handleEmail={handleEmail}
          />
        </div>

        <p className="--set_note-text">
          <i className="fa-solid fa-angles-right --points"></i>
          {emailDescription}
        </p>

        {activeEdit !== "Update" && activeEdit !== "Check" && !VerifyEmail && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Email: {newEmail ? newEmail : "*********@gmail.com"}
          </p>
        )}

        {activeEdit === "Check" || activeEdit === "Update" || VerifyEmail ? (
          <label className="--set-label bold-text" htmlFor="set-password">
            email:
            <input
              onChange={(e) => setNewEmail(e.target.value)}
              className="--set-input-field"
              type="email"
              id="set-password"
              placeholder="Enter email"
              value={newEmail}
            />
            <p className="--error-text">{error.emailErr}</p>
          </label>
        ) : null}
      </section>

      {/*account deactivation section */}

      <section className="--set_sections-container">
        <h2 className="--set_sections-title">Account Deactivation</h2>
        <p className="--set_note-text">
          <i className="fa-solid fa-angles-right --points"></i>
          This will remove your profile from the community.
        </p>
        <p className="--set_note-text">
          <i className="fa-solid fa-angles-right --points"></i>
          You will automatically be removed from any public listings and any
          open jobs.
        </p>

        {/* switch */}

        <SwitchBtn
          switchText="Deactivate"
          handleSwitch={handleSwitch}
          toggleSwitch={deactivation}
        />
      </section>

      {/* button section  */}

      <section className="--setting_btn-container">
        <button
          onClick={() => resetDiscard(() => handleSave)}
          className="--discard-btn bold-text --cancel-btn"
        >
          Discard
        </button>
        <button
          style={{
            backgroundColor: !activateSave && "#bbbb",
          }}
          disabled={!activateSave && true}
          onClick={() => handleSave("save")}
          className="--save-btn  bold-text --yes-btn"
        >
          Save
        </button>
      </section>
    </form>
  );
}

export default EmailAndPassword;
