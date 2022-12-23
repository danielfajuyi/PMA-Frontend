import React, { useState } from "react";

import CategoryLabel from "../../../../../Components/CategoryLabel/CategoryLable";
import { BlogPostSlider, MagazineIssues, MostPopular } from "../../BlogData";
import { Link } from "react-router-dom";
import "./BlogItem.scss";

import Uilarrow from "@iconscout/react-unicons/icons/uil-arrow-left";
import Uilarrowright from "@iconscout/react-unicons/icons/uil-arrow-right";

import { FiDownloadCloud } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BlogItem = ({ blogItems }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <>
        <button className="blog-btn" onClick={onClick}>
          <Uilarrowright />
        </button>
      </>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0);

  let settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    centerPadding: 0,

    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setImageIndex(next),
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
            <div
              className={
                id === ImageIndex
                  ? "BlogItem-Slide bActiveSlide"
                  : "BlogItem-Slide"
              }
              key={id}
            >
              <article className="item1">
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
                      <Uilarrow />
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
          {BlogPostSlider.map((blogitem) => {
            const { id, img, category, title, date, authorAvatar, authorName } =
              blogitem;
            return (
              id <= 4 && (
                <div className="left-wrapper" key={id}>
                  <div
                    style={{ backgroundImage: `url(${img})` }}
                    className="left-wrapper-img overlay2"
                  >
                    <div className="left-wrapper-desc">
                      <div className="category-wrapper">
                        <CategoryLabel lable={category} />
                      </div>
                      <div className="blog-details2">
                        <h3 id="title2">{title}</h3>
                        <div>
                          <img src={authorAvatar} alt={authorName} />
                          <span className="blog-authorname">
                            <h5>{authorName}</h5>
                            <p>{date}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="item2-right">
          <aside>
            <div className="top">
              <h3>Newsletter Sign up</h3>
              <p>Subscribe to Our Newsletter right now to be updated</p>

              <div className="signup">
                <input type="email" placeholder="Email Address" />
                <Link to="/newsletter-signup">Signup</Link>
              </div>
            </div>

            <div className="bottom">
              <h3>Latest issue</h3>
              {MagazineIssues.map((issues) => {
                return (
                  issues.id <= 1 && (
                    <div className="issue" key={issues.id}>
                      <img src={issues.img} alt="issue1" />
                    </div>
                  )
                );
              })}

              <Link to="" download>
                Download Here
                <FiDownloadCloud />
              </Link>
            </div>
          </aside>
        </div>

        <div className="item2-down" style={{ background: "var(-dimblack)" }}>
          <div className="MostPopular">
            <div className="top">
              <h3>Most Popular</h3>
              <Link to="">
                See All
                <Uilarrowright />
              </Link>
            </div>

            <div className="bottom">
              {MostPopular.map((popularpost) => {
                const { id, img, desc, title } = popularpost;

                return (
                  id <= 2 && (
                    <div className="slider" key={id}>
                      <img src={img} alt={desc} />
                      <div>
                        <h4>{title}</h4>
                        <p>-{desc}-</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogItem3 = () => {
  return (
    <div className="BlogItem3 container item-mtop">
      <div className="item3">
        <div className="item3-left">
          {BlogPostSlider.map((blogitem) => {
            const { id, img, category, title, date, authorAvatar, authorName } =
              blogitem;
            return (
              id <= 4 && (
                <div className="left-wrapper" key={id}>
                  <div
                    style={{ backgroundImage: `url(${img})` }}
                    className="left-wrapper-img overlay2"
                  >
                    <div className="left-wrapper-desc">
                      <div className="category-wrapper">
                        <CategoryLabel lable={category} />
                      </div>
                      <div className="blog-details3">
                        <h3 id="title3">{title}</h3>
                        <div>
                          <img src={authorAvatar} alt={authorName} />
                          <span className="blog-authorname">
                            <h5>{authorName}</h5>
                            <p>{date}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="item3-right">
          <aside>
            <div className="top">
              <h3>Advert</h3>
              <div className="ads"></div>
            </div>

            <div className="bottom">
              <h3>Advert</h3>
              <div className="ads"></div>
            </div>
          </aside>
        </div>

        <div className="item3-down" style={{ background: "var(-dimblack)" }}>
          <div className="MostPopular">
            <div className="top">
              <h3>Recent Posted</h3>
              <Link to="">
                See All
                <Uilarrowright />
              </Link>
            </div>

            <div className="bottom">
              {MostPopular.map((popularpost) => {
                const { id, img, desc, title } = popularpost;

                return (
                  id <= 2 && (
                    <div className="slider" key={id}>
                      <img src={img} alt={desc} />
                      <div>
                        <h4>{title}</h4>
                        <p>-{desc}-</p>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
