import { useEffect, useState } from 'react';
import './App.css';
import Drumpad from './components/Drumpad';
function App() {
  const [myText, setText] = useState("");

  const data = [{
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    key: "q",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    key: "w",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    key: "e",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    key: "a",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    key: "s",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    key: "d",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    key: "z",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    key: "x",
  }, {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    key: "c",
  },
  ]
  const handleKey = (event) => {

    const res = data.filter((it) => {
      if (event.key === it.key) {
        return it.src
      }
      return null;
    })
    console.log("res", res)
    if (res.length > 0) {

      const myAudio = document.querySelector("audio#" + event.key.toUpperCase());
      myAudio.play();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // useEffect(() => {
  //   window.addEventListener('keypress', e => {
  //     console.log(e.key)
  //   });
  // }, []);
  return (
    <div className='flex w-screen h-screen'>
      <div id="drum-machine" className='w-1/2 m-auto bg-red-800 grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <Drumpad id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" text="1" setText={setText} />
          <Drumpad id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" text="2" setText={setText} />
          <Drumpad id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" text="3" setText={setText} />
          <Drumpad id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" text="4" setText={setText} />
          <Drumpad id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" text="5" setText={setText} />
          <Drumpad id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" text="6" setText={setText} />
          <Drumpad id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" text="7" setText={setText} />
          <Drumpad id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" text="8" setText={setText} />
          <Drumpad id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" text="9" setText={setText} /></div>
        <div id="display">{myText}</div>
      </div>
    </div>
  );
}

export default App;
