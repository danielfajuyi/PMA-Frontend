import React from "react";
import { Link } from "react-router-dom";
import SectionHead from "../../Components/SectionHead/sectionhead";

const NotFound = () => {
  return (
    // Temporary Styles
    <div
      className="notfound"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SectionHead title="Sorry this page is notfound" />
      <img src="./assets/empty.gif" alt="" />

      <Link to="/" className="btn_shadow">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
