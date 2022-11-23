import React from "react";
import SectionHead from "../SectionHead/sectionhead";
import "./news.css";
import { LatestNews } from "../../data";

const News = () => {
  return (
    <>
      <section className="container mainNews-container">
        <SectionHead title=" News" description="Lastest" />
        <div className="mainNews-wrapper-container">
          {LatestNews.map(
            ({ id, img, featured, title, date, desc, button }) => {
              return (
                <div className="mainNews-wrapper" key={id}>
                  <div className="mainNews-box">
                    <img src={img} alt="" />

                    <div className="mainNews-text">
                      <h2 className="mainNewscategory">{featured}</h2>
                      <a href="#" className="mainNews-title">
                        {title}
                      </a>

                      <span className="mainNews-date">{date}</span>
                      <p className="mainNews-description">{desc}</p>
                      <a href="#" className="mainNews-btn">
                        {button}
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default News;
