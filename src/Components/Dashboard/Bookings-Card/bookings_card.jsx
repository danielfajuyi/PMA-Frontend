import "./bookings_card.scss";
import { Line } from "react-chartjs-2";
import { GoLinkExternal } from "react-icons/go";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import useResponsiveText from "../../../custom_hooks/useResponsiveText";

const BookingsCard = (props) => {
  const titleRef = useRef();
  const fs = useResponsiveText(titleRef, 0.09, 10);

  return (
    <div className="booking_card" ref={titleRef}>
      <header>
        <span>
          <GoLinkExternal size={14} color="black" />
        </span>
        <h5
          style={{
            fontSize: fs,
          }}
        >
          {props.type}
        </h5>
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
