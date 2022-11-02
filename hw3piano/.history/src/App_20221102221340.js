import "./App.css";
import { Piano } from "./components/Piano.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Press a to h to play node major <br /> and press w, e, t, y, u to play
          flat chord
        </p>
        <Piano />
      </header>
    </div>
  );
}

export default App;
