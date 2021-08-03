import React from "react";
import "./index.css";

const Buttons = ({ startCountdown }) => {
  return (
    <div className="buttons__container">
      <button className="buttons__reset" onClick={() => startCountdown(false)}>
        Reset
      </button>
      <button className="buttons__countdown" onClick={startCountdown}>
        Start countdown!
      </button>
    </div>
  );
};

export default Buttons;
