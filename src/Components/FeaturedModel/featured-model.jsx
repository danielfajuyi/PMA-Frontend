import React from "react";
import "./featured-model.css";
import { featuredmodel1, featuredmodel2 } from "../../data";
import SectionHead from "../SectionHead/sectionhead";

const FeaturedModel = () => {
  return (
    <>
      <div className="container featured-container">
        <SectionHead title="Featured Models" />

        <div className="featured-desc">
          <ul>
            <li className="active">Unique</li>
            <li>Fashion</li>
            <li>Real People</li>
            <li>Fitness</li>
            <li>Talents</li>
          </ul>
        </div>

        <div className="featured-model-slider">
          {featuredmodel1.map(({ name, desc, image, alt }, index) => {
            return (
              <>
                <div>
                  <img src={image} alt={alt} />
                  <div className="featured-text">
                    <span>{name}</span>
                    <span>{desc}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="featured-model-slider">
          {featuredmodel2.map(({ name, desc, image, alt }, index) => {
            return (
              <>
                <div>
                  <img src={image} alt={alt} />
                  <div className="featured-text">
                    <span>{name}</span>
                    <span>{desc}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <button className="featured-model-btn">Find models</button>
      </div>
    </>
  );
};

export default FeaturedModel;
