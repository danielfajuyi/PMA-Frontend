import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./counter.css";

const Counter = () => {
  return (
    <>
      <section className="container counter-container">
        <SectionHead title="Community" />

        <div className="counter-wrapper">
          <div className="count">
            <span className="counter">15,678</span>
            <span>Models</span>
          </div>

          <div className="count">
            <span className="counter">1,678</span>
            <span>Agencies</span>
          </div>

          <div className="count">
            <span className="counter">3,678</span>
            <span>Clients</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
