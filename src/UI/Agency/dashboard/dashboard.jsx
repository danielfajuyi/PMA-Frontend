import "./dashboard.scss";

import { IoListOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineContactPhone,
  MdOutlineDashboard,
  MdOutlineLiveHelp,
  MdOutlineReviews,
  MdEdit,
} from "react-icons/md";

import { HiOutlineUserGroup } from "react-icons/hi";
import { RiMessage2Fill, RiUserSearchLine } from "react-icons/ri";
import { BiLogOut, BiWallet } from "react-icons/bi";

import DashboardSidebar from "../../../Components/Dashboard/Sidebar/sidebar";
import DashboardTopbar from "../../../Components/Dashboard/Topbar/topbar";
import TopModelHighlight from "../../../Components/Dashboard/Top-Model-Highlight/top_model_highlight";
import MessagePreviewCard from "../../../Components/Dashboard/Message-Preview-Card/message_preview_card";
// Images
import coverImg from "../../../Images/model/model-large.jpg";

import JobCard from "../../../Components/Dashboard/Job-Card/job_card";
import ModelCard from "../../../Components/ModelCard/model_card.jsx";
import BlogPreviewCard from "../../../Components/Dashboard/Blog-Preview-Card/blog_preview_card";
import BookingsCard from "../../../Components/Dashboard/Bookings-Card/bookings_card";
import _ from "lodash";
import VisitorStats from "../../../Components/Dashboard/Visitor-Stats/visitor_stats";
import useMediaQuery from "../../../custom_hooks/useMediaQuery";
import { useState } from "react";
import Background from "../../../Components/Dashboard/Background/background";
import { motion } from "framer-motion";

const topList = [
  { name: "Dashboard", icon: <MdOutlineDashboard /> },
  { name: "My Wallet", icon: <BiWallet /> },
  { name: "Listing", icon: <IoListOutline /> },
  { name: "Find Models", icon: <RiUserSearchLine /> },
  { name: "Reviews", icon: <MdOutlineReviews /> },
  { name: "Community", icon: <HiOutlineUserGroup /> },
  { name: "Settings", icon: <IoSettingsOutline /> },
];
const bottomList = [
  { name: "Help", icon: <MdOutlineLiveHelp /> },
  { name: "Contact us", icon: <MdOutlineContactPhone /> },
  { name: "Log out", icon: <BiLogOut /> },
];

const button = (
  <motion.div whileTap={{ scale: 0.94 }}>
    <button id="nav_button">Promote Model</button>
  </motion.div>
);

