import React from "react";
import { RecentlyActive, TopProfiles } from "../../Commuintydata";
import "./leftbar.scss";

const Leftbar = () => {
  return (
    <>
      <div className="communityLeftbar">
        <div className="communityContainer">
          <div className="sectionleft">
            <div className="items" id="topProfile">
              <div className="menu">
                <div className="top">
                  <h2>Top Profiles</h2>
                </div>

                {TopProfiles.map((userprofile, id) => {
                  const { avatar, name, title } = userprofile;
                  return (
                    <div className="user" key={id}>
                      <img src={avatar} alt={name} />
                      <div className="info">
                        <h3>{name}</h3>
                        <span>{title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button>View More</button>
            </div>

            <div className="items" id="recentlyProfile">
              <div className="menu">
                <div className="top">
                  <h2>Recently Active</h2>
                </div>

                {RecentlyActive.map((userprofile, id) => {
                  const { avatar, name, title } = userprofile;
                  return (
                    <div className="user" key={id}>
                      <img src={avatar} alt={name} />
                      <div className="info">
                        <h3>{name}</h3>
                        <span>{title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
