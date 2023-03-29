// Job notice text function component
function AcceptNotice({ item }) {
  const { name } = item.details;
  return (
    <div className="accept-noti">
      <p className="noti-job-title">{name} accepted your job request </p>

      <div>
        <p>
          Hi {name}; thank you for reaching out, i have gone through the job request and am glad to
          Accept the offer. hopefully we will make this a success.
        </p>
      </div>
    </div>
  );
}

function DeclineNotice({ item }) {
  const { name } = item.details;
  return (
    <div className="decline-noti">
      <p className="noti-job-title">{name} declined your job request </p>

      <div>
        <p>
          Hi {name}; thank you for reaching out, i have gone through the job request and am Sorry to
          Decline this offer. i hope to make up for this next time. Thanks!
        </p>
      </div>
    </div>
  );
}

export { AcceptNotice, DeclineNotice };
