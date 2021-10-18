import React from 'react'
import Day from "./Day"

// This component creates seven days of the week, and each day gets a value of 0-6 based on the index value (we use this later to parse through the info during the display function in the Current component)

function DaysOfWeek(props) {
  const eventhandler = (data) => props.onChange(data)

  function CreateDays() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let days = daysArr.map((element, index) => {
      return <Day element={element} key={index} number={index} onChange={eventhandler} weeknum={props.weekNum}/>
    })
    return days
  }

  return (
    <div >
      <CreateDays />
    </div>
  )
}

export default DaysOfWeek
