function AcceptNote2({ toggle, handleClick }) {
  return (
    <div
      style={{ transform: toggle === "accepted" && `translateX(${0}%)` }}
      className="noti-job accept-warning">
      <div className="noti-job-warning">
        <h2>
          <i
            className="fa-solid fa-circle-check fa-beat-fade fa-xl"
            style={{ color: " #ff0161" }}></i>
        </h2>
        <p className="warning-text">
          You have just accepted a job request, wishing you all the best on this one.
        </p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleClick} className="accept-btn">
          Got it!
        </button>
      </div>
    </div>
  );
}

function DeclineNote2({ toggle, handleClick }) {
  return (
    <div
      style={{ transform: toggle === "declined" && `translateX(${0}%)` }}
      className="noti-job decline-warning">
      <div className="noti-job-warning">
        <h2>
          <i
            className="fa-sharp fa-solid fa-circle-xmark fa-beat-fade fa-xl"
            style={{ color: " #ff0161" }}></i>
        </h2>
        <p className="warning-text">
          You have just decline a job request, we hope you find one suitable for yourSelf.
        </p>
      </div>
      <div className="noti-job-btn">
        <button onClick={handleClick} className="accept-btn">
          Got it
        </button>
      </div>
    </div>
  );
}

export { AcceptNote2, DeclineNote2 };
