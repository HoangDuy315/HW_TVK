import { useState } from "react";
import index from "./components/index";

function App() {
  return (
    // 	<div id="heading" class="bg-black">
    //   <div class="container-padding">
    //     <h1 class="font-white font-900 spacing-2 big-size text-center">
    //       🥁 Drum kit
    //     </h1>
    //   </div>
    // </div>

    <div class="container-padding text-center bg-black add-padding">
      <button class="w drum font-700 medium-size font-white">w</button>
      <button class="a drum font-700 medium-size font-white">a</button>
      <button class="s drum font-700 medium-size font-white">s</button>
      <button class="d drum font-700 medium-size font-white">d</button>
      <button class="j drum font-700 medium-size font-white">j</button>
      <button class="k drum font-700 medium-size font-white">k</button>
      <button class="l drum font-700 medium-size font-white">l</button>
      <button class="i drum font-700 medium-size font-white">i</button>
      <button class="o drum font-700 medium-size font-white">o</button>
      <button class="p drum font-700 medium-size font-white">p</button>
    </div>
  );
}

export default App;
