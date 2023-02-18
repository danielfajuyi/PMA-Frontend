import { useEffect } from "react";
import { useState } from "react";

function PageNation({
  pageNumber,
  setPageNumber,
  setCurrentPage,
  currentPage,
}) {
  const [pageNumBtn, setPageNumBtn] = useState(5);
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  //handling all kinds of click on the page number nav
  function handleClick(num) {
    if (num === "prev") {
      currentPage > 1 && setCurrentPage(currentPage - 1);
      pageNumber[0] !== 1 && setPageNumber(pageNumber.map((item) => item - 1));
      console.log(currentPage);
    } else if (num === "next") {
      currentPage < pageNumber.length && setCurrentPage(currentPage + 1);
      currentPage >= pageNumBtn &&
        currentPage < pageNumber.length &&
        setPageNumber(pageNumber.map((item) => item + 1));
    } else {
      setCurrentPage(num);
    }
  }

  // setting device size
  function handleResize() {
    setDeviceSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    deviceSize < 760 ? setPageNumBtn(3) : setPageNumBtn(5);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceSize]);

  return (
    <nav className="pageNumber-nav">
      <div className="pageNumber-container">
        <button
          onClick={() => handleClick("prev")}
          className="prev-page on-hover"
        >
          <i className="fa-solid fa-angles-left fa-2x"></i>
        </button>
        <ul className="pageNumber">
          {pageNumber.map(
            (item, index) =>
              index <= pageNumBtn - 1 && (
                <li
                  style={{
                    backgroundColor: currentPage === item && " #ff007a",
                  }}
                  key={item}
                  className="page on-hover"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              )
          )}
          <span className="more-page">
            ...{currentPage === pageNumber.length ? "end" : "more"}
          </span>
        </ul>

        <button
          onClick={() => handleClick("next")}
          className="next-page on-hover"
        >
          <i className="fa-solid fa-angles-right fa-2x"></i>
        </button>
      </div>
      <span className="page-of-pages">
        Page {currentPage} of {pageNumber.length} pages.
      </span>
    </nav>
  );
}

export default PageNation;
