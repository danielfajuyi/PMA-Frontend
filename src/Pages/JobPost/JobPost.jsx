import React from "react";
import "./JobPost.css";
import JobPostView from "../../UI/Job-UI/JobPostView/JobPostView";
import Line from "../../Components/Line/line";
import Footer from "../Home/Layout/FooterSection/Footer/footer";
const JobPost = () => {
  return (
    <>
      <Line />
      <JobPostView />
      <Footer />
    </>
  );
};

export default JobPost;
