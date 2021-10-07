import React from 'react'
import Day from "./Day"

function DaysOfWeek(props) {
  // const [isActive, setActive] = useState(false);

  // const setVisability = (e) => setActive(!isActive)

  const eventhandler = (data) => {
    console.log('days week Data:', data)
    
    props.onChange(data)
  }

  function CreateDays() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let days = daysArr.map((element, index) => {
      return <Day element={element} key={index} onChange={eventhandler} weeknum={props.weekNum}/>
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
