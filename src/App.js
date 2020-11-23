import React, { useEffect, useState } from "react";
import "./styles.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const App = () => {
  const [volume, setVolume] = useState(1);

  return (
    <div id="drum-machine" className="container">
      <div id="display" className="display">
        {bankOne.map((key, index) => (
          <DrumPad
            text={key.keyTrigger}
            key={index}
            audioUrl={key.url}
            volume={volume}
          />
        ))}
        <br />
        <h1>Press a key</h1>
        <br />
        <h4>Volume</h4>
        <input
          className="w-50"
          type="range"
          step={0.01}
          volume={volume}
          onChange={(e) => setVolume(e.target.value)}
          max={1}
          min={0}
        />
      </div>
    </div>
  );
};

const DrumPad = ({ text, audioUrl, volume }) => {
  // const sound = createRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    // return () => {
    //   document.removeEventListener("keydown", handleKey);
    // };
  });

  useEffect(() => {}, []);

  const playSound = () => {
    const audioTag = document.getElementById(text);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.currentTime = 0;
    audioTag.volume = volume;
    audioTag.play();

    const parent = audioTag.parentNode;
    const display = parent.parentNode;
    display.querySelector("h1").innerText = `${text} is playing`;
  };

  const handleKey = (event) => {
    if (event && event.key.toUpperCase() === text) {
      playSound();
    }
  };

  return (
    <div
      className={`drum-pad ${active && "active"}`}
      onClick={playSound}
      id={`drum-${text}`}
    >
      {text}
      <audio src={audioUrl} className="clip" id={text} />
    </div>
  );
};

export default App;
