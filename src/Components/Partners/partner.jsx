import React from "react";
import "./partner.css";
import { Partners } from "../../data";
import SectionHead from "../SectionHead/sectionhead";

const Partner = () => {
  return (
    <>
      <section className="container partner-container">
        <SectionHead title=" Our Partners" />
        <div className="partner-wrapper">
          {Partners.map(({ id, img }, index) => {
            return (
              <>
                <img src={img} alt="partner-img"></img>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Partner;
