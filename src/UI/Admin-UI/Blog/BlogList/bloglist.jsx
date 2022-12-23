import React from "react";
import Blogarticle from "../BlogArticle/Blogarticle";

import "./Bloglist.scss";

const Bloglist = ({ blogpost }) => {
  return (
    <div className="NewsList-wrapper">
      {blogpost.map((blogarticle) => {
        return (
          blogarticle.id <= 3 && (
            <Blogarticle blogarticle={blogarticle} key={blogarticle.id} />
          )
        );
      })}
    </div>
  );
};

export default Bloglist;
