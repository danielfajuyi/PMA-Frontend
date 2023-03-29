import "./Notification.css";
import NoticeItem from "./notice-item";
import JobItem from "./Job-Notice";
import { useState } from "react";
import DeleteWarning from "./Notice-Delete-warning";

function Notification({ toggleNotice, setToggleNotice, notice, setNotice }) {
  const [toggleDelete, setToggleDelete] = useState("");
  const [deleteId, setDeleteId] = useState("");

  function handleDelete(id) {
    setToggleDelete((prev) => (id === "" ? "" : "warning"));
    setDeleteId(id);
  }

  function deleteNotice() {
    notice.map((item) => {
      if (item.id === deleteId) {
        if (item.type === "job request" && item.status !== "pending" && item.status !== "read") {
          setNotice((prevNotice) => prevNotice.filter((item) => item.id !== deleteId && item));
          setToggleDelete("");
          setDeleteId("");
        } else if (item.type !== "job request" && item.status !== "pending") {
        } else {
          setToggleDelete("error");
        }
      }
      return item;
    });
  }

  function handleStatus(id) {
    setNotice((prevNotice) =>
      prevNotice.map((item) => {
        let newStatus = item;
        if (newStatus.id === id) {
          if (newStatus.status === "not-read" || newStatus.status === "pending") {
            newStatus.status = "read";
          }
        }
        return newStatus;
      })
    );
  }

  return (
    <div style={{ transform: toggleNotice && `translateX(${0}%)` }} className="noti-container">
      <div className="notification">
        <div className="noti-top-text">
          <h3>Notifications</h3>
          <i
            onClick={() => setToggleNotice((prev) => !prev)}
            className="fa-solid fa-xmark noti-close colored-hover"></i>
        </div>

        <ul className="noti-wrapper">
          {/* list of notifications */}

          {notice.length === 0 ? (
            <li className="no-noti">No Notification!</li>
          ) : (
            notice.map((item) =>
              item.type === "job request" ||
              item.type === "accepted request" ||
              item.type === "declined request" ? (
                <JobItem
                  key={item.id}
                  item={item}
                  setNotice={setNotice}
                  handleDelete={() => handleDelete(item.id)}
                  handleStatus={() => handleStatus(item.id)}
                />
              ) : (
                <NoticeItem
                  key={item.id}
                  item={item}
                  handleStatus={() => handleStatus(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              )
            )
          )}

          <li style={{ display: toggleDelete === "warning" ? "block" : "none" }}>
            <DeleteWarning
              title="Delete?"
              text="Are you sure you want delete this notification?"
              deleteNotice={deleteNotice}
              handleDelete={handleDelete}
            />
          </li>
          <li style={{ display: toggleDelete === "error" ? "block" : "none" }}>
            <DeleteWarning
              title="Error!"
              text=" Accept or Decline this job request before carrying out this action"
              handleDelete={handleDelete}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Notification;
