import React from "react";
import { useNavigate } from "react-router-dom";

import "./agency-signup-btn.css";

export const AgencySignupBtn = ({ content, mgTop, url }) => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(`/${url}`);
  };

  return (
    <button
      className="next-btn"
      onClick={() => handleClick(url)}
      style={{ marginTop: mgTop }}
    >
      {content}
    </button>
  );
};
