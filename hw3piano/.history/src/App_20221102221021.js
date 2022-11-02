import "./App.css";
import { Piano } from "./components/Piano.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Press a -> h to play
        <Piano />
      </header>
    </div>
  );
}

export default App;
