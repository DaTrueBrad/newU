import React, {useState} from 'react'
import Week from './Week'

function BuildWorkout() {
  const [userInput, setUserInput] = useState(0)
  const [days, setDays] = useState(1)

  

  function RenderWeeks() {
    const fields: JSX.Element[] = [];
    if(days > 24) {
      for(let i = 1; i <= 24; i++) {
        fields.push(<Week id={i} key={i} weekNum={i} />)
      }
    } else {
      for(let i = 1; i <= days; i++) {
        fields.push(<Week id={i} key={i} weekNum={i} />)
      }
    }
      
    return fields
    }

  function daysHandler(e) {
    if(e) {
      setUserInput(e)
    } else {
      setUserInput(1)
    }
  }

  function buttonClick() {
    setDays(userInput)
    RenderWeeks()
  }

  

  return (
    <div>
      <h1>Build Program</h1>
      <div className="input-container">
        <h2>How many weeks?</h2>
        <p>(Max of 24 weeks)</p>
        <input type="number" min='1' max='24' onChange={(e) => daysHandler(e.target.value)}/>
        <button onClick={buttonClick}>Create</button>
      </div>
      <div id="week-container">
        <RenderWeeks />
      </div>
    </div>
      
    
    
  )
}

export default BuildWorkout
