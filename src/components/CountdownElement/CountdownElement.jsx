import React from "react";
import "./index.css";

const CountdownElemnt = ({ unit, label }) => {
  return (
    <div className="countdown__element__container">
      <div className="countdown__element__block">
        <h2>{unit}</h2>
      </div>
      <p className="countdown__element__label">{label}</p>
    </div>
  );
};

export default CountdownElemnt;
