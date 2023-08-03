import React, {useState} from 'react'
import { styled } from "styled-components";
import RoleDice from './RoleDice';
import { Button, OutLineButton } from '../styled/Button';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import Rule from './Rule';



const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        
        if(!selectedNumber) {
            setError("You Have not selected any numbers.");
            return; 
        }
        setError("");

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);


        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }
        else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }
  return (
    <Main>
    <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector error={error} setError={setError}
      selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>

    <div className="btns">
      <OutLineButton onClick={resetScore}>Reset</OutLineButton>
      <Button
         onClick={() => setShowRules((prev) => !prev)}
      >{showRules ? "Hide" : "Show"} Rules</Button>
    </div>

     {showRules && <Rule />}
  </Main>
  )
}

export default GamePlay

const Main = styled.div`
padding-top: 40px;
   .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }     
   .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* max-width: 220px; */}
    align-items:center;
    gap: 10px;
    margin-top: 40px;
   }
`;
