import React from 'react'
import Day from "./Day"

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
