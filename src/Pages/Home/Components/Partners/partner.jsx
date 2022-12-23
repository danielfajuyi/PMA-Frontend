import React from "react";
import "./partner.css";
import { Partners } from "./partnersData";
import Slider from "react-slick";
import "../../../../Components/Slider/TeamSlider/Slider.scss";
import "slick-carousel/slick/slick.css";
import Uilarrow from "@iconscout/react-unicons/icons/uil-arrow-left";
import Uilarrowright from "@iconscout/react-unicons/icons/uil-arrow-right";
import { useState } from "react";
import SectionHead from "../../../../Components/SectionHead/sectionhead";

const PartnerSlide = () => {
  const PrevArrow = ({ onClick }) => {
    return (
      <>
        <button className="btn_shadow partnerprev_btn" onClick={onClick}>
          <Uilarrow />
        </button>
      </>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <>
        <button className="btn_shadow partnernext_btn" onClick={onClick}>
          <Uilarrowright />
        </button>
      </>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,

    lazyLoad: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="partner-wrapper ">
        <Slider {...settings}>
          {Partners.map((partner) => {
            return (
              <div
                className={
                  partner.id === ImageIndex ? "pSlide pActiveSlide" : "pSlide"
                }
                key={partner.id}
              >
                <img src={partner.img} alt="partner-img"></img>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

const Partner = () => {
  return (
    <>
      <section className="container partner-container">
        <SectionHead title="Partners" description="our special" />

        <PartnerSlide />
      </section>
    </>
  );
};

export default Partner;
