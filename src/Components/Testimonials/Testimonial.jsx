import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./Testimonial.css";
import Slide from "../Slider/Slide";
import Uilarrow from "@iconscout/react-unicons/icons/uil-arrow-left";
import Uilarrowright from "@iconscout/react-unicons/icons/uil-arrow-right";
import TestimonialApi from "./TestimonialApi";

const Testimonial = () => {
  return (
    <>
      <section className="container client-testimonial-container">
        <div className="section">
          <div className="client-heading text-center">
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>

          <div className="client-slide">
            {TestimonialApi.map((value, valueIndex) => {
              return (
                <Slide key={value.id} {...value} valueIndex={valueIndex} />
              );
            })}

            <div className="slide_button">
              <button className="btn-shadow prev_btn">
                <Uilarrow />
              </button>

              <button className="btn-shadow next_btn">
                <Uilarrowright />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
