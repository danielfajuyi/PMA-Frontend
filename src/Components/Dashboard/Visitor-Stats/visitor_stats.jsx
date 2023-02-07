// The Styling for this component is implemented as a mixin
// Check out the mixin.scss file

import { BsSuitHeartFill, BsPeople } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useState } from "react";
import { useEffect } from "react";

const VisitorStats = (props) => {
  return (
    <div className="visitor_stats">
      <header>
        <h4>Visitor Statistics</h4>
        <select name="time_frame" id="time_frame">
          <option value="6">Last 1 week(s)</option>
        </select>
      </header>
      <div id="key_holder">
        <span>
          <FiEye size={18} />
          <span id="views">VIEWS</span>
          1.5k
        </span>
        <span>
          VISITS
          <span id="key"></span>
        </span>
      </div>
      <div id="bar_chart_holder">
        <Bar
          id="visitors_bar_chart"
          data={props.data}
          options={props.options}
        />
      </div>
      <div id="bottom">
        <BsSuitHeartFill color="red" size={18} />
        <span>1,895</span>
        <BsPeople size={18} />
        <span>2,567</span>
      </div>
    </div>
  );
};

export default VisitorStats;
