import "./sidebar.scss";
import logo from "../../../Images/dashboard/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

const DashboardSidebar = (props) => {
  const topList = createLinks(props.top);
  const bottomList = createLinks(props.bottom);

  const ulRef = useRef();
  const loc = useLocation();

  useEffect(() => {
    const els = Array.from(ulRef.current.childNodes);

    els.forEach((el) => {
      if (
        loc.pathname.includes(
          el.childNodes[0].childNodes[1].textContent
            .toLowerCase()
            .trim()
            .split(" ")
            .join("")
        )
      ) {
        el.childNodes[0].classList.add("active");
      } else el.childNodes[0].classList.remove("active");
    });
  }, [loc.pathname]);

  function createLinks(linkList) {
    const list = linkList.map((item) => {
      const navItem = (
        <li key={item.name} className="nav_link__li">
          <NavLink
            to={item.children ? "#" : item.path}
            className="nav_link"
            end={item.children ? false : true}
            onClick={(e) => {
              e.currentTarget.parentElement.classList.toggle("show_children");
              const els = Array.from(ulRef.current.childNodes);
              els.forEach((el) => {
                const link = el.childNodes[0];
                if (
                  e.currentTarget.childNodes[1].textContent ===
                  link.childNodes[1].textContent
                )
                  link.classList.add("active");
                else link.classList.remove("active");
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
              item.children.map((child) => (
                <li
                  key={child.name}
                  className="sublink"
                  onClick={(e) => {
                    e.currentTarget.parentElement.previousElementSibling.classList.add(
                      "active"
                    );
                  }}
                >
                  <NavLink to={child.path} end={true}>
                    {child.name}
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
      <ul id="nav_list" ref={ulRef}>
        {topList}
        {bottomList}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
