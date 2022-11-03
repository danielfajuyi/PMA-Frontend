import React from "react";
import { TopProfiles } from "../../data";
import "./Leftside.css";

const Leftside = () => {
  return (
    <>
      <section className="community-left">
        <h2>Top Profiles</h2>
        {TopProfiles.map(({ avatar, title, name }, index) => {
          return (
            <>
              <div className="profile-wrapper">
                <img src={avatar} alt="profile-img" />

                <div className="profile-text">
                  <h3>{name}</h3>
                  <span>{title}</span>
                </div>
              </div>
            </>
          );
        })}

        <button>View More</button>
      </section>
    </>
  );
};

export default Leftside;
