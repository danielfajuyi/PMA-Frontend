function SignUpInput({
  type,
  id,
  value,
  placeholder,
  handleChange,
  label,
  error,
}) {
  return (
    <label className="input-rapper" htmlFor={id}>
      <span className="required-icon_rapper">
        {label}
        {error === null ? (
          <i className="fa-solid fa-circle-check valid-icon"></i>
        ) : (
          <i className="fa-solid fa-star required-icon"></i>
        )}
      </span>

      <input
        className="input-field"
        onChange={handleChange}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        required
        spellCheck={false}
        autoComplete="off"
      />
      <p className="error-text">{error}</p>
    </label>
  );
}

export default SignUpInput;

// const handler = PaystackPop.setup({
//   key: "pk_test_2738ea7b83386afd8897e7092bbe084d785adc92",

//   email: userData.email,

//   amount: 1500 * 100,

//   metadata: {
//     name: userData.firstName,
//     mobile: userData.mobileNo,
//   },

//   channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],

//   onClose: function () {
//     alert("Window closed.");
//   },

//   callback: function (response) {
//     let message = "Payment complete! Reference: " + response.reference;
//     alert(message);
//     sendForm();
//   },
// });

// handler.openIframe();
