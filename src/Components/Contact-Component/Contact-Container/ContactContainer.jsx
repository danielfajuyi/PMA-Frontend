import React from "react";
import ContactForm from "../Contact-Form/ContactForm";
import "./ContactContainer.css";
import Phone from "@iconscout/react-unicons/icons/uil-phone-times";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Email from "@iconscout/react-unicons/icons/uil-envelope-edit";
import Location from "@iconscout/react-unicons/icons/uil-location-point";
import { FaWhatsapp } from "react-icons/fa";

const ContactContainer = () => {
  return (
    <>
      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="contact-text">
            <div className="box">
              <div className="icon">
                <Phone />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+2347062445649</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Whatsapp />
              </div>
              <div className="text">
                <h3>Whatsapp</h3>
                <p>+2347062445649</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Email />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>premiummodelsng@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Location />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className=" contact-wrapper">
            <h2>Connect With Us On</h2>
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
                  <Whatsapp />
                </span>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
};

export default ContactContainer;
