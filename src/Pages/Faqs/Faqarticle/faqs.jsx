import React from "react";
import Faqsdata from "../Faqdata/faqsdata";
import "./faqs.css";

const FAQS = () => {
  return (
    <>
      <div className="blur-2"></div>
      <div className="blur-2-right"></div>

      <div
        className="blur-2-right"
        style={{ top: "100rem", left: "70%" }}
      ></div>
      <div className="container faq-container">
        <article className="faq-article">
          <h1>Welcome to premium Models</h1>
          <p>
            We are the community that brings together new models, professional
            models, clients, Agencies and other industry experts.
          </p>
          <h3>Any questions?</h3>
          <p>
            Read our FAQ specially compiled to help you. If your question is not
            answered please contact us.
          </p>
        </article>

        <article className="faq-article article-2">
          <h2>How to network within Premim Models</h2>
          <ul>
            <li>Find people</li>
            <li>Leave comments on other model shots</li>
            <li>Email them</li>
            <li>Follow them</li>
            <li>
              Responds to people that leaves comments to you, email you and
              follow you
            </li>
            <li>
              Show your profile, share your unique link to members within the
              community and outside the web
            </li>
          </ul>
        </article>

        <article className="faq-article">
          <h2>How to promote yourself using Premium Models.com</h2>
          <ul>
            <li>Network, network, network</li>
            <li>
              Remember to not be afraid of contacting other members you want to
              work it
            </li>
            <li>
              Share your profile to other websites and members, you can also
              share to your social media
            </li>
            <li>Keep your portfolio updated with the best photos you have</li>
          </ul>
        </article>
        <div
          className="blur-2-right"
          style={{
            left: "0",
            top: "100%",
            zindex: "-9",
            background: "#ccf1f8",
          }}
        ></div>
      </div>

      <Faqsdata />
    </>
  );
};

export default FAQS;
