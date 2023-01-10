import "./message_preview_card.scss";

const MessagePreviewCard = (props) => {
  return (
    <div className="msg_box">
      <div
        className="notification"
        style={{ backgroundColor: props.count ? "royalblue" : "transparent" }}
      >
        {props.count}
      </div>
      <span className="sender_profile_img">
        <span className="sender_img">
          <img src={props.img} alt="sender-img" />
        </span>
        <div
          className="status"
          style={{ backgroundColor: props.online ? "green" : "gray" }}
        ></div>
      </span>
      <span className="msg_info">
        <div className="sender">{props.sender}</div>
        <div className="title">{props.title}</div>
        <div className="msg">{props.msg}</div>
      </span>
    </div>
  );
};

export default MessagePreviewCard;
