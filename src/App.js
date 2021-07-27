// import countdown from "countdown";
import Countdown from "./components/Countdown/Countdown";
import DatePicker from "./components/DatePicker/DatePicker";
import Buttons from "./components/Buttons/Buttons";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Countdown />
      <DatePicker />
      <Buttons />
    </div>
  );
}

export default App;
