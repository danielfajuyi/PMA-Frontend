import React from "react";
import "./Adverts.css";

const Adverts = () => {
  return (
    <>
      <div className=" container advert-container">
        <h3 className="advert-heading"style={{textAlign: "center"}}>Advert</h3>
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
