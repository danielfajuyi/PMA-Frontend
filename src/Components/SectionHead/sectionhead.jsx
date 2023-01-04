import React from "react";
import "./sectionhead.css";
const SectionHead = ({ title, description, className }) => {
  return (
    <>
      <div className={`Section-heading `}>
        <h4>{description}</h4>
        <h1 className={`${className}`}>{title}</h1>
      </div>
    </>
  );
};

export default SectionHead;
