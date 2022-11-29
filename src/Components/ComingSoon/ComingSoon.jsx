import React from "react";
import "./ComingSoon.css";

import SectionHead from "../SectionHead/sectionhead";

const ComingSoon = () => {
  return (
    <>
      <div className="container comingsoon-container mtop">
        <SectionHead
          title="Coming Soon"
          description="Premium models mobile app"
        />
        <section className="comingsoon-wrapper ">
          <div className="c-left">
            <img
              src="./images/home/app.png"
              alt="comingsoon"
              className="box_shadow-2"
            ></img>
          </div>

          <div className="c-right ">
            <p>
              It is easier with our model mobile app download our mobile app and
              access your account with your log in details as the website
              platform
            </p>

            <h3>Stay Tuned!</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComingSoon;
