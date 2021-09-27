import React, {useState} from 'react'
import Day from "./Day"

function DaysOfWeek(props) {
  const {weeknum} = props
  const [isActive, setActive] = useState(false);
  const [levelTwo, setLevelTwo] = useState([{}])

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  const WeekNum = weeknum
  let newData = []
  let object = {
    WeekNum: {
      newData
    }
  }
  console.log(object)

  

  const eventhandler = async (data) => {
    newData = [...newData, data[0]]
    
    console.log('object', object)
  }

  let newerArr = []

  function CreateDays() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let days = daysArr.map((element, index) => {
      console.log(newerArr)
      return <Day element={element} index={index} onChange={eventhandler}/>
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
