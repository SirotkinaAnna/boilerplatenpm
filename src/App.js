
import './App.css';
import Drumpad from './components/Drumpad';
function App() {
  return (
    <div className='flex w-screen h-screen'>
      <div id="drum-machine" className='w-1/2 m-auto bg-red-800 grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <Drumpad id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          <Drumpad id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          <Drumpad id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          <Drumpad id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          <Drumpad id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          <Drumpad id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          <Drumpad id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          <Drumpad id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          <Drumpad id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" /></div>
        <div id="display">Text</div>
      </div>
    </div>
  );
}

export default App;
