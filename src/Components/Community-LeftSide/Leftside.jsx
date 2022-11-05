import React from "react";
import { TopProfiles } from "../../data";
import { RecentlyActive } from "../../data";
import "./Leftside.css";

const Leftside = () => {
  return (
    <>
      <section className="community-left">
        <article className="top-profile">
          <h2>Top Profiles</h2>
          {TopProfiles.map((data, id) => {
            return (
              <>
                <div className="profile-wrapper">
                  <img src={data.avatar} alt="profile-img" />

                  <div className="profile-text">
                    <h3>{data.name}</h3>
                    <span>{data.title}</span>
                  </div>
                </div>
              </>
            );
          })}

          <button className="community-btn leftpost-btn">View More</button>
        </article>

        <article className="recently-active">
          <h2>Recently Active</h2>
          {RecentlyActive.map((data, id) => {
            return (
              <>
                <div className="profile-wrapper">
                  <img src={data.avatar} alt="profile-img" />

                  <div className="profile-text">
                    <h3>{data.name}</h3>
                    <span>{data.title}</span>
                  </div>
                </div>
              </>
            );
          })}

          <button className="community-btn leftpost-btn">View More</button>
        </article>

        <article className="help-box">
          <h3>Help Center</h3>
          <h3>Community Guidelines</h3>
          <h3>Privacy Policy</h3>
        </article>
      </section>
    </>
  );
};

export default Leftside;
