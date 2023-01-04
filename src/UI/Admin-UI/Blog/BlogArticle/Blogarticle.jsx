import React from "react";
import { Link } from "react-router-dom";
import CategoryLabel from "../../../../../Components/CategoryLabel/CategoryLable";
import "./NewsItem.css";
import UilArrow from "@iconscout/react-unicons/icons/uil-arrow-circle-right";

const NewsItem = ({
  Newsitem: {
    id,
    img,
    title,
    category,
    desc,
    authorName,
    authorAvatar,
    createdAt,
  },
}) => {
  return (
    <div className="newsItem-wrap ">
      <div className="overlay newsItem-img">
        <img src={img} alt="cover" className="newsItem-cover " />
      </div>
      <CategoryLabel lable={category} />
      <div>
        <h3>{title}</h3>
        <p className="newsItem-description">{desc}</p>
      </div>

      <div className="newsItem-footer">
        <div className="newsItem-author">
          <img src={authorAvatar} alt="avatar"></img>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="newsItem-link" to={`/news/${id}`}>
          <UilArrow />
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
