import React, { useEffect, useState } from "react";

import "./Testimonial.css";
import Slide from "../../../../Components/Slider/TestimonialSlider/Slide";
import Uilarrow from "@iconscout/react-unicons/icons/uil-arrow-left";
import Uilarrowright from "@iconscout/react-unicons/icons/uil-arrow-right";
import TestimonialApi from "./TestimonialApi";
import SectionHead from "../../../../Components/SectionHead/sectionhead";

const Testimonial = () => {
  const [data] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    // console.log(lastIndex);
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  //console.log(index);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <section className="Testimonial-container">
        <div className="container">
          <div>
            <SectionHead
              title="Testimonial"
              description="WHAT OUR CLIENT SAY"
            />
          </div>

          <div className="Testimonial-wrapper ">
            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}

            <div className="Testimonialslide_btn  ">
              <button
                className="btn_shadow prev_btn testimonial-btn "
                onClick={() => setIndex(index - 1)}
              >
                <Uilarrow />
              </button>

              <button
                className="btn_shadow next_btn testimonial-btn"
                onClick={() => setIndex(index + 1)}
              >
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
