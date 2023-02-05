import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "../Components/Navbar/navbar";
import About from "../Pages/About/about";
import Contact from "../Pages/Contact/contact";
import FAQs from "../Pages/Faqs/Faq";
import FindModel from "../Pages/FindModel/find-model";
import Home from "../Pages/Home/home";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import LandingPage from "../Pages/LandingPage/LandingPage";
import NotFound from "../Pages/NotFound/notfound";
import { ClientRoutes } from "./ClientRoutes";
import { ModelRoutes } from "./ModelRoutes";

export const BaseRoutes = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/find-model/*" element={<FindModel />}></Route>
        <Route path="/faqs" element={<FAQs />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* Temporary Routes */}
        {ModelRoutes(showNavbar, setShowNavbar)}
        {ClientRoutes(showNavbar, setShowNavbar)}
      </Routes>
    </>
  );
};

console.log(<Routes />);
