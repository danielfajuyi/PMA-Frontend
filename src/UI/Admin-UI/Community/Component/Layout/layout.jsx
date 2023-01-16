import React from "react";
import Navbar from "../Navbar/navbar";
import Leftbar from "../Leftbar/leftbar";
import RightBar from "../Rightbar/rightbar";

import CommunityHome from "../../Home/home";
import "./layout.scss";

const Layout = () => {
  return (
    <section className="communityLayout theme-dark ">
      <Navbar />
      <div
        style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}
        className="container"
      >
        <Leftbar />
        <CommunityHome />
        <RightBar />
      </div>
    </section>
  );
};

export default Layout;
