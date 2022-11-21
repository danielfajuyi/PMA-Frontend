import React from "react";

import { FaQuoteRight } from "react-icons/fa";

const Slide = ({
  id,
  image,
  design,
  name,
  offcer,
  post,
  desc,
  date,
  valueIndex,
  index,
}) => {
  return (
    <>
      <article className="box d_flex">
        <div className="left box_shadow">
          <div className="">
            <img src={image} alt="" />
          </div>

          <div className="slide-details">
            <span>{design}</span>
            <span>{name}</span>
            <label>{offcer}</label>
          </div>
        </div>

        <div className="slide_right">
          <div className="slide_icon">
            <div className="slide_quota">
              <FaQuoteRight />
            </div>
          </div>

          <div className="slide_content box_shadow mtop">
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Slide;
