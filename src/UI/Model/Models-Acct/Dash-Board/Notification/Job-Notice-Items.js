// Job notice text function component
function JobNotice({ setToggle, item }) {
  const { name, price, state, country, dateFrom, dateTo, jobDescription } = item.details;
  return (
    <div className="noti-job">
      <p className="noti-job-title">{name} requests for your service </p>

      <div className="noti-job-list">
        <span className="job-item">
          <p className="job-item-label">From:</p>
          <p>{dateFrom}</p>
        </span>
        <span className="job-item">
          <p className="job-item-label">To:</p>
          <p>{dateTo}</p>
        </span>
        <span className="job-item">
          <p className="job-item-label">Price:</p>
          <p>{price}</p>
        </span>
        <span className="job-item">
          <p className="job-item-label">State:</p>
          <p>{state}</p>
        </span>
        <span className="job-item">
          <p className="job-item-label">Country:</p>
          <p>{country}</p>
        </span>
      </div>

      <div>
        <p className="job-item-label">Job Description:</p>
        <p className="noti-job-description">{jobDescription}</p>
      </div>

      <div className="noti-job-btn">
        <button onClick={() => setToggle("accept")} className="accept-btn">
          Accept
        </button>
        <button onClick={() => setToggle("decline")} className="decline-btn">
          Decline
        </button>
      </div>
    </div>
  );
}

export default JobNotice;
