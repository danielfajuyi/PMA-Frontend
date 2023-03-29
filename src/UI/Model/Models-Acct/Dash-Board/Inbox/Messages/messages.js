import "./Inbox.css";
import { BsFillTriangleFill, BsChevronCompactLeft, BsSearch } from "react-icons/bs";

import MsgItem from "./msg-item";

function Messages() {
  const msg = [
    {
      id: 1,
      avatar: "/images/model (4).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "hollo!",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 2,
      avatar: "/images/model (7).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "Good morning!",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 3,
      avatar: "/images/model (14).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "hi! Boss how is work?",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 4,
      avatar: "/images/model (1).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "sorry i missed your call.",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 5,
      avatar: "/images/model (12).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "hope you are good?",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 6,
      avatar: "/images/model (20).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "hi! happy sunday!",
          time: "10:04.Am",
        },
      ],
    },
    {
      id: 7,
      avatar: "/images/model (5).jpg",
      Name: "KEZIAH CHACHA",
      chat: [
        {
          status: "user",
          text: "so sorry! about that.",
          time: "10:04.Am",
        },
      ],
    },
  ];

  return (
    <>
      <div className="inbox-container">
        <div className="inbox-nav">
          <BsChevronCompactLeft className="nav-icon" />
          <div>Inbox</div>
          <BsSearch className="nav-icon" />
        </div>

        <div className="inbox-title">
          All messages <span>{msg.length}</span> <BsFillTriangleFill className="title-icon" />
        </div>

        <ul className="msg-wrapper">
          {msg.map((item) => (
            <MsgItem item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Messages;
