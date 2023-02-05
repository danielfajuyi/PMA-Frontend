import "./dashboard.scss";

//  Icons --> [START]
import { MdEdit } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
//[END]

// Components --> [START]
import BookingsCard from "../../../../Components/Dashboard/Bookings-Card/bookings_card";
import MessagePreviewCard from "../../../../Components/Dashboard/Message-Preview-Card/message_preview_card";
import JobCard from "../../../../Components/Dashboard/Job-Card/job_card";
import ClientCard from "../../../../Components/Dashboard/Client-Card/client_card";
import EarningCard from "../../../../Components/Dashboard/Earning-Card/earning_card";
import VisitorStats from "../../../../Components/Dashboard/Visitor-Stats/visitor_stats";
//[END]

// Temporary Profile Image
import profileImg from "../../../../Images/model-profile/model.png";

// Other External NPM Packages --> [START]
import { Chart } from "chart.js/auto"; //Registering Charts ("Do not remove this import")
import _ from "lodash";
import FadeIn from "../../../../Components/FadeIn/fade_in";
//[END]

const ModelDashboard = () => {
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
  //[END]

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
      <div id="model_dashboard">
        {/* GRID  --> [START]*/}
        <div id="pane">
          {/* Grid Area 1 */}
          <div id="area_one">
            <div className="profile">
              <div className="head">
                <div className="profile_img">
                  <img src={profileImg} alt="model-img" />
                </div>
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
                <ClientCard img={profileImg} post="How to become a model" />
                <ClientCard img={profileImg} post="How to become a model" />
                <ClientCard img={profileImg} post="How to become a model" />
                <ClientCard img={profileImg} post="How to become a model" />
              </div>
            </div>
          </div>
          {/* [END] */}
          {/* Grid Area 2 */}
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
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
              </div>
            </div>
          </div>
          {/* [END] */}
          {/* Grid Area 3  --> [START] */}
          <div id="area_three">
            <div className="top_rated two">
              <header>
                <h4>Top Rated</h4>
                <a href="./seeall">See all</a>
              </header>
              <div className="body">
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
                  </div>
                  <div className="name">Eke Kara</div>
                </div>
                <div>
                  <div className="img_holder">
                    <img src={profileImg} alt="model-img" />
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
                img={profileImg}
                online={true}
                sender="Micheal B"
                title="Project manager"
                msg="see you tomorrow"
                count="5"
              />
              <MessagePreviewCard
                img={profileImg}
                online={true}
                sender="Micheal B"
                title="Project manager"
                msg="see you tomorrow"
                count="10"
              />
              <MessagePreviewCard
                img={profileImg}
                online={false}
                sender="Sarah Jay"
                title="Model"
                msg="I wanna work with you"
                count="2"
              />
            </div>
          </div>
          {/* [END] */}
        </div>
        {/* [GRID <-- END] */}
      </div>
    </FadeIn>
  );
};

export default ModelDashboard;
