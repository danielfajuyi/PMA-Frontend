import React from "react";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <>
      <div className="communityRightbar ">
        <div className="communityContainer">
          <div className="section-right">
            <div className="item">
              <span>Suggestions For you</span>
              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>John Deo</span>
                </div>

                <div className="buttons">
                  <button>follow</button>
                </div>
              </div>

              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>John Deo</span>
                </div>

                <div className="buttons">
                  <button>follow</button>
                </div>
              </div>

              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>John Deo</span>
                </div>

                <div className="buttons">
                  <button>follow</button>
                </div>
              </div>
            </div>

            <div className="item">
              <span>Followers list</span>
              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>David Ben</span>
                </div>

                <div className="buttons">
                  <button>following</button>
                </div>
              </div>

              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>Adamaka Anderson</span>
                </div>

                <div className="buttons">
                  <button>following</button>
                </div>
              </div>

              <div className="user">
                <div className="userInfo">
                  <img
                    src=" ./images/community/top-profile/profile2.png"
                    alt="profile2"
                  />
                  <span>Charles Henry</span>
                </div>

                <div className="buttons">
                  <button>following</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
