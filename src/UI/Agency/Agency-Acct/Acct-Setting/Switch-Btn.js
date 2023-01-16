function SwitchBtn({ switchText, handleSwitch, toggleSwitch }) {
  return (
    <div
      onClick={() => handleSwitch(switchText)}
      className="set--toggle colored-hover bold-text"
    >
      {switchText}
      <div className="toggle--slider on-hover">
        <div
          style={{
            backgroundColor: toggleSwitch && "#ff007a",
          }}
          className="set-slider"
        ></div>
        <div
          style={{
            transform: toggleSwitch && `translateX(${120}%)`,
          }}
          className="slide--thumb"
        ></div>
      </div>
    </div>
  );
}

export default SwitchBtn;
