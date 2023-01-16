import React from "react";
import PostShare from "../Component/Posts/PostShare/postshare";

import "./home.scss";
import Posts from "../Component/Posts/Posts";

const CommunityHome = () => {
  return (
    <>
      <div className="communityHome">
        <section>
          <PostShare />
          <Posts />
        </section>
      </div>
    </>
  );
};

export default CommunityHome;
