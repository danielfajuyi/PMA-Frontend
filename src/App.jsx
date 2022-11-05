import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/findmodel";
import JobPost from "./UI/Job-UI/JobPost/jobpost";
import Contact from "./Pages/Contact/contact";
import Community from "./UI/Admin-UI/CommunityPages/Community/community";
import Magazine from "./Pages/Magazine/magazine";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/jobpost" element={<JobPost />}></Route>
        <Route path="/findmodel" element={<FindModel />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/blog" element={<Magazine />}></Route>
      </Routes>
    </>
  );
}

export default App;
