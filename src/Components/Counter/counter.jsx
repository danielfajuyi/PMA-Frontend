import CountUp from "countup";
import React, { useState } from "react";
import SectionHead from "../SectionHead/sectionhead";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./counter.css";

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="container counter-container">
        <SectionHead title="Community" description="our premium" />

        <div className="counter-wrapper">
          <div className="counter-row"></div>

          <div className="counter-column">
            <strong data-number="305">
              <CountUp start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span> Models </span>
          </div>

          <div className="counter-column">
            <strong data-number="2343">
              <CountUp start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span> Agencies </span>
          </div>

          <div className="counter-column">
            <strong data-number="450">
              <CountUp start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span> Client</span>
          </div>

          <div className="counter-column">
            <strong data-number="305">
              <CountUp start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="numbers" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span> Agencies </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
