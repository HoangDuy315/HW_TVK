import "./App.css";
import { Piano } from "./components/Piano.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Press a -> h to play</p>
        <Piano />
      </header>
    </div>
  );
}

export default App;
