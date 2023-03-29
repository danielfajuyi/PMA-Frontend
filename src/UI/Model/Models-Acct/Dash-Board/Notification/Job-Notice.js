import { useEffect } from "react";
import { useState } from "react";
import JobNotice from "./Job-Notice-Items";
import { AcceptNote, DeclineNote } from "./slide-1";
import { AcceptNote2, DeclineNote2 } from "./slide-2";
import { AcceptNote3, DeclineNote3 } from "./slide-3";
import { AcceptNotice, DeclineNotice } from "./JobNote";

function JobItem({ item, handleStatus, handleDelete, setNotice }) {
  const { id, avatar, type, details, status } = item;
  const [toggle, setToggle] = useState("");
  const [caption, setCaption] = useState("");

  const [openRequest, setOpenRequest] = useState(false);

  function handleClick() {
    setOpenRequest((prev) => !prev);
    setToggle("");
    handleStatus();
  }

  function handleAction(action) {
    if (item.status === "Accept") {
      setToggle("accepted-before");
    } else if (item.status === "Decline") {
      setToggle("declined-before");
    } else {
      setNotice((prevNotice) =>
        prevNotice.map((item) => {
          if (item.id === id && action === "accept") {
            item.status = "Accept";
            setToggle("accepted");
          } else if (item.id === id && action === "decline") {
            item.status = "Decline";
            setToggle("declined");
          }
          return item;
        })
      );
    }
  }

  useEffect(() => {
    function captionFun() {
      let fullCapt;

      if (type === "accepted request") {
        fullCapt = " accepted your request";
      } else if (type === "declined request") {
        fullCapt = " declined your request";
      } else if (type === "job request") {
        fullCapt = " request for your service";
      }

      const name = details.name;
      const captLength = 25 - name.length;

      const newCapt = fullCapt.slice(0, captLength);
      setCaption(newCapt);
    }

    captionFun();
  }, [type, details.name]);

  return (
    <li>
      <div className="notice">
        <div>
          <img className="noti-avater" src={avatar} alt="" />
        </div>

        <div onClick={handleClick}>
          <h4 className="noti-title">{type}</h4>
          <p
            style={{ color: status !== "pending" && status !== "not-read" ? "#808080" : "#ff014f" }}
            className="noti-text">
            <span> {details.name}</span>
            {caption}
            ...
          </p>
        </div>

        <i
          onClick={() => handleDelete(id)}
          className="fa-solid fa-xmark del-notice colored-hover"></i>
      </div>

      {/* job notification */}

      <div style={{ display: openRequest ? "block" : "none" }} className="noti-job-wrapper">
        {type === "accepted request" ? (
          <AcceptNotice item={item} />
        ) : type === "declined request" ? (
          <DeclineNotice item={item} />
        ) : (
          <div>
            {/* Job notice text */}

            <JobNotice setToggle={setToggle} item={item} />

            {/* accept warning text */}

            <AcceptNote
              toggle={toggle}
              setToggle={setToggle}
              handleAccept={() => handleAction("accept")}
            />

            <AcceptNote2 toggle={toggle} handleClick={handleClick} />

            <AcceptNote3 toggle={toggle} handleClick={handleClick} />

            {/* decline  warning text  */}

            <DeclineNote
              toggle={toggle}
              setToggle={setToggle}
              handleDecline={() => handleAction("decline")}
            />

            <DeclineNote2 toggle={toggle} handleClick={handleClick} />

            <DeclineNote3 toggle={toggle} handleClick={handleClick} />
          </div>
        )}
      </div>
    </li>
  );
}

export default JobItem;
