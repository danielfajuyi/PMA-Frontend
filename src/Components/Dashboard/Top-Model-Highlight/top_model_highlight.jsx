import "./top_model_highlight.css";
import { FiEye } from "react-icons/fi";

const TopModelHighlight = (props) => {
  return (
    <div className="models_highlight">
      <span>
        <div className="model_img_holder">
          <img src={props.img} alt="model-img" />
        </div>
        <span className="model_name">{props.name}</span>
      </span>
      <span>
        <FiEye />
        <span className="views">{props.views}</span>
      </span>
    </div>
  );
};

export default TopModelHighlight;