const AgencyDashboard = ({ displayNav }) => {
  //
  displayNav(false);

  const data = {
    labels: ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        backgroundColor: "royalblue",
        data: [1200, 1700, 1000, 1200, 1000, 1000, 1700],
        barPercentage: 0.2,
        borderRadius: 4,
      },
      {
        backgroundColor: "lightgray",
        data: [600, 800, 500, 600, 500, 600, 800],
        barPercentage: 0.2,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMax: 1800,
      },
    },
    maintainAspectRatio: false,
  };

  const lineData1 = {
    labels: _.times(30, () => ""),
    datasets: [
      {
        data: _.times(30, () => _.random(900, 1800)),
        borderRadius: 4,
        pointRadius: 0,
        fill: "start",
        borderColor: "royalblue",
        backgroundColor: "#4169e130",
      },
    ],
  };
  const lineData2 = {
    labels: _.times(30, () => ""),
    datasets: [
      {
        data: _.times(30, () => _.random(900, 1700)),
        borderRadius: 4,
        pointRadius: 0,
        fill: "start",
        borderColor: "lightgreen",
        backgroundColor: "#90ee9090",
      },
    ],
  };
  const lineData3 = {
    labels: _.times(30, () => ""),
    datasets: [
      {
        data: _.times(30, () => _.random(1000, 1800)),
        borderRadius: 4,
        pointRadius: 0,
        fill: "start",
        borderColor: "hotpink",
        backgroundColor: "#ff69b430",
      },
    ],
  };
  const lineOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: { display: false },
      y: {
        suggestedMin: -1500,
        display: false,
      },
    },
    tension: 0.4,
  };

  //   COMOPNENT STATES
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const mQ = useMediaQuery("(min-width: 1050px)");

  return (
    <div id="agency_dashboard">
      {mQ ? (
        <DashboardSidebar top={topList} bottom={bottomList} />
      ) : sidebarVisibility ? (
        <Background childState={setSidebarVisibility}>
          <DashboardSidebar top={topList} bottom={bottomList} />
        </Background>
      ) : null}
      <main>
        <DashboardTopbar
          lastItem={button}
          sidebarVisibility={sidebarVisibility}
          setSidebarVisibility={setSidebarVisibility}
        />
        <div id="pane">
          <div id="area_one">
            <VisitorStats data={data} options={options} />
            <div id="bookings">
              <BookingsCard
                data={lineData1}
                options={lineOptions}
                type="All Bookings"
                total="16"
                percent="87.34%"
              />
              <BookingsCard
                data={lineData2}
                options={lineOptions}
                type="Completed"
                total="11"
                percent="48%"
              />
              <BookingsCard
                data={lineData3}
                options={lineOptions}
                type="Cancelled"
                total="5"
                percent="17%"
              />
            </div>
          </div>

          <div id="profile_panel">
            <div id="cover">
              <img src={coverImg} alt="cover-pic" />
            </div>
            <div id="profile">
              <div id="img_holder">
                <img src="./images/jobs/job2.jpg" alt="profile-pic" />
              </div>
              <div>
                <div id="name">Hello, {"XMY Agency"}</div>
                <div id="handle">{"@xyagency"}</div>
              </div>
              <button>
                <MdEdit size={14} />
                <span>Edit Portfolio</span>
              </button>
            </div>
            <div id="follow">
              <span>Following {772}</span>
              <span>Followers {772}</span>
            </div>
            <div id="top_models">
              <TopModelHighlight
                img="./images/jobs/job2.jpg"
                name="Emilly Okoro"
                views="13.6k"
              />
              <TopModelHighlight
                img="./images/jobs/job2.jpg"
                name="Ikegwuru Ndiuwa"
                views="12.4k"
              />
            </div>
          </div>
          <div id="area_two">
            <div id="latest_offers">
              <header>
                <h4>Latest Job Offer</h4>
                <a href="./seeall">See all</a>
              </header>
              <div id="body">
                <JobCard
                  note="Female model needed for shoot"
                  time="Aug 19, 2022 - 09:53"
                />
                <JobCard
                  note="Female model needed for shoot"
                  time="Aug 19, 2022 - 09:53"
                />
                <JobCard
                  note="Female model needed for shoot"
                  time="Aug 19, 2022 - 09:53"
                />
                <JobCard
                  note="Female model needed for shoot"
                  time="Aug 19, 2022 - 09:53"
                />
                <JobCard
                  note="Female model needed for shoot"
                  time="Aug 19, 2022 - 09:53"
                />
              </div>
            </div>

            <div id="latest_blogs">
              <header>
                <h4>Latest Blog News</h4>
                <a href="./seeall">See all</a>
              </header>
              <div id="body">
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img="./images/jobs/job2.jpg"
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
              </div>
            </div>
          </div>
          <div id="inbox">
            <header>
              <h4>Inbox</h4>
              <span className="msg">
                <div className="notification">{25}</div>
                <RiMessage2Fill size={28} />
                <span>Messages</span>
              </span>
            </header>
            <MessagePreviewCard
              img="./images/jobs/job2.jpg"
              online={true}
              sender="Micheal B"
              title="Project manager"
              msg="see you tomorrow"
              count="5"
            />
            <MessagePreviewCard
              img="./images/jobs/job2.jpg"
              online={false}
              sender="Sarah Jay"
              title="Model"
              msg="I wanna work with you"
              count="2"
            />
            <MessagePreviewCard
              img="./images/jobs/job2.jpg"
              online={true}
              sender="Micheal B"
              title="Project manager"
              msg="see you tomorrow"
            />
            <MessagePreviewCard
              img="./images/jobs/job2.jpg"
              online={false}
              sender="Sarah Jay"
              title="Model"
              msg="I wanna work with you"
              count="5"
            />
          </div>

          <div id="our_models">
            <header>
              <h4>Our Models</h4>
              <a href="./seeall">See all</a>
            </header>
            <div id="body">
              <ModelCard />
              <ModelCard />
              <ModelCard />
              <ModelCard />
              <ModelCard />
              <ModelCard />
              <ModelCard />
              <ModelCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgencyDashboard;
