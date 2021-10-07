import axios from 'axios'
import React, {useState} from 'react'
import Week from './Week'

function BuildWorkout() {
  const [userInput, setUserInput] = useState(0)
  const [days, setDays] = useState(1)
  // const [globalVar, setGlobalVar] = useState(1)
  const [isActive, setActive] = useState("false");

  let newData = {}
  const eventHandler = (data) => {
    console.log('Top Component:', data)
    newData[`${data.name}`] = data
  }
  

  function RenderWeeks(props) {
    //! If the below lines ever stop working, just make it read this: const fields: JSX.Element[] = [];
    const fields = [];
    if(days > 24) {
      for(let i = 1; i <= 24; i++) {
        // setGlobalVar(24)
        fields.push(<Week id={i} key={i} weekNum={i} onChange={eventHandler}/>)
      }
    } else if (!days) {
      // setGlobalVar(1)
      fields.push(<Week id={1} key={1} weekNum={1} onChange={eventHandler}/>)
    }
     else {
      //  setGlobalVar(days)
      for(let i = 1; i <= days; i++) {
        fields.push(<Week id={i} key={i} weekNum={i} onChange={eventHandler}/>)
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
  
  function saveWorkout() {
    let workout = {
      name: "Cool Workout",
      data: newData
    }
    console.log('this is what we build:', workout)
    axios.post('/workouts', workout)
    .then((res) => console.log(res.data))
  }
  
  return (
    <div id='build-workout-page'>
      <h1 id='page-title'>Build Program</h1>
      <p>Be warned, this page does NOT save your data if you navigate away from it during a build. Please have an idea of what program you want to design, then come here and build it.</p>
      <div className="button-container" style={{alignSelf: "center"}}>
      <button style={{alignSelf: "center"}} onClick={buttonClick}>Restart</button>
      </div>
      <div className="workout-input-container" id={`${isActive ? "" : "hide-workout"}`}>
        <h2>How many weeks?</h2>
        <p>(Max of 24 weeks)</p>
        <input type="number" min='1' max='24' onChange={(e) => daysHandler(e.target.value)}/>
        <button onClick={buttonClick}>Create</button>
      </div>
        <div id="week-container">
        {/* <form action=""> */}
        <RenderWeeks />
          <button onClick={saveWorkout} id='save-btn'>Save</button>
        {/* </form> */}
      </div>
      
    </div>
      
    
    
  )
}

export default BuildWorkout
