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
            <img
              src="./images/team/team5.jpg"
              alt="team1"
              className="slider-img"
            />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="/about">
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
            <img src="./images/team/team9.jpg" alt="team2" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="/about">
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
            <img src="./images/team/team3.png" alt="team3" />
          </div>
          <ul class="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
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
            <img src="./images/team/team4.png" alt="team4" />
          </div>
          <ul class="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram className="svg" />
              </a>
            </li>
            <li>
              <a href="/about">
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
            <img src="./images/team/team9.jpg" alt="team5" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="/about">
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
            <img src="./images/team/team9.jpg" alt="team6" />
          </div>
          <ul className="slidersocial-icons">
            <li>
              <a href="/about">
                <UilFacebook />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="/about">
                <UilInstagram />
              </a>
            </li>
            <li>
              <a href="/about">
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
