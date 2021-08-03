import React from "react";
import "./index.css";

const DatePicker = ({ setSelectedDate }) => {
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="datepicker__container">
      <p className="datepicker__label">Select a date</p>
      <input
        className="datepicker__input"
        type="datetime-local"
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
