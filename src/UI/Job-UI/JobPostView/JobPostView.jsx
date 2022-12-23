import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaClock, FaAlignLeft } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { Jobs } from "../JobsApI";
import "./JobPostView.scss";
const JobPostView = () => {
  return (
    <>
      <section className="container Jobpostview-container">
        <header className="Jobpost-header">
          <div className="left">
            <h1>Job Post</h1>
            <h2>Modeling Post</h2>

            <div className="left-btn">
              <button className="btn_shadow">
                Gender
                <BsChevronDown />
              </button>

              <button className="btn_shadow">
                Country
                <BsChevronDown />
              </button>

              <button className="btn_shadow">
                City
                <BsChevronDown />
              </button>

              <button className="btn_shadow">
                Payment
                <BsChevronDown />
              </button>
            </div>
          </div>

          <div className="right">
            <button id="post-job">
              <RiCalendarTodoFill />
              Post Job
            </button>

            <button id="recent-job">
              <FaAlignLeft />
              Most Recent
              <BsChevronDown />
            </button>
          </div>
        </header>

        <main className="Jobpost-main  mtop">
          {Jobs.map((jobcards) => {
            const { id, img, title, country, city, duedate, status } = jobcards;

            return (
              <section className="jobcard" key={id}>
                <img src={img} alt="jobpost - premium-models" />
                <div className="jobcard-text">
                  <div className="jobcard-btn">
                    <button>Offline</button>
                    <button>Featured</button>
                  </div>

                  <div className="jobcard-description">
                    <h2>{title}</h2>

                    <div id="location">
                      <MdLocationOn />
                      {city}, {country}
                    </div>
                    <div id="date">
                      <FaClock />
                      Casting ends {duedate}
                    </div>

                    <div id="status">
                      <AiFillDollarCircle />
                      {status}
                    </div>
                  </div>
                  <button>More Details</button>
                </div>
              </section>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default JobPostView;
