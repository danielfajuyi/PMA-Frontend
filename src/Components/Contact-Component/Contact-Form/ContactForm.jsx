import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <section className="contact-form">
        <form action="#" method="POST">
          <h2 className="form-title">Send us a message</h2>
          <div className="form-fields">
            <div className="form-group">
              <input type="text" className="fname" placeholder="First Name" />
            </div>

            <div className="form-group">
              <input type="text" className="fname" placeholder="Last Name" />
            </div>

            <div className="form-group">
              <input type="email" className="email" placeholder="Email" />
            </div>

            <div className="form-group">
              <input type="number" className="phone" placeholder="Phone" />
            </div>

            <div className="form-group">
              <textarea
                name="nmessage"
                id=""
                placeholder="Write your message"
              ></textarea>
            </div>
          </div>
          <input type="submit" value="send message" className="submit-button" />
        </form>
      </section>
    </>
  );
};

export default ContactForm;
