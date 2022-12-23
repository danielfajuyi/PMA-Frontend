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
    autoplay: false,
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
          <div className="slidercard-image overlay-2">
            <img
              src="./images/team/teamslider/team1.jpg"
              alt="team1"
              className="slider-img"
            />
            <div className="featured-model-text slider-overlay">
              <h2>
                Stella <br />
                Chukwuemeka
              </h2>
            </div>
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
              Stella Chukwuemeka
              <span className="sliderjob-title">Graphic Designer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/teamslider/team2.jpg" alt="team2" />
            <div className="featured-model-text slider-overlay">
              <h2>
                Folakemi
                <br /> Daniels
              </h2>
            </div>
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
              Folakemi Daniels
              <span className="sliderjob-title">UI/UX Designer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/teamslider/team3.jpg" alt="team3" />

            <div className="featured-model-text slider-overlay">
              <h2>
                Issabella
                <br />
                Moner
              </h2>
            </div>
          </div>
          <ul className="slidersocial-icons">
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
              Issabella Moner <span className="sliderjob-title">Model</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/teamslider/team4.jpg" alt="team4" />
            <div className="featured-model-text slider-overlay">
              <h2>
                Omotola <br />
                Adeleke
              </h2>
            </div>
          </div>
          <ul className="slidersocial-icons">
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
              Omotola Adeleke
              <span className="sliderjob-title">Brand Ambassador</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/teamslider/team5.jpg" alt="team5" />
            <div className="featured-model-text slider-overlay">
              <h2>
                James
                <br />
                Handerson
              </h2>
            </div>
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
              James Handerson
              <span className="sliderjob-title">Web Developer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="slidercard-wrapper">
        <div className="slidercard">
          <div className="slidercard-image">
            <img src="./images/team/teamslider/team6.jpg" alt="team6" />

            <div className="featured-model-text slider-overlay">
              <h2>
                Chioma
                <br />
                Williams
              </h2>
            </div>
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
              Chioma Willams
              <span className="sliderjob-title">Chioma Willams </span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
