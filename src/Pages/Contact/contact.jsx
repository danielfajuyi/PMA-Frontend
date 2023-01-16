import React from "react";
import ContactContainer from "./Contact-Component/Contact-Container/ContactContainer";
import ContactHeader from "./Contact-Component/Contact-Header/ContactHeader";
import contactbg from "../../Images/contact/contact.png"
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section
        className="contact"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <ContactHeader />
        <ContactContainer />
      </section>
    </>
  );
};

export default Contact;
