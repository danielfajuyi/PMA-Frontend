import React from "react";
import "./Adverts.css";

const Adverts = () => {
  return (
    <>
      <div className=" container advert-container">
        <h4 className="advert-heading" style={{ textAlign: "center" }}>
          Advertisement
        </h4>
        <div className="advert-wrapper">
          <div className="advert"></div>
          <div className="advert"></div>
          <div className="advert"></div>
        </div>
      </div>
    </>
  );
};

export default Adverts;
