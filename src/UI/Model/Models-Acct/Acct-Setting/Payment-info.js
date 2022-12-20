import "./Email-and-password.css";

function PaymentInfo() {
  return (
    <form className="content-container">
      {/* password section */}

      <section className="set_sections-container">
        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Payment settings</h2>
          <button className="edit-btn colored-hover">
            Reset<i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          Forgot your password or want to change it. Create a new password
        </p>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          please enter previous password used.
        </p>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          Set a new password.
        </p>

        <label className="set-label bold-text" htmlFor="set-password">
          Password:
          <input
            className="set-input-field"
            type="password"
            id="set-password"
            name=""
            placeholder="Enter password"
            value=""
          />
        </label>
      </section>

      {/* email section */}

      <section className="set_sections-container">
        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Update Email</h2>
          <button className="edit-btn colored-hover">
            Update<i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>

        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          Change and update your email address
        </p>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          please enter previous email address used.
        </p>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          Enter a new email address.
        </p>
        <label className="set-label bold-text" htmlFor="set-password">
          email:
          <input
            className="set-input-field"
            type="email"
            id="set-password"
            name=""
            placeholder="Enter email"
            value=""
          />
        </label>
      </section>

      <section className="setting_btn-container">
        <button className="discard-btn dark--btn bold-text on-hover">
          Discard
        </button>
        <button className="save-btn colored--btn bold-text on-hover">
          Save
        </button>
      </section>
    </form>
  );
}

export default PaymentInfo;
