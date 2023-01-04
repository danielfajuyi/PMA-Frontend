import { Link } from "react-router-dom";

function ListItem({
  img,
  firstName,
  secondName,
  firstCategory,
  secondCategory,
  agency,
  state,
  country,
  handleProfile,
}) {
  return (
    <li className="main__item shadow-fit">
      <img className="item__img" src={img} alt="" width="250" height="300" />

      <div className="item__text-content">
        <span className="test-text">{agency}</span>
        <div className="text-container">
          <h3 className="item__name">
            {firstName} {secondName}
          </h3>
          <i className="fa-solid fa-circle-check check-icon"></i>
        </div>
        <span>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-regular fa-star star-icon"></i>
          <i className="fa-regular fa-star star-icon"></i>
          <span>(3.0)</span>
        </span>
        {secondCategory ? (
          <p className="item__category">
            {firstCategory} and {secondCategory} Model.
          </p>
        ) : (
          <p className="item__category">{firstCategory}</p>
        )}
        <div className="test-contain">
          <div className="text-container">
            <i className="fa-solid fa-location-dot location-icon"></i>
            <p className="location">
              {state}, {country}
            </p>
          </div>
          <button onClick={handleProfile} type="button" className="item__btn shadow-fit">
            <Link to="/find-model/profile">View</Link>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
