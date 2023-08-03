import { styled } from 'styled-components'

const RoleDice = ({currentDice, roleDice}) => {
 
// console.log(currentDice)

  return (
    <DiceContainer>
         <div className='dice'
         onClick={roleDice}
         >
           <img src={`/images/dice/dice_${currentDice}.png`} alt='dice 1' width={80}/>
           {/* <img src="/images/amazon.png" alt="amazone-logo" /> */}
            
         </div>
         <p>Click on Dice to roll</p> 
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
   display :flex;
   justify-content: center;
   margin-top: 48px;
   flex-direction: column;
   align-items: center;

   .dice{
    cursor: pointer;
   }
   p{
    font-size: 24px;
   }
`;