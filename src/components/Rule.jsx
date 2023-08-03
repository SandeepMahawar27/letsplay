import React from 'react'
import { styled } from 'styled-components'


const Rule = () => {
  return (
    <div>
         <RulesContainer>
          <h2>How to Play dice game</h2>
          <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
                after click on dice if selected number is equal to dice number you will get same point 
                as dice{""}
            </p>
            <p>if you get wrong guess then 2 point will be deducted</p>
          </div>
    </RulesContainer>
    </div>
  )
}

export default Rule

const RulesContainer = styled.div`
     background-color: gray;
     padding: 20px;
     margin: 0 auto;
     max-width: 800px;
     margin-top:40px;
     border-radius: 10px;
     margin-bottom: 20px;

     h2{
        font-size: 24px;
        font-wight: bold;
     }
     .text{
        margin-top: 24px;
     }
`;