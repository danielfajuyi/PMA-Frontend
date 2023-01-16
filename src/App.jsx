import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import FindModel from "./Pages/FindModel/find-model";
import Contact from "./Pages/Contact/contact";
import FAQS from "./Pages/Faqs/Faq";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/notfound";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import AgencyProfile from "./UI/Agency/Profile/profile";
import AgencyDashboard from "./UI/Agency/dashboard/dashboard";
import ClientDashboard from "./UI/Client/dashboard/dashboard";
import ModelDashboard from "./UI/Model/dashboard/dashboard";
import AdminDashboard from "./UI/Admin-UI/dashboard/dashboard";

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
        <Route path="/find-model/*" element={<FindModel />}></Route>
        <Route path="/faqs" element={<FAQS />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        {/* Temporary route path */}
        <Route path="/agencyprofile" element={<AgencyProfile />}></Route>
        <Route
          path="/agencydashboard"
          element={<AgencyDashboard displayNav={setShowNav} />}
        ></Route>
        <Route
          path="/clientdashboard"
          element={<ClientDashboard displayNav={setShowNav} />}
        ></Route>
        <Route
          path="/modeldashboard"
          element={<ModelDashboard displayNav={setShowNav} />}
        ></Route>
        <Route
          path="/admindashboard"
          element={<AdminDashboard displayNav={setShowNav} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
