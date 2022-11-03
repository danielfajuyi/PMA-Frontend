import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./jobpost.css";
import { Jobpostcard } from "../../data";

const Jobpost = () => {
  return (
    <>
      <section className="container jobpost-container">
        <SectionHead title="Recent Job Post" />

        <div className="jobpost-wrapper">
          {Jobpostcard.map(({ img, button, text }, index) => {
            return (
              <>
                <article className="jobpost-card">
                  <img src={img} alt="jobimg" />
                  <div className="jobtext">
                    <button className="jobcard-btn">{button}</button>
                    <h3>{text}</h3>
                  </div>
                </article>
              </>
            );
          })}
        </div>

        <button className="jobpost-btn">Find jobs</button>
      </section>
    </>
  );
};

export default Jobpost;
