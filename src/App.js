
import './App.css';
import Drumpad from './components/Drumpad';
function App() {
  return (
    <div className='flex w-screen h-screen'>
      <div id="drum-machine" className='w-1/2 m-auto bg-red-800 grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <Drumpad id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          <Drumpad id="W" />
          <Drumpad id="E" />
          <Drumpad id="A" />
          <Drumpad id="S" />
          <Drumpad id="D" />
          <Drumpad id="Z" />
          <Drumpad id="X" />
          <Drumpad id="C" /></div>
        <div id="display">Text</div>
      </div>
    </div>
  );
}

export default App;
