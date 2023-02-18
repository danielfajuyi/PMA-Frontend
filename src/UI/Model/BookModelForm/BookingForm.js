import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ toggleForm, handleForm, profileId, postMsg }) {
  const [name, setName] = useState("");
  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function sendForm() {
    if (description && price && dateTo && dateFrom && countryName && stateName && name) {
      let jobMsg = {
        id: profileId,
        clientName: name,
        state: stateName,
        country: countryName,
        dateFrom: dateFrom,
        dateTo: dateTo,
        jobPrice: price,
        jobDescription: description,
      };

      postMsg(jobMsg);

      handleForm();
      setName("");
      setStateName("");
      setCountryName("");
      setDateFrom("");
      setDateTo("");
      setPrice("");
      setDescription("");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    name === "name" && setName(value);
    name === "state" && setStateName(value);
    name === "country" && setCountryName(value);
    name === "date-from" && setDateFrom(value);
    name === "date-to" && setDateTo(value);
    name === "price" && setPrice(value);
    name === "description" && setDescription(value);
  }

  return (
    <section
      style={{ transform: !toggleForm && `translateX(${100}%)` }}
      className="booking-section">
      <form className="book-form" onSubmit={(e) => e.preventDefault()}>
        <i onClick={handleForm} className="fa-solid fa-xmark close-icon"></i>
        <h3>Book Model</h3>

        <div className="form__top-input">
          <label htmlFor="name"> Name</label>
          <input
            onChange={handleChange}
            className="bookform-text"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            value={name}
            spellCheck="false"
            required
          />
        </div>
        <div className="input__list">
          <div className="input-rapper">
            <label htmlFor="state"> State </label>
            <input
              onChange={handleChange}
              type="text"
              className="bookform-text"
              id="state"
              name="state"
              placeholder="State name..."
              value={stateName}
              spellCheck="false"
              required
            />
          </div>

          <div className="input-rapper">
            <label htmlFor="country"> Country </label>
            <input
              onChange={handleChange}
              type="text"
              className="bookform-text"
              id="country"
              name="country"
              placeholder="Country name..."
              value={countryName}
              spellCheck="false"
              required
            />
          </div>

          <div className="input-rapper">
            <label htmlFor="date-from"> Date From </label>
            <input
              onChange={handleChange}
              type="date"
              className="bookform-text"
              id="date-from"
              name="date-from"
              value={dateFrom}
              required
            />
          </div>

          <div className="input-rapper">
            <label htmlFor="date-to">Date To</label>
            <input
              onChange={handleChange}
              type="date"
              className="bookform-text"
              id="date-to"
              name="date-to"
              value={dateTo}
              required
            />
          </div>

          <div className="input-rapper">
            <label htmlFor="price">Price</label>
            <input
              onChange={handleChange}
              type="text"
              id="price"
              className="bookform-text"
              name="price"
              placeholder="Amount..."
              value={price}
              spellCheck="false"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">Job Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            id="description"
            className="bookform-textarea"
            cols="30"
            rows="5"
            placeholder="Job description"
            value={description}
            spellCheck="false"
            required></textarea>
        </div>
        <button onClick={sendForm} type="submit" className="dark--btn send-btn">
          Send
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
