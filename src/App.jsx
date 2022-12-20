import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/find-model";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/Community/Community";
import FAQS from "./Pages/Faqs/Faq";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/notfound";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import Blog from "./UI/Admin-UI/Blog/Blog";
import { AgencySignupOne } from "./Pages/LoginSignup/AgencySignup/AgencySignupOne";
import { AgencySignupTwo } from "./Pages/LoginSignup/AgencySignup/AgencySignupTwo";
import { AgencySignupThree } from "./Pages/LoginSignup/AgencySignup/AgencySignupThree";

// const location = window.location.pathname;
// {
//   location === "/agency/signup" ||
//   location === "/agency/signup/two" ||
//   location === "/agency/signup/three" ? null : (
//     <Navbar />
//   );
// }

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/jobpost" element={<JobPost />}></Route>
        <Route path="/find-model/*" element={<FindModel />}></Route>
        <Route
          path="/community"
          element={<Community displayNav={setShowNav} />}
        ></Route>

        <Route path="/magazine/" element={<Blog />}></Route>

        {/* Other pages */}
        <Route path="/faqs" element={<FAQS />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        {/* Component */}
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="agency/signup"
          element={<AgencySignupOne displayNav={setShowNav} />}
        ></Route>
        <Route
          path="agency/signup/two"
          element={<AgencySignupTwo displayNav={setShowNav} />}
        ></Route>
        <Route
          path="agency/signup/three"
          element={<AgencySignupThree displayNav={setShowNav} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
