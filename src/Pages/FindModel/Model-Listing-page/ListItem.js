import { Link } from "react-router-dom";

function ListItem({
  img,
  firstName,
  secondName,
  firstCategory,
  secondCategory,
  state,
  country,
  handleProfile,
}) {
  return (
    <li className="main__item">
      <img className="item__img" src={img} alt="" width="250" height="250" />

      <div className="item__text-content">
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
          <i className="fa-solid fa-star star-icon"></i>
          <i className="fa-solid fa-star star-icon"></i>
          <span>(5.0)</span>
        </span>

        <p className="item__category">
          {firstCategory} and {secondCategory} Model.
        </p>

        <div className="text-container">
          <i className="fa-solid fa-location-dot location-icon"></i>
          <p className="location">
            {state}, {country}
          </p>
        </div>

        <button onClick={handleProfile} type="button" className="item__btn dark--btn on-hover">
          <Link to="/find-model/profile">View Profile</Link>
        </button>
      </div>
    </li>
  );
}

export default ListItem;
