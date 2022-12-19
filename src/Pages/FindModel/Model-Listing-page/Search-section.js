import { useState } from "react";
import FilterItem from "./FilterItem";

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

  function handleGender() {
    setToggleGender((prevGender) => !prevGender);
  }
  function handleCategory() {
    setToggleCategory((prevCategory) => !prevCategory);
  }

  return (
    <>
      <section className="search-container">
        <div className="input-section">
          <p className="search__text">
            <i className="fa-solid fa-magnifying-glass fa-2x"></i>
            Search by Country & State
          </p>

          <div className="search">
            <label className="input-box" htmlFor="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                onChange={handleSearch}
                type="search"
                id="search"
                value={search}
                spellCheck="false"
                autoFocus
              />
            </label>

            <button onClick={handleData} className="dark--btn search__btn on-hover" type="submit">
              Search
            </button>
          </div>
        </div>
        <div>
          <p className="filter__text">
            <i className="fa-solid fa-magnifying-glass fa-2x"></i> Filter by Gender & Category
          </p>

          <div className="filter">
            <div className="filter-container">
              <button onClick={handleGender} className="filter__btn colored--btn on-hover">
                {gender ? gender : "Gender"}
                <i
                  style={{ transform: toggleGender && `rotateX(${180}deg)` }}
                  className="fa-solid fa-angle-down"></i>
              </button>
              {toggleGender && (
                <ul className="filter-list colored--btn">
                  <FilterItem itemText="all gender" handleFilter={filterGender} />
                  <FilterItem itemText="male" handleFilter={filterGender} />
                  <FilterItem itemText="female" handleFilter={filterGender} />
                </ul>
              )}
            </div>
            <div className="filter-container">
              <button onClick={handleCategory} className="filter__btn dark--btn on-hover">
                {category ? category : "Category"}
                <i
                  style={{ transform: toggleCategory && `rotateX(${180}deg)` }}
                  className="fa-solid fa-angle-down"></i>
              </button>
              {toggleCategory && (
                <ul className="filter-list dark--btn">
                  <FilterItem itemText="all category" handleFilter={filterCategory} />
                  <FilterItem itemText="child" handleFilter={filterCategory} />
                  <FilterItem itemText="petite" handleFilter={filterCategory} />
                  <FilterItem itemText="fashion" handleFilter={filterCategory} />
                  <FilterItem itemText="pageant" handleFilter={filterCategory} />
                  <FilterItem itemText="fitness" handleFilter={filterCategory} />
                  <FilterItem itemText="glamour" handleFilter={filterCategory} />
                  <FilterItem itemText="runway" handleFilter={filterCategory} />
                  <FilterItem itemText="editorial" handleFilter={filterCategory} />
                  <FilterItem itemText="swimsuit" handleFilter={filterCategory} />
                  <FilterItem itemText="plus size" handleFilter={filterCategory} />
                  <FilterItem itemText="body part" handleFilter={filterCategory} />
                  <FilterItem itemText="commercial" handleFilter={filterCategory} />
                  <FilterItem itemText="promotional" handleFilter={filterCategory} />
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="result-container">
        <p className="result">{searchResult} Results Found</p>
      </section>
    </>
  );
}

export default AllSearch;
