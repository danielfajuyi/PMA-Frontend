import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/find-model";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/Community/Community";
import Magazine from "./UI/Admin-UI/Magazine/magazine";
import FAQS from "./Pages/Faqs/Faq";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/notfound";
import News from "./Components/News/NewsArtlce/news";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";

import { useState } from "react";

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

        <Route path="/magazine/" element={<Magazine />}></Route>

        {/* Other pages */}
        <Route path="/faqs" element={<FAQS />}></Route>

        <Route path="/howitworks" element={<HowItWorks />}></Route>

        {/* Component */}
        <Route path="/news/:id" element={<News />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
