import React from "react";
import CountdownElement from "../CountdownElement/CountdownElement";
import "./index.css";

const Countdown = ({ countdown }) => {
  return (
    <div className="countdown__container">
      <CountdownElement unit={countdown.days} label="Days" />
      <CountdownElement unit={countdown.hours} label="Hours" />
      <CountdownElement unit={countdown.minutes} label="Minutes" />
      <CountdownElement unit={countdown.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
