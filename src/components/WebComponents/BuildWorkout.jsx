import React, {useState} from 'react'
import Week from './Week'

function BuildWorkout() {
  const [userInput, setUserInput] = useState(0)
  const [days, setDays] = useState(1)
  const [isActive, setActive] = useState("false");

  

  function RenderWeeks() {
    

    //! If the below lines ever stop working, just make it read this: const fields: JSX.Element[] = [];
    const fields = [];
    if(days > 24) {
      for(let i = 1; i <= 24; i++) {
        fields.push(<Week id={i} key={i} weekNum={i} />)
      }
    } else if (!days) {
      fields.push(<Week id={1} key={1} weekNum={1} />)
    }
     else {
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
    setActive(!isActive)
  }

  
  
  return (
    <div>
      <h1 id='page-title'>Build Program</h1>
      <div className="button-container">
      <button style={{alignSelf: "center"}} onClick={buttonClick}>Change #</button>
      </div>
      <div className="workout-input-container" id={`${isActive ? "" : "hidden"}`}>
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
