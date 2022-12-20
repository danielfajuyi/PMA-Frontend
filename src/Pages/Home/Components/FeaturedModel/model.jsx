import React from "react";
import "./featured-model.css";

const Models = ({ modelItems }) => {
  return (
    <>
      <div className="featured-model-slider">
        {modelItems.map((models) => {
          const { id, name, image, desc, alt } = models;

          return (
            id <= 8 && (
              <div className="featured-model-item" key={id}>
                <div className="featured-img">
                  <img src={image} alt={alt}></img>

                  <div className="featured-model-text">
                    <h2>{name}</h2>
                    <h4>{desc}</h4>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default Models;
