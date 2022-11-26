import React from "react";
import NewsItem from "../NewsItems/NewsItem";

import "./NewsList.css";

const NewsList = ({ news }) => {
  return (
    <div className="NewsList-wrapper">
      {news.map((Newsitem) => {
        return (
          Newsitem.id <= 3 && <NewsItem Newsitem={Newsitem} key={Newsitem.id} />
        );
      })}
    </div>
  );
};

export default NewsList;
