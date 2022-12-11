function FormNavBtn({ btnText, name, handleClick, type }) {
  return (
    <button
      style={{ backgroundColor: btnText !== "Back" && "#ff007a" }}
      onClick={() => handleClick(btnText)}
      type={type}
      name={name}
      className="kyc-back-btn dark--btn bold-text on-hover"
    >
      {btnText}
    </button>
  );
}

export default FormNavBtn;
