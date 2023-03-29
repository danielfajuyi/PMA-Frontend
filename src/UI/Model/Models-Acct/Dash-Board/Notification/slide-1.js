//Accept Note function component
function AcceptNote({ handleAccept, toggle, setToggle }) {
  return (
    <div
      style={{ transform: toggle === "accept" && `translateX(${0}%)` }}
      className="noti-job accept-warning">
      <div className="noti-job-warning">
        <h2>NOTE!</h2>
        <p className="warning-text">
          Accepting job request gives Client access to your inbox, this is to enable further
          conversation as regards to the Job.
        </p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleAccept} className="accept-btn">
          Accept
        </button>
        <button onClick={() => setToggle("")} className="decline-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

//Decline Note function component
function DeclineNote({ handleDecline, toggle, setToggle }) {
  return (
    <div
      style={{ transform: toggle === "decline" && `translateX(${0}%)` }}
      className="noti-job decline-warning">
      <div className="noti-job-warning">
        <h2>Decline!</h2>
        <p className="warning-text">
          Hey! are you sure you don't want to accept this job offer? this might be an opportunity
          for you to grow your modeling carrier.
        </p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleDecline} className="decline-btn">
          Decline
        </button>
        <button onClick={() => setToggle("")} className="accept-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export { AcceptNote, DeclineNote };
