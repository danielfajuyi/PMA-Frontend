import React from "react";
import "./sectionhead.css";
const SectionHead = ({ title }) => {
  return (
    <>
      <h2 className="section-heading">{title}</h2>
    </>
  );
};

export default SectionHead;
