import React from "react";

import Hero from "../../Components/Hero/hero";
import Main from "../../Components/Main/main";
import Footer from "../../Components/Footer/footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Link to="/">
        <Hero />
        <Main />
        <Footer />
      </Link>
    </>
  );
};

export default LandingPage;
