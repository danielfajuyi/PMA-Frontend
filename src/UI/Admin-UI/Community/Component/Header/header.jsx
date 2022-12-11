import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <section className="community-header">
        <div className="community-head">
          <div className=" container header-text">
            <h1>
              Welcome to Model <br></br> Community
            </h1>
            <span>
              Connect , Share and Engage on the Largest Social <br></br>
              Community dedicated to Models
            </span>
            <div className="community-button">
              <button>Learn More</button>
              <button>Activity</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
