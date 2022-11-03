import React from "react";
import "./ContactText.css";

const ContactText = () => {
  return (
    <>
      <div className="contact-text">
        <div className="box">
          <div className="icon">
            <i className="uil uil-phone-times"></i>
          </div>
          <div className="text">
            <h3>Phone</h3>
            <p>+2347062445649</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="uil uil-whatsapp"></i>
          </div>
          <div className="text">
            <h3>Whatsapp</h3>
            <p>+2347062445649</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="uil uil-envelope-edit"></i>
          </div>
          <div className="text">
            <h3>Email</h3>
            <p>premiummodelsng@gmail.com</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="uil uil-location-point"></i>
          </div>
          <div className="text">
            <h3>Address</h3>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactText;
