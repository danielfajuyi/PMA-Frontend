function EditBtn({
  btnText,
  section,
  handleActiveEdit,
  handlePassword,
  handleEmail,
  isError,
}) {
  function handleClick() {
    handleActiveEdit(section, btnText);

    section === "update-email" && handleEmail(btnText);
    section === "reset-password" && handlePassword(btnText);
  }

  return (
    <button
      disabled={isError && true}
      onClick={handleClick}
      className="edit--btn colored-hover"
      type="button"
    >
      {btnText}
      <i className="fa-solid fa-pen-to-square"></i>
    </button>
  );
}

export default EditBtn;
