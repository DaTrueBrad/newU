import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import Day from "./Day"

function DaysOfWeek(props) {
  const [isActive, setActive] = useState(false);

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  function CreateDays() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let days = daysArr.map((element, index) => {
      console.log(element)
      return <Day element={element} index={index} />
    })
    return days
  }

  return (
    <div >
      <CreateDays />
      {/* <section className="day-of-week-container" onClick={setVisability}>
        <i class='bx bxs-right-arrow' ></i>
        <h3>Monday</h3>
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
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Tuesday</h3>
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
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Wednesday</h3>
      </section>
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Thursday</h3>
      </section>
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Friday</h3>
      </section>
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Saturday</h3>
      </section>
      <section className="day-of-week-container">
        <i class='bx bxs-right-arrow' ></i>
        <h3>Sunday</h3>
      </section> */}
    </div>
  )
}

export default DaysOfWeek
