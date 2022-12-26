function AlertBox({ title, note, icon, setToggleModal }) {
  return (
    <div className="--alert-box">
      <h2 className="--alert-title">
        {title}
        {icon && <i className="fa-solid fa-circle-check --success-icon"></i>}
      </h2>
      <p className="--alert-text">
        {<span className="bold-text colored-text">Note: </span>}
        {note}
      </p>
      <div className="--alert-btn">
        <button
          onClick={() => setToggleModal((prev) => !prev)}
          className="--del-alert-btn bold-text --yes-btn"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default AlertBox;
