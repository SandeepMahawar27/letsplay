import './App.css';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';
import { useState } from 'react';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);   // iska mtlb h true false toggle krna... 
  };

  return(
    <div>
       {
      isGameStarted ? <GamePlay/> : <StartGame  toggle={toggleGamePlay}/>
       }
    </div>
  );
}

export default App;
