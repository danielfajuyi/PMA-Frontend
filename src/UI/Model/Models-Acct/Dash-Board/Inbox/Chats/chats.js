import { BsChevronCompactLeft, BsGear } from "react-icons/bs";
import "./chats.css";

import { UserChat, PartnerChat } from "./chat-item";

function Chats() {
  const chat = [
    { status: "user", avatar: "/images/model (2).jpg", text: "hello Bros", time: "12:00.Am" },
    { status: "user", avatar: "/images/model (2).jpg", text: "good morning Bro", time: "10:01.Am" },
    { status: "partner", avatar: "/images/model (4).jpg", text: "hi!", time: "10:02.Am" },
    { status: "partner", avatar: "/images/model (4).jpg", text: "good morning ", time: "10:03.Am" },
    {
      status: "user",
      avatar: "/images/model (2).jpg",
      text: "how are you doing? hope you,re doing good?",
      time: "10:04.Am",
    },

    {
      status: "partner",
      avatar: "/images/model (4).jpg",
      text: "Am fine thank you.",
      time: "10:05.Am",
    },
    {
      status: "partner",
      avatar: "/images/model (4).jpg",
      text: "how is your side? hope you are ok?",
      time: "10:06.Am",
    },
    {
      status: "user",
      avatar: "/images/model (2).jpg",
      text: "yea... thank God!",
      time: "10:07.Am",
    },
  ];

  return (
    <>
      <div className="chat-nav">
        <BsChevronCompactLeft />
        <span className="partner-name">Praise</span>
        <BsGear className="chat-set" />
      </div>
      <div className="chat-container">
        <div className="current-day">Today</div>
        <ul className="chat-wrapper">
          {chat.map((item) =>
            item.status === "user" ? (
              <UserChat avatar={item.avatar} text={item.text} time={item.time} />
            ) : (
              <PartnerChat avatar={item.avatar} text={item.text} time={item.time} />
            )
          )}
        </ul>
      </div>
      <div className="chat-text-area">
        <textarea
          className="chat-area"
          name="chat"
          id="chat"
          cols="10"
          rows="2"
          placeholder="write your message..."
          spellCheck="false"></textarea>

        <div className="chat-sent-icon">
          <i class="fa-sharp fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </>
  );
}
export default Chats;
