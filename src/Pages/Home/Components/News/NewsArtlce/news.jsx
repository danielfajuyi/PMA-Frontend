import React from "react";
import SectionHead from "../../../../../Components/SectionHead/sectionhead";
import "./news.css";
import SearchBar from "../SearchBar/SearchBar";
import NewsList from "../NewsList/NewsList";
import { LatestNews } from "../NewsApI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Adverts from "../../Adverts/Adverts";

const News = () => {
  const [news, setNews] = useState(LatestNews);
  const [searchkey, setSearchKey] = useState("");

  console.log(searchkey);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleClearSearch = () => {
    setNews(LatestNews);
    setSearchKey("");
  };

  const handleSearchResults = () => {
    const allNews = LatestNews;
    const FilteredNews = allNews.filter((Newsitem) => {
      return Newsitem.category
        .toLowerCase()
        .includes(searchkey.toLowerCase().trim());
    });

    setNews(FilteredNews);
  };

  return (
    <>
      <section className="container LastestNews-container">
        <SectionHead title=" News" description="Lastest" />

        {/* SearchBar */}
        <SearchBar
          handleSearchSubmit={handleSearchSubmit}
          searchkey={searchkey}
          setSearchKey={setSearchKey}
          handleClearSearch={handleClearSearch}
        />

        {/* NewsList & Empty Search*/}
        <NewsList news={news} />

        <Link to="/magazine" className="featured-model-btn news-btn btn_shadow">
          Visit Blog
        </Link>

        <Adverts />
      </section>
    </>
  );
};

export default News;
