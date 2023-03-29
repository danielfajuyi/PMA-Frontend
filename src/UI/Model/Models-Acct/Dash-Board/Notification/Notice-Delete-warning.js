function DeleteWarning({ deleteNotice, handleDelete, title, text }) {
  return (
    <div className="noti-del-warning-wrapper">
      <div className="noti-del-warning">
        <div className="noti-job-warning">
          <h2>{title}</h2>
          <p className="warning-text">{text}</p>
        </div>

        {title === "Delete?" ? (
          <div className="noti-job-btn">
            <button onClick={deleteNotice} className="accept-btn">
              Delete
            </button>
            <button onClick={() => handleDelete("")} className="decline-btn">
              Cancel
            </button>
          </div>
        ) : (
          <div className="noti-job-btn">
            <button onClick={() => handleDelete("")} className="accept-btn">
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteWarning;
