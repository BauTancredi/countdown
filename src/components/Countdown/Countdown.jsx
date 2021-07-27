import React from "react";
import CountdownElement from "../CountdownElement/CountdownElement";
import "./index.css";

const Countdown = () => {
  return (
    <div className="countdown__container">
      <CountdownElement />
      <CountdownElement />
      <CountdownElement />
      <CountdownElement />
    </div>
  );
};

export default Countdown;
