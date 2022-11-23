import React from "react";
import "./partner.css";
import { Partners } from "../../data";
import SectionHead from "../SectionHead/sectionhead";

const Partner = () => {
  return (
    <>
      <section className="container partner-container">
        <SectionHead title="Partners" description="our special" />
        <div className="partner-wrapper">
          {Partners.map(({ id, img }) => {
            return <img src={img} key={id} alt="partner-img"></img>;
          })}
        </div>
      </section>
    </>
  );
};

export default Partner;
