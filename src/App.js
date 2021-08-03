import { useState } from "react";
import Countdown from "./components/Countdown/Countdown";
import DatePicker from "./components/DatePicker/DatePicker";
import Buttons from "./components/Buttons/Buttons";
import "./index.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [countdown, setCountdown] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  const startCountdown = (restart = true) => {
    // Update the count down every 1 second
    const x = setInterval(function () {
      const countDownDate = new Date(selectedDate).getTime();

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setSelectedDate(null);
        setCountdown({
          days: "--",
          hours: "--",
          minutes: "--",
          seconds: "--",
        });
      }
    }, 1000);
  };

  return (
    <div className="App">
      <Countdown countdown={countdown} />
      <DatePicker setSelectedDate={setSelectedDate} />
      <Buttons
        setSelectedDate={setSelectedDate}
        startCountdown={startCountdown}
      />
    </div>
  );
}

export default App;
