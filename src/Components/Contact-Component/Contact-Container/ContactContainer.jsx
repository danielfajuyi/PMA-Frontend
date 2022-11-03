import React from "react";
import ContactForm from "../Contact-Form/ContactForm";
import ContactInfo from "../Contact-Info/ContactInfo";
import "./ContactContainer.css";

const ContactContainer = () => {
  return (
    <>
      <section className="container">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default ContactContainer;
