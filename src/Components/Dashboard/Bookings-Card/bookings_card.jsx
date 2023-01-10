import "./bookings_card.scss";
import { Line } from "react-chartjs-2";
import { GoLinkExternal } from "react-icons/go";

const BookingsCard = (props) => {
  console.log(props);
  return (
    <div className="booking_card">
      <header>
        <span>
          <GoLinkExternal size={14} color="black" />
        </span>
        <h5>{props.type}</h5>
      </header>
      <div className="booking_chart">
        <Line data={props.data} options={props.options} />
      </div>
      <div className="booking_info">
        <span className="total">{props.total}</span>
        <span className="percent">{props.percent}</span>
      </div>
    </div>
  );
};

export default BookingsCard;
