import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/clockSlogon";
import CurrentTime from "./components/CurrentTime";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
