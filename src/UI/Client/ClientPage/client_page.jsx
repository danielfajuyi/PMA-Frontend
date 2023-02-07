import "./client_page.scss";

// Sidebar Navigation Icons --> [START]
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineContactPhone,
  MdOutlineDashboard,
  MdOutlineLiveHelp,
  MdOutlineReviews,
  MdOutlinePostAdd,
} from "react-icons/md";
import { RiUserSearchLine, RiMessage2Fill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
//[END]

// Components (The Sidebar, Topbar and Background)  --> [START]
import DashboardSidebar from "../../../Components/Dashboard/Sidebar/sidebar";
import DashboardTopbar from "../../../Components/Dashboard/Topbar/topbar";
import Background from "../../../Components/Dashboard/Background/background";
//[END]

// Custom Hooks  --> [START]
import useMediaQuery from "../../../custom_hooks/useMediaQuery";
//[END]

// Other External NPM Packages --> [START]
import _ from "lodash";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router";
//[END]

const ClientPage = ({ showNavbar, setShowNavbar }) => {
  // Using Hooks  --> [START]
  useEffect(() => {
    setShowNavbar(false);
  }, [setShowNavbar]); //--> Hides The Navbar

  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const mQ = useMediaQuery("(min-width: 1050px)");

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.pathname === "/clientpage" || loc.pathname === "/clientpage/") {
      navigate("dashboard");
    }
  }, [loc.pathname, navigate]); // --> Redirecting to the dashboard

  //[END]

  // Array For Composing Sidebar Navigation -> (Sidebar Componet) --> [START]
  const topList = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, path: "dashboard" },
    { name: "Profile", icon: <CgUserList />, path: "profile" },
    { name: "Post Job", icon: <MdOutlinePostAdd />, path: "postjob" },
    { name: "Find Models", icon: <RiUserSearchLine />, path: "findmodels" },
    {
      name: "Review",
      icon: <MdOutlineReviews />,
      children: [
        { name: "Write Review", path: "review/writereview" },
        { name: "Reviews", path: "review/reviews" },
        { name: "Report", path: "review/report" },
      ],
    },
    { name: "Settings", icon: <IoSettingsOutline />, path: "settings" },
  ];

  const bottomList = [
    { name: "Help", icon: <MdOutlineLiveHelp />, path: "help" },
    { name: "Contact us", icon: <MdOutlineContactPhone />, path: "contactus" },
    { name: "Log out", icon: <BiLogOut />, path: "logout" },
  ];
  //[END]

  // Button Component -> (Topbar Component) --> [START]
  const button = (
    <motion.div whileTap={{ scale: 0.94 }}>
      <button id="nav_button">Post Job</button>
    </motion.div>
  );
  //[END]

  return (
    !showNavbar && (
      <div id="client_page">
        {/* Client Page Sidebar Navigation --> [START] */}
        {mQ ? (
          <DashboardSidebar top={topList} bottom={bottomList} />
        ) : sidebarVisibility ? (
          <Background childState={setSidebarVisibility}>
            <DashboardSidebar top={topList} bottom={bottomList} />
          </Background>
        ) : null}
        {/* [END] */}

        <main>
          {/* Model Page Topbar --> [START] */}
          <DashboardTopbar
            lastItem={button}
            sidebarVisibility={sidebarVisibility}
            setSidebarVisibility={setSidebarVisibility}
          />
          {/* [END] */}

          {/* Render The Current Sidebar Navigation Link --> [START] */}
          <Outlet />
          {/* [END] */}
        </main>
      </div>
    )
  );
};

export default ClientPage;
