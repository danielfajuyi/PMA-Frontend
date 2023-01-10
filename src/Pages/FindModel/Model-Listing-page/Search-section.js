import { useState } from "react";
import FilterItem from "./FilterItem";
import { FaArrowCircleDown, FaSearchLocation } from "react-icons/fa";
import AnimateArrow from "../../../Components/AnimationAssets/AnimateArrow/Arrow";
function AllSearch({
  filterGender,
  filterCategory,
  handleSearch,
  handleData,
  gender,
  category,
  search,
  searchResult,
}) {
  const [toggleGender, setToggleGender] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);

  const categoryList = [
    "all category",
    "child",
    "petite",
    "fashion",
    "pageant",
    "fitness",
    "glamour",
    "runway",
    "editorial",
    "swimsuit",
    "plus size",
    "body part",
    "commercial",
    "promotional",
  ];

  function handleGender() {
    setToggleGender((prevGender) => !prevGender);
  }
  function handleCategory() {
    setToggleCategory((prevCategory) => !prevCategory);
  }

  return (
    <>
      <section className="search-container container mtop">
        <div className="filter-section">
          <p className="filter__text">Filter by Category & Gender</p>

          <div className="filter">
            <div className="filter-container">
              <button
                onClick={handleCategory}
                className="filter__btn dark--btn on-hover"
              >
                <FaArrowCircleDown />
                {category ? category : "Category"}
              </button>
              {toggleCategory && (
                <ul className="filter-list dark--btn">
                  {categoryList.map((item, index) => (
                    <FilterItem
                      key={index}
                      itemText={item}
                      handleFilter={filterCategory}
                    />
                  ))}
                </ul>
              )}
            </div>

            <div className="filter-container">
              <button
                onClick={handleGender}
                className="filter__btn colored--btn on-hover"
              >
                {gender ? gender : "Gender"}
                <FaArrowCircleDown />
              </button>
              {toggleGender && (
                <ul className="filter-list colored--btn">
                  <FilterItem
                    itemText="all gender"
                    handleFilter={filterGender}
                  />
                  <FilterItem itemText="male" handleFilter={filterGender} />
                  <FilterItem itemText="female" handleFilter={filterGender} />
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="input-section">
          <p className="search__text">
            <i
              className="fa-solid fa-magnifying-glass fa-2x "
              style={{ display: "none" }}
            ></i>
            <FaSearchLocation />
            Search by Country & State
          </p>

          <div className="search">
            <label className="input-box" htmlFor="search">
              <input
                onChange={handleSearch}
                type="search"
                id="search"
                value={search}
                placeholder="Atlanta, Usa"
                spellCheck="false"
                autoFocus
                autoComplete="NO"
              />
            </label>

            <button
              onClick={handleData}
              className="dark--btn search__btn on-hover"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="result-container mtop container">
        <AnimateArrow />
        <span className="result">{searchResult} Results Found</span>
      </section>
    </>
  );
}

export default AllSearch;
