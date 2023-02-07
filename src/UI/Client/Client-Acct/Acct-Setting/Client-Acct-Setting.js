import "./Client-Acct-Setting.css";
import About from "./About";
import EmailAndPassword from "./Email-and-password";
import PaymentInfo from "./Payment-info";
import Jobs from "./Jobs";
import DiscardAlert from "./DiscardAlert";
import { useState } from "react";

function AcctSetting({ DomItems, handleModal, userData }) {
  const { navList1, navList2 } = DomItems[0];
  const [activeSet, setActiveSet] = useState("about");
  const [toggleSetMenu, setToggleSetMenu] = useState(false);
  const [activeEdit, setActiveEdit] = useState("");

  const [discardFunc, setDiscardFunc] = useState("");
  const [toggleDiscard, setToggleDiscard] = useState(false);

  function handleActiveSet(set) {
    setActiveSet(set);
    setToggleSetMenu((prevSet) => !prevSet);
  }

  function handleToggleSetMenu() {
    setToggleSetMenu((prevSet) => !prevSet);
  }

  function handleActiveEdit(section, text) {
    text === "Done" ||
    text === "Update" ||
    text === "Check" ||
    text === "Reset" ||
    text === "Verify"
      ? setActiveEdit(text)
      : setActiveEdit(section);
  }

  //discarding changes
  function handleDiscard(response) {
    response === "Yes" && discardFunc();
    setToggleDiscard((prev) => !prev);
  }

  //setting discard alert
  function resetDiscard(fun) {
    setToggleDiscard((prev) => !prev);
    setDiscardFunc(fun);
  }

  return (
    <>
      <div className="--set_sections">
        {/* displaying discard alert */}

        <DiscardAlert
          toggleDiscard={toggleDiscard}
          handleDiscard={handleDiscard}
        />

        {/* nav section */}

        <section
          style={{ transform: toggleSetMenu && `translateX(${0}%)` }}
          className="--Acct-set-menu"
        >
          <div className="--set-nav_title">
            <h2>
              Acct-<span className="--mobile-nav-text">Settings</span>
            </h2>
            <i className="fa-solid fa-gear"></i>
          </div>

          <nav className="--set-nav">
            <i
              className="fa-solid fa-xmark --close-set --colored-hover"
              onClick={handleToggleSetMenu}
            ></i>
            <ul className="--set-nav_list --list-1">
              {navList1.map((item) => {
                return (
                  <li
                    key={item}
                    className="--set-nav_item --colored-hover"
                    onClick={() => handleActiveSet(item)}
                    role="button"
                  >
                    {item === "about" ? (
                      <i className="fa-solid fa-address-book"></i>
                    ) : item === "jobs" ? (
                      <i className="fa-solid fa-image"></i>
                    ) : item === "email/pass" ? (
                      <i className="fa-solid fa-envelope-circle-check"></i>
                    ) : null}
                    {item}
                  </li>
                );
              })}
            </ul>
            <ul className="--set-nav_list">
              {navList2.map((item) => {
                return (
                  <li
                    key={item}
                    className="--set-nav_item --colored-hover"
                    onClick={() => handleActiveSet(item)}
                    role="button"
                  >
                    {item === "payment" ? (
                      <i className="fa-solid fa-landmark"></i>
                    ) : item === "dash board" ? (
                      <i className="fa-solid fa-house"></i>
                    ) : null}
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

        {/* main section */}

        <section className="--Acct-set-main">
          {/* settings header */}
          <div className="--set_mobile-nav">
            <h2>
              Acct-<span className="--mobile-nav-text">Settings</span>
            </h2>
            <i
              className="fa-solid fa-gear --colored-hover"
              onClick={handleToggleSetMenu}
            ></i>
          </div>

          {/* about section */}

          {activeSet === "about" && (
            <About
              DomItems={DomItems}
              handleActiveEdit={handleActiveEdit}
              activeEdit={activeEdit}
              userData={userData}
              handleModal={handleModal}
              resetDiscard={resetDiscard}
            />
          )}

          {/* Jobs photo section */}

          {activeSet === "jobs" && (
            <Jobs
              userData={userData}
              handleModal={handleModal}
              resetDiscard={resetDiscard}
            />
          )}

          {/* email and password section */}

          {activeSet === "email/pass" && (
            <EmailAndPassword
              handleActiveEdit={handleActiveEdit}
              activeEdit={activeEdit}
              userData={userData}
              handleModal={handleModal}
              resetDiscard={resetDiscard}
            />
          )}

          {/* payment info section */}

          {activeSet === "payment" && <PaymentInfo userData={userData} />}
        </section>
      </div>
    </>
  );
}

export default AcctSetting;
