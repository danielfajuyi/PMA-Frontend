import "./Models-Acct-Setting.css";
import userData from "../../../user-db.json";
import BasicInfo from "./Basic-Info";
import EmailAndPassword from "./Email-and-password";
import PaymentInfo from "./Payment-info";
import Stats from "./Stats";
import Photos from "./Photos";
import Videos from "./Videos";
import { useState } from "react";

function AcctSetting({ DomItems, handleModal }) {
  const { navList1, navList2 } = DomItems[0];
  const [activeSet, setActiveSet] = useState("basic info");
  const [toggleSetMenu, setToggleSetMenu] = useState(false);
  const [activeEdit, setActiveEdit] = useState("");

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
  return (
    <>
      <div className="set_sections">
        {/* nav section */}

        <section
          style={{ transform: toggleSetMenu && `translateX(${0}%)` }}
          className="Acct-set-menu"
        >
          <div className="set-nav_title">
            <h2>
              Acct-<span className="mobile-nav-text">Settings</span>
            </h2>
            <i className="fa-solid fa-gear"></i>
          </div>

          <nav className="set-nav">
            <i
              className="fa-solid fa-xmark close-set colored-hover"
              onClick={handleToggleSetMenu}
            ></i>
            <ul className="set-nav_list">
              {navList1.map((item) => {
                return (
                  <li
                    key={item}
                    className="set-nav_item colored-hover"
                    onClick={() => handleActiveSet(item)}
                    role="button"
                  >
                    {item === "basic info" ? (
                      <i className="fa-solid fa-address-book"></i>
                    ) : item === "stats" ? (
                      <i className="fa-solid fa-chart-simple"></i>
                    ) : item === "photos" ? (
                      <i className="fa-solid fa-image"></i>
                    ) : (
                      <i className="fa-brands fa-youtube"></i>
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
            <ul className="set-nav_list">
              {navList2.map((item) => {
                return (
                  <li
                    key={item}
                    className="set-nav_item colored-hover"
                    onClick={() => handleActiveSet(item)}
                    role="button"
                  >
                    {item === "email/pass" ? (
                      <i className="fa-solid fa-envelope-circle-check"></i>
                    ) : item === "payment" ? (
                      <i className="fa-solid fa-landmark"></i>
                    ) : (
                      <i className="fa-solid fa-house"></i>
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

        {/* main section */}

        <section className="Acct-set-main">
          {/* settings header */}
          <div className="set_mobile-nav">
            <h2>
              Acct-<span className="mobile-nav-text">Settings</span>
            </h2>
            <i
              className="fa-solid fa-gear colored-hover"
              onClick={handleToggleSetMenu}
            ></i>
          </div>

          {/* Basic info section */}

          {activeSet === "basic info" && (
            <BasicInfo
              DomItems={DomItems}
              handleActiveEdit={handleActiveEdit}
              activeEdit={activeEdit}
              userData={userData}
            />
          )}

          {/* stats section */}

          {activeSet === "stats" && (
            <Stats
              DomItems={DomItems}
              handleActiveEdit={handleActiveEdit}
              activeEdit={activeEdit}
              userData={userData}
              handleModal={handleModal}
            />
          )}

          {/* photo section */}

          {activeSet === "photos" && (
            <Photos userData={userData} handleModal={handleModal} />
          )}

          {/* video section */}

          {activeSet === "videos" && <Videos userData={userData} />}

          {/* email and password section */}

          {activeSet === "email/pass" && (
            <EmailAndPassword
              handleActiveEdit={handleActiveEdit}
              activeEdit={activeEdit}
              userData={userData}
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
