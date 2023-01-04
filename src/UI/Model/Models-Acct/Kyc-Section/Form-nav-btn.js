function FormNavBtn({ btnText, name, handleClick, type, submit }) {
  return (
    <button
      style={{
        opacity: submit && 0.4,
      }}
      onClick={() => handleClick(btnText)}
      type={type}
      name={name}
      className={
        btnText === "Back"
          ? "kyc-nav-btn bold-text cancel-btn "
          : "kyc-nav-btn bold-text yes-btn "
      }
      disabled={submit && true}
    >
      {btnText}
    </button>
  );
}

export default FormNavBtn;
