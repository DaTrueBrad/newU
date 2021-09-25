import React, {useState} from 'react'
import {Collapse} from "react-collapse"
import DaysOfWeek from './DaysOfWeek'

function Week(props) {
  const [isActive, setActive] = useState(false);

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  function turnVis(e) {
    let collapseValue = e.target.nextElementSibling.isOpened
    if(collapseValue) {
      collapseValue = !collapseValue
    }
  }

  return (
    <div className='collapse-container'>
      <div className="week-container" onClick={setVisability}>
        <i class='bx bxs-right-arrow' ></i>
        <h2>Week {props.weekNum}</h2>
      </div>
      <Collapse isOpened={isActive}>
        <DaysOfWeek />
      </Collapse>
    </div>
  )
}

export default Week
