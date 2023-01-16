//Just incase you are wondering
//what is the functions of the three different inputs
//they are the same and serving the same purpose
//i just wanted to style they differently...
//since i have created the component already...
//i duplicate the input so that i can style they easily

//input 1
function Input1({
  id,
  label,
  value,
  placeholder,
  error,
  handleChange,
  showError,
}) {
  return (
    <li className="details--input-1">
      <label className="kyc--input-label" htmlFor={id}>
        <span className="required--icon_rapper">
          {label}
          {error === "" ? (
            <i className="fa-solid fa-circle-check valid--icon"></i>
          ) : (
            <i className="fa-solid fa-star required--icon"></i>
          )}
        </span>

        <input
          onChange={handleChange}
          className="kyc--input-field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          required
        />
        {showError && <p className="error-text">{error}</p>}
      </label>
    </li>
  );
}

//input 2
function Input2({
  id,
  label,
  value,
  placeholder,
  error,
  handleChange,
  showError,
}) {
  return (
    <li className="details--input-2">
      <label className="kyc--input-label" htmlFor={id}>
        <span className="required--icon_rapper">
          {label}
          {error === "" ? (
            <i className="fa-solid fa-circle-check valid--icon"></i>
          ) : (
            <i className="fa-solid fa-star required--icon"></i>
          )}
        </span>

        <input
          onChange={handleChange}
          className="kyc--input-field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          required
        />
        {showError && <p className="error-text">{error}</p>}
      </label>
    </li>
  );
}

//input 3
function Input3({
  id,
  label,
  value,
  placeholder,
  error,
  handleChange,
  showError,
}) {
  return (
    <li className="details--input-3">
      <label className="kyc--input-label" htmlFor={id}>
        <span className="required--icon_rapper">
          {label}
          {error === "" ? (
            <i className="fa-solid fa-circle-check valid--icon"></i>
          ) : (
            <i className="fa-solid fa-star required--icon"></i>
          )}
        </span>

        <input
          onChange={handleChange}
          className="kyc--input-field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          required
        />
        {showError && <p className="error-text">{error}</p>}
      </label>
    </li>
  );
}

export { Input1, Input2, Input3 };
