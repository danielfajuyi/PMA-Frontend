import React from "react";
import ContactContainer from "../../Components/Contact-Component/Contact-Container/ContactContainer";
import ContactHeader from "../../Components/Contact-Component/Contact-Header/ContactHeader";
import Line from "../../Components/Line/line";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Line />
      <section className="contact">
        <ContactHeader />
        <ContactContainer />
      </section>
    </>
  );
};

export default Contact;
