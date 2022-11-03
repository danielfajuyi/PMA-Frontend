import React from "react";
import "./ContactInfo.css";
import ContactText from "../Contact-Text/ContactText";
import ContactSocials from "../Contact-Social/ContactSocials";

const ContactInfo = ({ id }) => {
  return (
    <>
      <div className="contact-info" id={id}>
        <h2>Contact Info</h2>
        <ContactText />
        <ContactSocials />
      </div>
    </>
  );
};

export default ContactInfo;
