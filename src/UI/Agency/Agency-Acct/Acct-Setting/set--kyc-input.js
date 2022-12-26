//Just incase you are wondering
//what is the functions of the three different inputs
//they are the same and serving the same purpose
//i just wanted to style they differently...
//since i have created the component already...
//i duplicate the input so that i can style they easily

//input 1
function Input1({ id, label, value, placeholder, error, handleChange }) {
  return (
    <li className="set_details--input-1">
      <label className="set_input--label" htmlFor={id}>
        {label}
        <input
          onChange={handleChange}
          className="set_input--field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          spellCheck={false}
          required
        />
        <p className="error-text">{error}</p>
      </label>
    </li>
  );
}

//input 2
function Input2({ id, label, value, placeholder, error, handleChange }) {
  return (
    <li className="set_details--input-2">
      <label className="set_input--label" htmlFor={id}>
        {label}
        <input
          onChange={handleChange}
          className="set_input--field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          spellCheck={false}
          required
        />
        <p className="error-text">{error}</p>
      </label>
    </li>
  );
}

//input 3
function Input3({ id, label, value, placeholder, error, handleChange }) {
  return (
    <li className="set_details--input-3">
      <label className="set_input--label" htmlFor={id}>
        {label}
        <input
          onChange={handleChange}
          className="set_input--field"
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          spellCheck={false}
          required
        />
        <p className="error-text">{error}</p>
      </label>
    </li>
  );
}

export { Input1, Input2, Input3 };
