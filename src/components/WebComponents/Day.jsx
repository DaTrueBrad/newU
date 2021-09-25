import React, {useState} from 'react'
import { Collapse } from 'react-collapse'

function Day(props) {
  const [isActive, setActive] = useState(false);
  const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  function ArrowDirection() {
    if(isActive) {
      return <i class='bx bxs-down-arrow' ></i>
    } else {
      return <i class='bx bxs-right-arrow'></i>
    }
  }

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  return (
    <div>
      <section className="day-of-week-container" onClick={setVisability}>
        <ArrowDirection />
        <h3>{props.element}</h3>
      </section>
      <Collapse isOpened={isActive}>
        <div className="input-container">
          <section className="daily-exercise-container">
            <input type="text" placeholder="Exercise Name" className='exercise-input'/>
            <input type="text" placeholder="Sets" className='short-input'/>
            <input type="text" placeholder="Reps" className='short-input'/>
            <input type="text" placeholder="Weight" className='short-input'/>
          </section>
          <button>Add</button>
        </div>
      </Collapse>
    </div>
  )
}

export default Day
