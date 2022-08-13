import { useState } from "react";
import "./styles.css";
var emojidictionary = {
  "😊": "Smile",
  "😍": "Smiling Face with Heart-Eyes",
  "😏": "Smirking Face",
  "😲": "Astonished Face",
  "😨": "FearFull Face"
};

var knownemojis = Object.keys(emojidictionary);
export default function App() {
  var [output, setvalue] = useState("");
  function changefunction(event) {
    var uservalue = event.target.value;
    output = emojidictionary[uservalue];
    if (output === undefined) {
      output = "we dont have this value in out database";
    }
    setvalue(output);
  }
  function emojiclicked(emoji) {
    var output = emojidictionary[emoji];
    setvalue(output);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={changefunction}></input>
      <div class="output">={output}</div>
      <h3>Known emojis</h3>
      {knownemojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclicked(emoji)}
            style={{ fontSize: "30px", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
