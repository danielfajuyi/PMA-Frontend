import React from "react";
import Header from "../../../../Components/Header/CommunityHeader/header";
import Rightside from "../../../../Components/Community-RightSide/Rightside";
import Leftside from "../../../../Components/Community-LeftSide/Leftside";
import "./community.css";
const Community = () => {
  return (
    <>
      <section className="community-container">
        <header className="  community-header">
          <Header />
        </header>
        <main className=" container community-main">
          <Leftside />
          <Rightside />
        </main>
      </section>
    </>
  );
};

export default Community;
