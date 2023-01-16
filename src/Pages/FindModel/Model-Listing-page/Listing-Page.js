import "./Listing.css";
import Categories from "./Category-Section";
import AllSearch from "./Search-section";
import List from "./List-section";
import PageNation from "./PageNation";

import Footer from "../../Home/Layout/FooterSection/Footer/footer";
import { useState, useEffect } from "react";

function ListingPage({ handleProfile, Data }) {
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(Data);
  const [pageNumber, setPageNumber] = useState([]);
  const [currentPage, setCurrentPage] = useState("");

  function filterGender(e) {
    let filterInput = e.target.textContent;
    setGender(filterInput);
  }

  function filterCategory(e) {
    let filterInput = e.target.textContent;
    setCategory(filterInput);
  }

  function handleSearch(e) {
    const searchInput = e.target.value;
    setSearch(searchInput);
  }

  function handleData() {
    let newData = [];

    //searching base on the available data
    //searching base on gender
    if (gender && !category && !search) {
      if (gender !== "all gender") {
        newData = Data.filter(
          (item) => item.stats.gender.toLowerCase() === gender && item
        );
      } else {
        newData = Data.map((item) => item);
      }

      //searching base on category
    } else if (!gender && category && !search) {
      if (category !== "all category") {
        newData = Data.filter(
          (item) =>
            item.category.find((str) => str.toLowerCase() === category) && item
        );
      } else {
        newData = Data.map((item) => item);
      }

      //searching base on search input either country or state
    } else if (!gender && !category && search) {
      newData = Data.filter((item) =>
        item.country.toLowerCase() === search.toLowerCase() ||
        item.state.toLowerCase() === search.toLowerCase()
          ? item
          : null
      );

      //searching base on gender and category
    } else if (gender && category && !search) {
      if (gender === "all gender" && category !== "all category") {
        newData = Data.filter(
          (item) =>
            item.category.find((str) => str.toLowerCase() === category) && item
        );
      } else if (gender !== "all gender" && category === "all category") {
        newData = Data.filter(
          (item) => item.stats.gender.toLowerCase() === gender && item
        );
      } else if (gender !== "all gender" && category !== "all category") {
        newData = Data.filter((item) =>
          item.stats.gender.toLowerCase() === gender &&
          item.category.find((str) => str.toLowerCase() === category)
            ? item
            : null
        );
      } else {
        newData = Data.map((item) => item);
      }

      //searching base on gender and search input
    } else if (gender && !category && search) {
      if (gender === "all gender") {
        newData = Data.filter((item) =>
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      } else {
        newData = Data.filter((item) =>
          item.stats.gender.toLowerCase() === gender &&
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.stats.gender.toLowerCase() === gender &&
              item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      }

      //searching base on category and search input
    } else if (!gender && category && search) {
      if (category === "all category") {
        newData = Data.filter((item) =>
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      } else {
        newData = Data.filter((item) =>
          item.category.find((str) => str.toLowerCase() === category) &&
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.category.find((str) => str.toLowerCase() === category) &&
              item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      }

      //searching base on gender, category and search input
    } else if (gender && category && search) {
      if (gender === "all gender" && category === "all category") {
        newData = Data.filter((item) =>
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      } else if (gender !== "all gender" && category === "all category") {
        newData = Data.filter((item) =>
          item.stats.gender.toLowerCase() === gender &&
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.stats.gender.toLowerCase() === gender &&
              item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      } else if (gender === "all gender" && category !== "all category") {
        newData = Data.filter((item) =>
          item.category.find((str) => str.toLowerCase() === category) &&
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.category.find((str) => str.toLowerCase() === category) &&
              item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      } else if (gender !== "all gender" && category !== "all category") {
        newData = Data.filter((item) =>
          item.stats.gender.toLowerCase() === gender &&
          item.category.find((str) => str.toLowerCase() === category) &&
          item.country.toLowerCase() === search.toLowerCase()
            ? item
            : item.stats.gender.toLowerCase() === gender &&
              item.category.find((str) => str.toLowerCase() === category) &&
              item.state.toLowerCase() === search.toLowerCase()
            ? item
            : null
        );
      }

      //if none of the above conditions are mate
    } else {
      newData = Data.map((item) => item);
    }

    setData(newData);
    handlePageNum(newData);
    setCurrentPage(1);
    setSearch("");
  }

  function handlePageNum(data) {
    let pageNumList = [];
    const pageLimit = 4;
    const pageCount = Math.ceil(data.length / pageLimit);
    for (let i = 1; i <= pageCount; i++) {
      pageNumList.push(i);
    }

    setPageNumber(pageNumList);
    pageNumList = [];
  }

  useEffect(() => {
    // eslint-disable-next-line
    handleData();
    // eslint-disable-next-line
  }, [gender, category]);

  return (
    <>
      <Categories />
      <AllSearch
        filterGender={filterGender}
        filterCategory={filterCategory}
        handleSearch={handleSearch}
        handleData={handleData}
        category={category}
        gender={gender}
        search={search}
        searchResult={data.length}
      />

      <List
        data={data}
        handleProfile={handleProfile}
        currentPage={currentPage}
      />
      {data.length !== 0 && (
        <PageNation
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}

      <Footer />
    </>
  );
}

export default ListingPage;
