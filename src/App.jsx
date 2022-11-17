import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/find-model";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/CommunityPages/Community/community";
import Magazine from "./UI/Admin-UI/Magazine/magazine";
import FAQS from "./Pages/Faqs/faq";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/jobpost" element={<JobPost />}></Route>
        <Route path="/find-model" element={<FindModel />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/magazine" element={<Magazine />}></Route>

        {/* Other pages */}
        <Route path="/faqs" element={<FAQS />}></Route>
      </Routes>
    </>
  );
}

export default App;
