import React from "react";
import "./ContactHeader.css";
import SectionHead from "../../SectionHead/sectionhead";

const ContactHeader = () => {
  return (
    <>
      <div className="contact-head">
        <SectionHead title="Contact Us" className="contact-title" />
        <p>
          Any question or remarks? just write a message, fill up the form and
          our team will get back to you in 24 hours.
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
