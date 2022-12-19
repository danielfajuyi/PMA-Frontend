import React from "react";

import "./jobpost.css";
import { Jobpostcard2 } from "./jobpostApl";
import CategoryLable from "../../../../Components/CategoryLabel/CategoryLable";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHead from "../../../../Components/SectionHead/sectionhead";

// const ImageSlider = () => {
//   return (
//     <div className="jobpost-wrapper">
//       {Jobpostcard.map(({ id, img, button, text }) => {
//         return (
//           <article className="jobpost-card " key={id}>
//             <div className="jobimg-wrapper">
//               <img src={img} alt="jobimg" />
//             </div>
//             <div className="job-curve"></div>
//             <div className="jobtext">
//               <button className="jobcard-btn">{button}</button>
//               <h3>{text}</h3>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

const Jobpost2 = () => {
  let settings = {
    dots: true,
    infinite: true,

    speed: 400,
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
    <article className="job-container container">
      <Slider {...settings}>
        {Jobpostcard2.map(({ id, img, category, title, price, Star }) => {
          return (
            <div className="job-wrapper">
              <div className="job-card" key={id}>
                <div className="job-content1">
                  <div className="job-content1-img-wrapper">
                    <img src={img} alt="job1"></img>
                  </div>
                  <CategoryLable lable={category} id="featured-lable" />
                </div>

                <div className="job-content2">
                  <div className="job-content-title">
                    <span>{title} </span>
                  </div>

                  <div className="jobratings">
                    <span>
                      <Star />
                      <Star />
                      <Star />
                    </span>
                  </div>

                  <div className="jobprice">
                    <span>{price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Link to="/jobpost" className=" job-btn btn_shadow">
        Find jobs
      </Link>
    </article>
  );
};

const Jobpost = () => {
  return (
    <>
      <section className="container jobpost-container mtop carousel">
        <SectionHead title="Job Post" description="Recent " />

        <Jobpost2 />
        {/* <ImageSlider /> */}
      </section>
    </>
  );
};

export default Jobpost;
