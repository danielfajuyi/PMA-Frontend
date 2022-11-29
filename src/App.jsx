import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/find-model";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/CommunityPages/Community/community";
import Magazine from "./UI/Admin-UI/Magazine/magazine";
import FAQS from "./Pages/Faqs/Faq";
import Hmodel from "./Pages/HowItWorks/HPages/Hmodel";
import Hclient from "./Pages/HowItWorks/HPages/Hclient";
import Hagency from "./Pages/HowItWorks/HPages/Hagency";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/notfound";
import News from "./Components/News/NewsArtlce/news";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/jobpost" element={<JobPost />}></Route>
        <Route path="/find-model/*" element={<FindModel />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/magazine/" element={<Magazine />}></Route>

        {/* Other pages */}
        <Route path="/faqs" element={<FAQS />}></Route>

        <Route path="/howitworks/model" element={<Hmodel />}></Route>
        <Route path="/howitworks/client" element={<Hclient />}></Route>
        <Route path="/howitworks/agency" element={<Hagency />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        {/* Component */}
        <Route path="/news/:id" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
