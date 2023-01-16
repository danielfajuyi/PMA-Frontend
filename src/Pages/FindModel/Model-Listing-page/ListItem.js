import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

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
    <li className=" modelportfolio__wrapper">
      <div className=" modelportfolio__imgwrapper ">
        <img className="model__imgs" src={img} alt="./model-img" />
      </div>

      <div className="modelportfolio__textwrapper">
        <div className="text1 model__namewrap">
          <span className="model__names">
            {firstName} {secondName}
          </span>
          <BsPatchCheckFill />
        </div>

        <div className="text2 model__ratings">
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <span>
            <FaRegStar />
            <FaRegStar />
          </span>

          <span>(3.0)</span>
        </div>

        <div className="text3 model__categorys">
          <div id="agencylable">
            <span className="lable">Agency :</span>
            <span className="value">{agency}</span>
          </div>
          {secondCategory ? (
            <div id="categorylable">
              <span className="lable">Category</span>
              <span className="value">
                {firstCategory}, {secondCategory} Model
              </span>
            </div>
          ) : (
            <div id="categorylable"> Category: {firstCategory}</div>
          )}
        </div>

        <div className="text4 model__locations">
          <MdLocationPin />
          <span>
            {state}, {country}
          </span>
        </div>

        <div className="text5 model__viewprofiles">
          <button
            onClick={handleProfile}
            type="button"
            className="viewprofile__btn shadow-fit"
          >
            <Link to="/find-model/profile">View Portfolio</Link>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
