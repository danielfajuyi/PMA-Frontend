import CountUp from "react-countup";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import SectionHead from "../SectionHead/sectionhead";

import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(false);

  const Count = ({ start, end, duration, delay }) => {
    return (
      <h2>{counter && <CountUp start={start} end={end} duration={duration} delay={delay} />}</h2>
    );
  };

  return (
    <>
      <section className="container counter-container mtop">
        <SectionHead title="Community" description="our premium" />

        <ScrollTrigger
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}></ScrollTrigger>
        <div className="counter-wrapper  b-effect">
          <div className="count box_shadow">
            <Count start={0} end={345} duration={2} delay={0} />
            <h4>Models</h4>
          </div>

          <div className="count  box_shadow">
            <Count start={0} end={445} duration={3} delay={0} />
            <h4>Client</h4>
          </div>

          <div className="count count-3 box_shadow">
            <Count start={0} end={210} duration={4} delay={0} />
            <h4>Agencies</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
