import React from "react";
import Header from "../../../../Components/Header/CommunityHeader/header";
import Leftside from "../../../../Components/Community-LeftSide/Leftside";
import Middleside from "../../../../Components/Community-Middle/Middleside";
import Rightside from "../../../../Components/Community-Rightside/Rightside";
import "./community.css";
const Community = () => {
  return (
    <>
      <section className="community-container">
        <header className="community-header">
          <Header />
        </header>

        <main className="container community-main">
          <Leftside />
          <Middleside />
          <Rightside />
        </main>
      </section>
    </>
  );
};

export default Community;
