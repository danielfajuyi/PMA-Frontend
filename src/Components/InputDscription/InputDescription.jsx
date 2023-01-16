import React from "react";

import "./input-description.css";

export const InputDescription = ({ text, mgTop }) => {
  return (
    <p className="social-media__links-desc" style={{ marginTop: mgTop }}>
      {text}
    </p>
  );
};
