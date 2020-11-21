import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [keys, setKeys] = useState([
    "Q",
    "W",
    "E",
    "A",
    "S",
    "D",
    "Z",
    "X",
    "C"
  ]);
  return (
    <div id="drum-machine">
      <div id="display">
        {keys.map((key, index) => (
          <Box text={key} key={index} />
        ))}
      </div>
    </div>
  );
};

const Box = (props) => <div className="Box">{props.text}</div>;

export default App;
