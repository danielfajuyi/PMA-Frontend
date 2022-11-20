import React from "react";
import { faqs } from "../../../data";
import { useState } from "react";

import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilMinus from "@iconscout/react-unicons/icons/uil-minus";

import "./faqsdata.css";
const Faqsdata = () => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const ClickEvent = () => {
    setIsAnswerShowing((prev) => !prev);
  };
  return (
    <>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>

        <div className="container faqs__container">
          <article className="faqsquestion__wrapper">
            {faqs.map((faq, id) => {
              return (
                <>
                  <article className="faqs-question" onClick={ClickEvent}>
                    <div className="faqs-question-title">
                      <h4>{faq.question}</h4>
                      <button className="faq__icon">
                        {isAnswerShowing ? <UilMinus /> : <UilPlus />}
                      </button>
                    </div>

                    {isAnswerShowing && <p>{faq.answer}</p>}
                  </article>
                </>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Faqsdata;
