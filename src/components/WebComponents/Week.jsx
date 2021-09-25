import React, {useState} from 'react'
import DaysOfWeek from './DaysOfWeek'
import {Collapse} from "react-collapse"

function Week(props) {
  const [isActive, setActive] = useState(false);

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  return (
    <div>
      <div className="week-container" onClick={setVisability}>
        <i class='bx bxs-right-arrow' ></i>
        <h2>Week {props.weekNum}</h2>
      </div>
      <Collapse isOpened={isActive}>
      <div>
        <section className="day-of-week-container">
          <i class='bx bxs-right-arrow' ></i>
          <h3>Monday</h3>
        </section>
          <Collapse isOpened={true}>
            <section>
              <input type="text" />
            </section>
          </Collapse>
        <section className="day-of-week-container">
          <i class='bx bxs-right-arrow' ></i>
          <h3>Tuesday</h3>
        </section>
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
        </section>
      </div>
      </Collapse>
    </div>
  )
}

export default Week
