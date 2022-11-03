import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./news.css";
import { LatestNews } from "../../data";
const News = () => {
  return (
    <>
      <section className="container news-container">
        <div className="news-heading">
          <SectionHead />
        </div>
        <div className="news-wrapper-container">
          {LatestNews.map(
            ({ id, img, featured, title, date, desc, button }, index) => {
              return (
                <>
                  <div className="news-wrapper">
                    <div className="news-box">
                      <img src={img} alt="" />

                      <div className="news-text">
                        <h2 className="category">{featured}</h2>
                        <a href="#" className="news-title">
                          {title}
                        </a>

                        <span className="news-date">{date}</span>
                        <p className="news-description">{desc}</p>
                        <a href="#" className="news-btn">
                          {button}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default News;
