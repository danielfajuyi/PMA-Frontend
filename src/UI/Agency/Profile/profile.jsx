import "./agency_profile.scss";
import profileImg from "../../../Images/model/model3.jpg";
import { motion } from "framer-motion";

import {
  RiErrorWarningLine,
  RiBriefcase5Line,
  RiStackLine,
  RiGlobalLine,
} from "react-icons/ri";

import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { IoPersonAddOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import SeeModels from "../../../Components/SeeModels/see_models";
import PreviousJobs from "../../../Components/PreviousJobs/previous_jobs";

const ABOUT = (
  <section id="about">
    <div>
      <h2>About Agency</h2>
      <p>
        Fourwall Models was formed in 2020. We accept all kinds of model and
        this is the platform to make your dream of becoming a professional model
        a reality.
      </p>
      <p>
        We deliver the best professional models in all kind of categories and
        our models are the best.
      </p>
    </div>
  </section>
);

const AgencyProfile = () => {
  const [page, setPage] = useState("about");
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <div id="agency_profile">
        <div id="hero">
          <div id="image_holder">
            <img src={profileImg} alt="profile-img" />
          </div>
          <nav id="navbar">
            <span id="left">
              <span
                className={page === "about" ? "active" : ""}
                onClick={() => setPage("about")}
              >
                <RiErrorWarningLine />
                <span>About</span>
              </span>
              <span
                className={page === "see_models" ? "active" : ""}
                onClick={() => setPage("see_models")}
              >
                <RiBriefcase5Line />
                <span>See Models</span>
              </span>
              <span
                className={page === "prev_jobs" ? "active" : ""}
                onClick={() => setPage("prev_jobs")}
              >
                <RiStackLine />
                <span>Previous Jobs</span>
              </span>
            </span>
            <motion.div whileTap={{ scale: 0.95 }}>
              <button className="btn">
                <FaEnvelope />
                <span>Inquiry</span>
              </button>
            </motion.div>
          </nav>
        </div>
        <main>
          <div id="sidebar">
            <header>
              <h1>Fourwall Models</h1>
              <div id="location">
                <FaMapMarkerAlt color="#ff007a" size={16} />
                <span>Lagos, Nigeria</span>
              </div>
              <div id="link">
                <RiGlobalLine size={16} />
                <span>www.fourwallmag.com</span>
              </div>
            </header>
            <div id="follow_container">
              <button className="btn">
                <IoPersonAddOutline />
                <span>Follow</span>
              </button>

              <div id="follow">
                <span>
                  <div>Following</div>
                  <div>106</div>
                </span>
                <div id="line"></div>
                <span>
                  <div>Followers</div>
                  <div>547</div>
                </span>
              </div>
            </div>
            <div id="socials">
              <a href="/social">
                <FaInstagram />
              </a>
              <a href="/social">
                <FaFacebook />
              </a>
              <a href="/social">
                <FaTwitter size={19} />
              </a>
            </div>
          </div>
          <ul id="navbar_body">
            <li
              className={page === "about" ? "active_two" : ""}
              onClick={() => setPage("about")}
            >
              About
            </li>
            <li
              className={page === "see_models" ? "active_two" : ""}
              onClick={() => setPage("see_models")}
            >
              See Models
            </li>
            <li
              className={page === "prev_jobs" ? "active_two" : ""}
              onClick={() => setPage("prev_jobs")}
            >
              Previous Jobs
            </li>
          </ul>
          {page === "about" ? ABOUT : null}
          {page === "see_models" ? <SeeModels /> : null}
          {page === "prev_jobs" ? <PreviousJobs /> : null}
        </main>
      </div>
    </IconContext.Provider>
  );
};

export default AgencyProfile;
