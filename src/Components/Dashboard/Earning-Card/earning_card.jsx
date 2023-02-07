import "./earning_card.scss";
import image from "../../../Images/dashboard/earning.svg";

const EarningCard = (props) => {
  let color = "";
  let title = "";

  if (props.type === "total") {
    color = "#0080004a";
    title = "Total earnings";
  } else if (props.type === "pending") {
    color = "#ff00004a";
    title = "Pending earnings";
  } else if (props.type === "withdraw") {
    color = "#00c2ff99";
    title = "Amount withdrawn";
  } else if (props.type === "available") {
    color = "#74ca3199";
    title = "Available";
  }

  return (
    <div className="earning">
      <div
        className="base"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="frame">
          <img src={image} alt="earning-img" />
        </div>
      </div>
      <div>
        <div className="type">{title}</div>
        <div className="amount">{props.amount}</div>
      </div>
    </div>
  );
};

export default EarningCard;
