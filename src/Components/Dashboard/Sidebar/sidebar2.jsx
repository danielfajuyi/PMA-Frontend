import "./sidebar.scss";
import logo from "../../../Images/dashboard/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const DashboardSidebar = (props) => {
  const topList = createLinks(props.top);
  const bottomList = createLinks(props.bottom);

  // STATES
  const [allowClick, setAllowClick] = useState(false);
  const [isChildFocused, setIsChildFocused] = useState(false);

  function createLinks(linkList) {
    const list = linkList.map((item) => {
      const navItem = (
        <li key={item.name} className="nav_link__li">
          <NavLink
            to={
              item.name == "Dashboard"
                ? "./"
                : item.children
                ? "#"
                : "./" + item.name
            }
            className="nav_link"
            end={item.children ? false : true}
            // onFocus={(e) => {
            //   if (!item.children) return;
            //   if (
            //     !e.currentTarget.parentElement.classList.contains(
            //       "show_children"
            //     )
            //   )
            //     e.currentTarget.parentElement.classList.add("show_children");
            //   setAllowClick(false);

            //   if (isChildFocused) {
            //     e.currentTarget.parentElement.classList.toggle("show_children");
            //     setIsChildFocused(false);
            //   }
            // }}
            // onClick={(e) => {
            //   if (!item.children) {
            //     e.currentTarget.parentElement.classList.remove("show_children");
            //     return;
            //   }

            //   if (allowClick) {
            //     e.currentTarget.parentElement.classList.toggle("show_children");
            //   }
            //   setAllowClick(true);
            // }}
            onClick={(e) => {
              const target = e.currentTarget;
              const els =
                e.currentTarget?.parentElement?.parentElement?.childNodes;
              els.forEach((el) => {
                if (el.childNodes[0] !== target)
                  el.childNodes[0].classList.remove("active");
                else el.childNodes[0].classList.add("active");
              });
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
          <ul
            className="sublink_list"
            style={{ marginBottom: item.children ? ".5em" : "0" }}
          >
            {item.children &&
              item.children.map((child, i) => (
                <li key={child} className="sublink">
                  <NavLink
                    to={i == 0 ? "Review/" : "Review/" + child}
                    end={true}
                    // onFocus={(e) => {
                    //   if (!item.children) return;
                    //   setIsChildFocused(true);
                    // }}
                  >
                    {child}
                  </NavLink>
                </li>
              ))}
          </ul>
        </li>
      );

      return navItem;
    });
    return list;
  }

  return (
    <nav id="dashboard_sidebar">
      <div id="logo_holder">
        <img src={logo} alt="Premium Model" />
      </div>
      <ul id="nav_list">
        {topList}
        {bottomList}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
