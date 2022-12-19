import React from "react";
import "./BlogItem.scss";
import CategoryLabel from "../../../../../Components/CategoryLabel/CategoryLable";
import { BlogData } from "../../BlogData";
import { Link } from "react-router-dom";
import UilArrow from "@iconscout/react-unicons/icons/uil-arrow-circle-right";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BlogItem = ({ blogItems }) => {
  let settings = {
    dots: true,
    infinite: true,

    speed: 400,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="BlogItem">
      <Slider {...settings}>
        {blogItems.map((blogitem) => {
          const {
            id,
            img,
            category,
            title,
            desc,

            date,
            authorAvatar,
            authorName,
          } = blogitem;
          return (
            <div className="BlogItem-Slide">
              <article className="item1" key={id}>
                <div className="blogimg-wrapper">
                  <img src={img} alt={title} />
                </div>

                <CategoryLabel lable={category} id="item1-lable" />
                <div className="blogcontent-wrapper">
                  <div className="blog-title">
                    <h3>{title}</h3>
                    <p className="blog-description">{desc}</p>
                  </div>

                  <div className="blog-details">
                    <div>
                      <img src={authorAvatar} alt={authorName} />
                      <div className="blog-authorname">
                        <h6>{authorName}</h6>
                        <p>{date}</p>
                      </div>
                    </div>

                    <Link to={`/blogitem/${id}`}>
                      <UilArrow />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export const BlogItem2 = () => {
  return (
    <div className="BlogItem2 container item-mtop">
      <div className="item2">
        <div className="item2-left">
          {BlogData.map((blogitem) => {
            const {
              id,
              img,
              category,
              title,

              date,
              authorAvatar,
              authorName,
            } = blogitem;
            return (
              <div className="left-wrapper " key={id}>
                <img src={img} alt={title} />
                <div>
                  <div>
                    <CategoryLabel lable={category} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <div>
                      <img src={authorAvatar} alt={authorName} />
                      <span>
                        <h5>{authorName}</h5>
                        <p>{date}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slide */}
        </div>

        <div className="item2-right">
          <aside>
            <div>
              <h3>Newsletter Sign up</h3>
              <p>Subscribe to Our Newsletter right now to be updated</p>
              <input type="text" placeholder="Email Address" />

              <Link to="/newsletter-signup">Signup</Link>
            </div>

            <div>
              <h3>Latest issue</h3>
              <img src="" alt="" />
              <Link type="dowload">Download Here </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
