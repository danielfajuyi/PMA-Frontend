import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./client.css";
import { clientTestimonial } from "../../data";

const Client = () => {
  return (
    <>
      <section className="container client-container">
        <SectionHead title="What Our Client Have To Say" />
        <div className="client-slider">
          {clientTestimonial.map(({ image, alt, name, title, desc }, index) => {
            return (
              <>
                <div className="client-slide">
                  <img src={image} alt={alt} />
                  <div className="client-description">
                    <h3>{desc}</h3>
                    <span>{name}</span>
                    <span>{title}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Client;
