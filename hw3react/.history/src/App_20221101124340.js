import { useState } from "react";
import Drum from "./components/Drum";
import "./style.css";

function App() {
  const [sounds, setSounds] = useState([
    {
      name: "boom",
      sound: require("./sounds/a.mp3").default,
      key: "A",
    },
    {
      name: "clap",
      sound: require("./sounds/a.mp3").default,
      key: "W",
    },
    {
      name: "hihat",
      sound: require("./sounds/a.mp3").default,
      key: "S",
    },
    {
      name: "kick",
      sound: require("./sounds/a.mp3").default,
      key: "D",
    },
    {
      name: "openhat",
      sound: require("./sounds/a.mp3").default,
      key: "F",
    },
    {
      name: "ride",
      sound: require("./sounds/a.mp3").default,
      key: "G",
    },
    {
      name: "snare",
      sound: require("./sounds/a.mp3").default,
      key: "H",
    },
    {
      name: "tink",
      sound: require("./sounds/a.mp3").default,
      key: "I",
    },
    {
      name: "tom",
      sound: require("./sounds/a.mp3").default,
      key: "O",
    },
    {
      name: "tom",
      sound: require("./sounds/a.mp3").default,
      key: "P",
    },
  ]);

  return (
    <div className="App">
      <h1>React Drumkit</h1>
      <div className="drums">
        {sounds.map((sound, i) => (
          <Drum key={i} letter={sound.key} sound={sound.sound} />
        ))}
      </div>
    </div>
  );
}

export default App;
