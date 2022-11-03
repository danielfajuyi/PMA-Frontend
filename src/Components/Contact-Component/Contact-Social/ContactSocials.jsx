import React from "react";
import "./ContactSocials.css";

const ContactSocials = ({ id }) => {
  return (
    <>
      <div className="container contact-wrapper">
        <h2 id={id}>Connect With Us On</h2>
        <div className="contact-social">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
          </div>

          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
          </div>

          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>

          <div className="icon whatsapp">
            <div className="tooltip">Whatsapp</div>
            <span>
              <i className="fab fa-whatsapp"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSocials;
