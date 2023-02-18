import "./dashboard.scss";

//  Icons --> [START]
import { MdEdit } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
// [END]

// Components --> [START]
import TopModelHighlight from "../../../../../Components/Dashboard/Top-Model-Highlight/top_model_highlight";
import MessagePreviewCard from "../../../../../Components/Dashboard/Message-Preview-Card/message_preview_card";
import JobCard from "../../../../../Components/Dashboard/Job-Card/job_card";
import ModelCard from "../../../../../Components/ModelCard/model_card.jsx";
import BlogPreviewCard from "../../../../../Components/Dashboard/Blog-Preview-Card/blog_preview_card";
import BookingsCard from "../../../../../Components/Dashboard/Bookings-Card/bookings_card";
import VisitorStats from "../../../../../Components/Dashboard/Visitor-Stats/visitor_stats";
// [END]

// Temporary  Images
import profileImg from "../../../../Images/model-profile/model.png";
import coverImg from "../../../../Images/model/model-large.jpg";

// Other External NPM Packages --> [START]
import _ from "lodash";
import { Chart } from "chart.js/auto"; //Registering Charts ("Do not remove this import")
import FadeIn from "../../../../../Components/FadeIn/fade_in";
// [END]

const AgencyDashboard = () => {
  // Visitor Stats Graph Data -> (VisitorStats Component) --> [STRAT]
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
  //   [END]

  // Bookings Card Line Graph Data -> (BookingsCard Component) --> [STRAT]
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
    maintainAspectRatio: false,
  };
  //[END]

  return (
    <FadeIn>
      <div id="agency_dashboard">
        {/* GRID  --> [START]*/}
        <div id="pane">
          {/* Grid Area 1 --> [START]*/}
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
          {/* Grid Area 1 <-- [END] */}

          {/* PROFILE PANEL --> [START] */}
          <div id="profile_panel">
            <div id="cover">
              <img src={coverImg} alt="cover-pic" />
            </div>
            <div id="profile">
              <div id="img_holder">
                <img src={profileImg} alt="profile-pic" />
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
              <TopModelHighlight img={profileImg} name="Emilly Okoro" views="13.6k" />
              <TopModelHighlight img={profileImg} name="Ikegwuru Ndiuwa" views="12.4k" />
            </div>
          </div>
          {/* PROFILE PANEL <-- [END] */}

          {/* Grid Area 2 --> [START]*/}
          <div id="area_two">
            <div id="latest_offers">
              <header>
                <h4>Latest Job Offer</h4>
                <a href="./seeall">See all</a>
              </header>
              <div id="body">
                <JobCard note="Female model needed for shoot" time="Aug 19, 2022 - 09:53" />
                <JobCard note="Female model needed for shoot" time="Aug 19, 2022 - 09:53" />
                <JobCard note="Female model needed for shoot" time="Aug 19, 2022 - 09:53" />
                <JobCard note="Female model needed for shoot" time="Aug 19, 2022 - 09:53" />
                <JobCard note="Female model needed for shoot" time="Aug 19, 2022 - 09:53" />
              </div>
            </div>

            <div id="latest_blogs">
              <header>
                <h4>Latest Blog News</h4>
                <a href="./seeall">See all</a>
              </header>
              <div id="body">
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
                <BlogPreviewCard
                  img={profileImg}
                  title="Intro to zero waste lifestyle"
                  model="Premium Models"
                  date="26/08/2022"
                />
              </div>
            </div>
          </div>
          {/* Grid Area 2 <-- [END] */}

          {/*Inbox --> [START]  */}
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
              img={profileImg}
              online={true}
              sender="Micheal B"
              title="Project manager"
              msg="see you tomorrow"
              count="5"
            />
            <MessagePreviewCard
              img={profileImg}
              online={false}
              sender="Sarah Jay"
              title="Model"
              msg="I wanna work with you"
              count="2"
            />
            <MessagePreviewCard
              img={profileImg}
              online={true}
              sender="Micheal B"
              title="Project manager"
              msg="see you tomorrow"
            />
            <MessagePreviewCard
              img={profileImg}
              online={false}
              sender="Sarah Jay"
              title="Model"
              msg="I wanna work with you"
              count="5"
            />
          </div>
          {/*Inbox <-- [END]  */}

          {/*Our Models --> [START]  */}
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
          {/*Our Models <-- [END]  */}
        </div>

        {/* [GRID <-- END] */}
      </div>
    </FadeIn>
  );
};

export default AgencyDashboard;
