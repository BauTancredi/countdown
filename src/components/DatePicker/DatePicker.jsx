import React from "react";
import "./index.css";

const DatePicker = () => {
  return (
    <div className="datepicker__container">
      <p className="datepicker__label">Select a date</p>
      <input className="datepicker__input" type="date" />
    </div>
  );
};

export default DatePicker;
