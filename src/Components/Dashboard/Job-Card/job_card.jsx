import "./job_card.scss";

import { FiEye } from "react-icons/fi";

const JobCard = (props) => {
  return (
    <div className="job_card">
      <div className="note">{props.note}</div>

      {props.views && props.applied && (
        <div className="involved">
          <span>
            <FiEye size={14} style={{ marginRight: "0.4em" }} />
            {props.views}
          </span>
          <span className="applied">Applied {props.applied}</span>
        </div>
      )}

      <div className="time" hidden={!props.time}>
        {props.time}
      </div>
    </div>
  );
};

export default JobCard;
