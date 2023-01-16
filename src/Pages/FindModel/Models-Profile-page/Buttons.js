//link btn section

function LinkBtn({ btnText, handleSection, activeSection }) {
  return (
    <button onClick={handleSection} className="linkBtn btn-shadow">
      {btnText}
    </button>
  );
}

//interactive btn section

function InteractiveBtn({ btnText, btnIcon }) {
  return (
    <button className="interactive-icon">
      <i className={btnIcon}></i>
      <span className="interactive-text">{btnText}</span>
    </button>
  );
}

//view all btn section

function ViewBtn({ handleDisplay, id, btnText }) {
  return (
    <button className="view-more-btn btn-shadow" onClick={() => handleDisplay(id, btnText)}>
      {btnText}
    </button>
  );
}

export { LinkBtn, InteractiveBtn, ViewBtn };
