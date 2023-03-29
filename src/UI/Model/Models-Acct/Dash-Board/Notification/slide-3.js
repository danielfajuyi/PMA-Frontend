function AcceptNote3({ toggle, handleClick }) {
  return (
    <div
      style={{ transform: toggle === "accepted-before" && `translateX(${0}%)` }}
      className="noti-job accept-warning">
      <div className="noti-job-warning">
        <h2>Oops!</h2>
        <p className="warning-text">Sorry, you have accepted this job request before!</p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleClick} className="accept-btn">
          Got it!
        </button>
      </div>
    </div>
  );
}

function DeclineNote3({ toggle, handleClick }) {
  return (
    <div
      style={{ transform: toggle === "declined-before" && `translateX(${0}%)` }}
      className="noti-job decline-warning">
      <div className="noti-job-warning">
        <h2>Oops!</h2>
        <p className="warning-text">Sorry you have declined this job request before!</p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleClick} className="accept-btn">
          Got it
        </button>
      </div>
    </div>
  );
}

export { AcceptNote3, DeclineNote3 };
