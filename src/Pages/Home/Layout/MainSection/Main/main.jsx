import React from "react";
import "./main.css";
import FeaturedModel from "../../../Components/FeaturedModel/featured-model";
import SectionHead from "../../../../../Components/SectionHead/sectionhead";
import Jobpost from "../../../Components/JobPost/jobpost";
import ComingSoon from "../../../Components/ComingSoon/ComingSoon";
import Counter from "../../../../../Components/Counter/counter";
import Partner from "../../../Components/Partners/partner";

import Testimonial from "../../../Components/Testimonials/Testimonial";
import HomeSignup from "../../../Components/SignUpCards/HomeSignup";
import News from "../../../Components/News/NewsArtlce/news";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container signup-container">
        <SectionHead title="Sign Up" description="MODEL AGENCY CLIENT " />
        <div className="signup-wrapper">
          <HomeSignup />
        </div>
      </div>

      <article className="join-model-container mtop">
        <SectionHead title="Community " description="Join Model " />
        <div className="join-model-wrapper overlay">
          <div className="join-model-text">
            Become part of a growing community and connect with other models
            around the world
          </div>

          <div className="join-model-icon">
            <div className="join-model-item" id="item1">
              <FaCheckCircle />
              <span>Connect</span>
            </div>

            <div className="join-model-item" id="item2">
              <FaCheckCircle />
              <span>Interact</span>
            </div>

            <div className="join-model-item" id="item3">
              <FaCheckCircle />
              <span>Engage</span>
            </div>
          </div>

          <Link
            to="/community"
            class="featured-model-btn join-model-btn btn_shadow"
          >
            Join community
          </Link>
        </div>
      </article>

      <FeaturedModel />
      <Jobpost />
      <Counter />
      <ComingSoon />
      <Partner />
      <Testimonial />
      <News />
    </>
  );
};

export default Main;
