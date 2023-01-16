import "./background.scss";

const Background = (props) => {
  const handleClose = (e) => {
    if (e.target.id === "background") props.childState(false);
  };

  window.addEventListener("custom:dbClick", handleClose);

  const MAX_TIME = 500;
  let lastClick = 0;

  const handleClick = (e) => {
    const delta = e.timeStamp - lastClick;

    if (delta > MAX_TIME) {
      lastClick = e.timeStamp;
      return;
    }
    const doubleClickEvent = new CustomEvent("custom:dbClick", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        delta,
      },
    });
    e.target.dispatchEvent(doubleClickEvent);
    lastClick = 0;
  };

  return (
    <div id="background" onDoubleClick={handleClose} onClick={handleClick}>
      {props.children}
    </div>
  );
};

export default Background;
