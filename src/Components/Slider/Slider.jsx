import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UilTwitter from "@iconscout/react-unicons/icons/uil-twitter";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilWhatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,

    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <Slider {...settings}>
      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team5.jpg" className="slider-img" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team9.jpg" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team3.png" />
          </div>
          <ul class="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter className="svg" />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team4.png" />
          </div>
          <ul class="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram className="svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team9.jpg" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/team9.jpg" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="#">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="#">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <UilTwitter />
              </a>
            </li>
          </ul>
          <div className="slider-details">
            <h2>
              Daniel Fajuyi{" "}
              <span className="sliderjob-title">Web developer</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
