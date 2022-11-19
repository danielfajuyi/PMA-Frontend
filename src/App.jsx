import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/findmodel";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/CommunityPages/Community/community";
import Magazine from "./Pages/Magazine/magazine";
import { AgencySignupOne } from "./Pages/LoginSignup/AgencySignup/AgencySignupOne";
import { AgencySignupTwo } from "./Pages/LoginSignup/AgencySignup/AgencySignupTwo";
import { AgencySignupThree } from "./Pages/LoginSignup/AgencySignup/AgencySignupThree";

const location = window.location.pathname;

const App = () => {
  return (
    <BrowserRouter>
      {location === "/agency/signup" ||
      location === "/agency/signup/two" ||
      location === "/agency/signup/three" ? null : (
        <Navbar />
      )}
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="jobpost" element={<JobPost />}></Route>
        <Route path="findmodel" element={<FindModel />}></Route>
        <Route path="community" element={<Community />}></Route>
        <Route path="blog" element={<Magazine />}></Route>
        <Route path="agency/signup" element={<AgencySignupOne />} />
        <Route path="agency/signup/two" element={<AgencySignupTwo />} />
        <Route path="agency/signup/three" element={<AgencySignupThree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
