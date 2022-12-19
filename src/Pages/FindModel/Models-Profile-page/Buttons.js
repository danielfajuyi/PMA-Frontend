function LinkBtn({ btnText, handleSection, activeSection }) {
  let activeLink = {
    backgroundColor: "#ff007a",
    color: "#ffff",
  };

  return (
    <button
      style={activeSection === btnText ? activeLink : null}
      onClick={handleSection}
      className="linkBtn on-hover">
      {btnText}
    </button>
  );
}

function InteractiveBtn({ btnText, btnIcon }) {
  return (
    <button className="interactive-icon">
      <i className={btnIcon}></i>
      {btnText}
    </button>
  );
}

export { LinkBtn, InteractiveBtn };
