import React from "react";
import ContactContainer from "./Contact-Component/Contact-Container/ContactContainer";
import ContactHeader from "./Contact-Component/Contact-Header/ContactHeader";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <ContactHeader />
        <ContactContainer />
      </section>
    </>
  );
};

export default Contact;
