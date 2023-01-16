function DiscardAlert({ handleDiscard, toggleDiscard }) {
  return (
    <section
      style={{ transform: toggleDiscard && `translateX(${0}%)` }}
      className="--modal-section"
    >
      <div className="--alert-box">
        <h2 className="--alert-title">Do you want to disCard changes?</h2>

        <p className="--alert-text">
          <span className="bold-text --colored-text">Note: </span>
          by clicking Yes all unsaved changes will be deleted and progress lost!
        </p>

        <div className="--alert-btn">
          <button
            onClick={() => handleDiscard("No")}
            className="--del-alert-btn bold-text --cancel-btn"
          >
            No?
          </button>
          <button
            onClick={() => handleDiscard("Yes")}
            className="--del-alert-btn bold-text --yes-btn"
          >
            Yes?
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscardAlert;
