import "./dashboard.scss";

import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineRssFeed,
  MdOutlineDashboard,
  MdOutlineReviews,
  MdEdit,
  MdOutlineLiveHelp,
  MdOutlineContactPhone,
} from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

import { RiMessage2Fill } from "react-icons/ri";
import { BiLogOut, BiWallet } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import DashboardSidebar from "../../../Components/Dashboard/Sidebar/sidebar";
import DashboardTopbar from "../../../Components/Dashboard/Topbar/topbar";
import BookingsCard from "../../../Components/Dashboard/Bookings-Card/bookings_card";
import MessagePreviewCard from "../../../Components/Dashboard/Message-Preview-Card/message_preview_card";
import JobCard from "../../../Components/Dashboard/Job-Card/job_card";
import _ from "lodash";
import ClientCard from "../../../Components/Dashboard/Client-Card/client_card";
import EarningCard from "../../../Components/Dashboard/Earning-Card/earning_card";
import VisitorStats from "../../../Components/Dashboard/Visitor-Stats/visitor_stats";

import useMediaQuery from "../../../custom_hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";
import Background from "../../../Components/Dashboard/Background/background";

const ModelDashboard = ({ displayNav }) => {
  displayNav(false);
  const topList = [
    { name: "Dashboard", icon: <MdOutlineDashboard /> },
    { name: "Profile", icon: <CgUserList /> },
    { name: "My Wallet", icon: <BiWallet /> },
    { name: "Reviews", icon: <MdOutlineReviews /> },
    { name: "Subscription", icon: <MdOutlineRssFeed /> },
    { name: "Community", icon: <HiOutlineUserGroup /> },
    { name: "Settings", icon: <IoSettingsOutline /> },
  ];
  const bottomList = [
    { name: "Help", icon: <MdOutlineLiveHelp /> },
    { name: "Contact us", icon: <MdOutlineContactPhone /> },
    { name: "Log out", icon: <BiLogOut /> },
  ];

  const button = (
    <motion.button whileTap={{ scale: 0.96 }} id="nav_button">
      Promote Portfolio
    </motion.button>
  );

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
    <div id="model_dashboard">
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
            <div className="profile">
              <div className="head">
                <div className="profile_img">
                  <img src="./images/jobs/job2.jpg" alt="model-img" />
                </div>
                <span className="edit">
                  <MdEdit size={16} />
                </span>
              </div>
              <div className="body">
                <h3 className="name">SONIA ERIC</h3>
                <div className="model">Model</div>
                <div className="edit_holder">
                  Edit
                  <span className="edit">
                    <MdEdit size={12} />
                  </span>
                </div>
                <label htmlFor="email">Email</label>
                <div id="email">abazu@gmail.com</div>
                <label htmlFor="gender">Gender</label>
                <div id="gender">Female</div>
                <label htmlFor="bio">Model Bio</label>
                <div id="bio"> A little about myself</div>
              </div>
            </div>
            <div id="latest_post">
              <header>
                <h4>Latest Blog Post</h4>
                <a href="./seeall"> See all</a>
              </header>
              <div id="body">
                <ClientCard
                  img="./images/jobs/job2.jpg"
                  post="How to become a model"
                />
                <ClientCard
                  img="./images/jobs/job2.jpg"
                  post="How to become a model"
                />
                <ClientCard
                  img="./images/jobs/job2.jpg"
                  post="How to become a model"
                />
                <ClientCard
                  img="./images/jobs/job2.jpg"
                  post="How to become a model"
                />
              </div>
            </div>
          </div>
          <div id="area_two">
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
            <div className="earnings">
              <EarningCard type="total" amount={"#28,000"} />
              <EarningCard type="pending" amount={"#19,000"} />
              <EarningCard type="withdraw" amount={"#68,200"} />
              <EarningCard type="available" amount={"#108,000"} />
            </div>
            <VisitorStats data={data} options={options} />
            <div className="top_rated one">
              <header>
                <h4>Top Rated</h4>
                <a href="./seeall">See all</a>
              </header>
              <div className="body">
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
              </div>
            </div>
          </div>
          <div id="area_three">
            <div className="top_rated two">
              <header>
                <h4>Top Rated</h4>
                <a href="./seeall">See all</a>
              </header>
              <div className="body">
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src="./images/jobs/job2.jpg" alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
              </div>
            </div>
            <div id="job_posted">
              <header>
                <h4>Latest Job Posts</h4>
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
              </div>
            </div>
            <div id="inbox">
              <header>
                <h4>Inbox</h4>
                <span className="msg">
                  <div className="notification">25</div>
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
                online={true}
                sender="Micheal B"
                title="Project manager"
                msg="see you tomorrow"
                count="10"
              />
              <MessagePreviewCard
                img="./images/jobs/job2.jpg"
                online={false}
                sender="Sarah Jay"
                title="Model"
                msg="I wanna work with you"
                count="2"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelDashboard;
