import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  function handleMenu() {
    setToggleMenu((prevToggle) => !prevToggle);
  }

  // setting device size
  function handleResize() {
    setDeviceSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceSize]);

  return (
    <>
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="" />
          </Link>

          <div className="desktop-nav">
            <ul className="desktop-nav__list">
              {links.map(({ name, path }, index) => {
                //using device size to render specific num of items from the array
                if (deviceSize < 920) {
                  return (
                    index <= 3 && (
                      <li key={index}>
                        <NavLink
                          to={path}
                          className={({ isActive }) => (isActive ? "active-nav" : "")}>
                          {name}
                        </NavLink>
                      </li>
                    )
                  );
                } else {
                  return (
                    <li key={index}>
                      <NavLink
                        to={path}
                        className={({ isActive }) => (isActive ? "active-nav" : "")}>
                        {name}
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="desktop-nav__btn">
            <Link to="/login" className="btn btn1">
              Login
            </Link>
            <Link to="/sign-up" className="btn btn2">
              Signup
            </Link>
          </div>

          <FaBars
            style={{ display: toggleMenu && "none" }}
            onClick={handleMenu}
            className="open-menu"
          />
        </div>
      </nav>

      {/* mobile nav */}

      <nav style={{ transform: toggleMenu && `translateX(${0}%)` }} className="mobile-nav">
        <div
          style={{ transform: toggleMenu && `translateX(${0}%)` }}
          className="mobile-nav__container">
          <FaTimes onClick={handleMenu} className="close-menu" />
          <ul className="mobile-nav__list">
            {links.map(({ name, path, id }) => {
              return (
                <li onClick={handleMenu} key={id} className="mobile-nav__item">
                  <NavLink to={path} className={({ isActive }) => (isActive ? "active-nav" : "")}>
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="mobile-nav__btn">
            <Link to="/login" onClick={handleMenu} className="btn btn1">
              Login
            </Link>
            <Link to="/sign-up" onClick={handleMenu} className="btn btn2">
              Sign-up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
