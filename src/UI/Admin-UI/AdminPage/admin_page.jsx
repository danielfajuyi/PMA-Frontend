import "./admin_page.scss";

// Sidebar Navigation Icons --> [START]
import { BiMessageEdit, BiLogOut } from "react-icons/bi";
import { IoListOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlinePostAdd,
  MdOutlinePermMedia,
  MdOutlineComment,
  MdOutlineLocalOffer,
  MdOutlineRssFeed,
  MdCardMembership,
  MdOutlineDashboard,
  MdOutlineReviews,
  MdOutlineStyle,
} from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFiles } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { CgUserList } from "react-icons/cg";
//[END]

// Components (The Sidebar, Topbar and Background)  --> [START]
import DashboardSidebar from "../../../Components/Dashboard/Sidebar/sidebar";
import DashboardTopbar from "../../../Components/Dashboard/Topbar/topbar";
import Background from "../../../Components/Dashboard/Background/background";
// [END]

// Custom Hooks  --> [START]
import useMediaQuery from "../../../custom_hooks/useMediaQuery";
//[END]

// Temporary Profile Image
import profileImage from "../../../Images/img/slider3.jpg";

// Other External NPM Packages --> [START]
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
// [END]

const AdminPage = ({ showNavbar, setShowNavbar }) => {
  // Using Hooks  --> [START]
  useEffect(() => {
    setShowNavbar(false);
  }, [setShowNavbar]); //--> Hides The Navbar

  const [sidebarVisibility, setSidebarVisibility] = useState(false); //--> Toggle Sidebar NAvigation
  const mQ = useMediaQuery("(min-width: 1050px)");

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.pathname === "/adminpage" || loc.pathname === "/adminpage/") {
      navigate("dashboard");
    }
  }, [loc.pathname, navigate]); // --> Redirecting to the dashboard
  // Using Hooks <--  [END]
  // Array For Composing Sidebar Navigation -> (Sidebar Componet) --> [START]
  const topList = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, path: "dashboard" },
    { name: "Posts", icon: <MdOutlinePostAdd />, path: "posts" },
    { name: "Media", icon: <MdOutlinePermMedia />, path: "media" },
    { name: "Pages", icon: <BsFiles />, path: "pages" },
    { name: "Comments", icon: <MdOutlineComment />, path: "comments" },
    { name: "Offers", icon: <MdOutlineLocalOffer />, path: "offers" },
    { name: "Listing", icon: <IoListOutline />, path: "listings" },
    { name: "Membership", icon: <MdCardMembership />, path: "membership" },
    { name: "Subscription", icon: <MdOutlineRssFeed />, path: "subscription" },
    { name: "Messages", icon: <BiMessageEdit />, path: "messages" },
    { name: "Profile", icon: <CgUserList />, path: "profile" },
    { name: "Users", icon: <FiUsers />, path: "users" },
    { name: "Appearance", icon: <MdOutlineStyle />, path: "appearance" },
    {
      name: "Review",
      icon: <MdOutlineReviews />,
      children: [
        { name: "Write Review", path: "review/writereview" },
        { name: "Reviews", path: "review/reviews" },
        { name: "Report", path: "review/report" },
      ],
    },
    { name: "Community", icon: <HiOutlineUserGroup />, path: "community" },
    { name: "Settings", icon: <IoSettingsOutline />, path: "settings" },
    { name: "Log out", icon: <BiLogOut />, path: "logout" },
  ];
  //   [END]

  // Image Component -> (Topbar Component) --> [START]
  const image = (
    <div className="profile_image">
      <img src={profileImage} alt="profile-pic" />
    </div>
  );
  //   [END]

  return (
    !showNavbar && (
      <div id="admin_page">
        {/* Admin Page Sidebar Navigation --> [START] */}
        {mQ ? (
          <DashboardSidebar top={topList} bottom={[]} />
        ) : sidebarVisibility ? (
          <Background childState={setSidebarVisibility}>
            <DashboardSidebar top={topList} bottom={[]} />
          </Background>
        ) : null}
        {/* [END] */}

        <main>
          {/* Admin Page Topbar --> [START] */}
          <DashboardTopbar
            lastItem={image}
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

export default AdminPage;
