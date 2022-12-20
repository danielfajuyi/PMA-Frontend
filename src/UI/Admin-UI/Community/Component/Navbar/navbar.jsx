import React from "react";
import "./navbar.scss";

import {
  EmailOutlined,
  HomeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
// import { WbSunnyOutlined } from "@mui/icons-material";
import { GridViewOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="communityNavbar  ">
        <div className="container communityContainer">
          <div className="left">
            <Link to="/community">
              <span>Premiem</span>
              <span>model</span>
            </Link>
            <HomeOutlined />
            <DarkModeOutlined />
            <GridViewOutlined />
            <div className="search">
              <SearchOutlined />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="right">
            <PersonOutlined />
            <EmailOutlined />
            <NotificationsOutlined />
            <div className="user">
              <img
                src="./images/community/profile-picture.png"
                alt="profilepicture"
              />
              <h3>Evelyne</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
