import React from "react";
import "./faqs.css";
import { useState } from "react";

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

      <section className="faqs">
        <h2>Frequently Asked Questions</h2>

        <div className="container faqs__container">
          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>Do i have to accept all request?</h4>
              <p>
                Absolutely not, you are completely independent. That is to say
                you decide for yourself which request you wish to accept or
                decline.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>How can i get jobs as a model?</h4>
              <p>
                Once you are logged in as a model, you will find a section "job
                post" at the top of the menu, you can always browse and apply
                for available jobs.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>Where will i get Modeling Jobs?</h4>
              <p>
                You decide where you accept a job offer, either in your location
                or internationally.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>Do i have to pay Premium Models when i am booked?</h4>
              <p>
                No, we are not a modeling agency, so you dont pay us any
                commission when booked.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>
                I am an agency-represented model, can i be a newbook model too?
              </h4>
              <p>
                Yes, premium models welcomes both agency and freelance models.
                Our terms are non-exclusive. If you have an agency contract, it
                is your responsibility to make sure that the contract with your
                agency allows you to participate in the premium models
                community.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>How to promote yourself using Premium Models.com</h4>
              <p>
                As a creative designer, there are tons of branches in designing,
                eg. UI/UX design Graphic Design, Product Design, Infographics
                and many more...
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>How to become a model in the premium model app?</h4>
              <p>
                I highly recommend students to start with MS Office package
                course, it's statistically the best computer training course for
                a newbie.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>What is Premium Model and how does it work</h4>
              <p>
                Search engine optimization popularly known as (SEO) is the
                optimization of businesses, brands, webpages, social profile and
                informations to be visible on the search engine. This allows
                potential target audience to locate and interact with your
                business with ease.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>Do i have to pay Premium Models when i am booked?</h4>
              <p>
                All our courses here at
                <a href="index.html">
                  <b>skillsacademy</b>
                </a>
                are totally free for anyone to enrol, the goal is to equip
                quality techstars for the future economy.
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <i className="uil uil-plus"></i>
            </div>
            <div className="question__answer">
              <h4>How to network within Premim Models</h4>
              <p>
                Content marketing is the creation of creative, stunning and
                highend content for a brand or company through blog/article
                writing, social media post etc.
                <a href="index.html">
                  <b>premium models</b>
                </a>
                offers the best content marketing course on the internet
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default FAQS;
