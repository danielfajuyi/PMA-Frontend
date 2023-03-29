//user chat component

function UserChat({ avatar, text, time }) {
  return (
    <li className="user-chat">
      <div className="chat-text-wrapper">
        <div className="chat-text user-text">{text}</div>
        <span className="chat-time">{time}</span>
      </div>
      <div>
        <img className="chat-avatar" src={avatar} alt="" />
      </div>
    </li>
  );
}

//partner chat component

function PartnerChat({ avatar, text, time }) {
  return (
    <li className="partner-chat">
      <div>
        <img className="chat-avatar" src={avatar} alt="" />
      </div>

      <div className="chat-text-wrapper">
        <div className="chat-text partner-text">{text}</div>
        <span className="chat-time partner-time">{time}</span>
      </div>
    </li>
  );
}

export { UserChat, PartnerChat };
