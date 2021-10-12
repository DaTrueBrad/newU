import React, {useState} from 'react'
import {Collapse} from "react-collapse"
import DaysOfWeek from './DaysOfWeek'

function Week(props) {
  const [isActive, setActive] = useState(false);
  const [hideBtn, setHideBtn] = useState(false)
  function ArrowDirection() {
    if(isActive) {
      return <i className='bx bxs-down-arrow' ></i>
    } else {
      return <i className='bx bxs-right-arrow'></i>
    }
  }
  let newData = {}
  const setVisability = (e) => setActive(!isActive)

  function eventHandler(data) {
    console.log('week data:', data)
    newData[`${data.name}`] = data.exercises
    // newData.push(data)
    console.log('new format:', newData)
  }

  function sendUp() {
    let object = {
      name: `Week_${props.weekNum}`,
      days: newData
    }
    setHideBtn(!hideBtn)
    props.onChange(object)
  }

  return (
    <div className='collapse-container'>
      <div className="week-container" onClick={setVisability}>
        <ArrowDirection />
        <h2>Week {props.weekNum}</h2>
      </div>
      <Collapse isOpened={isActive}>
        <DaysOfWeek weeknum={props.weekNum} onChange={eventHandler}/>
        <button className={hideBtn ? "invisible" : ""} onClick={sendUp}>Save Week</button>
      </Collapse>
      
    </div>
  )
}

export default Week
