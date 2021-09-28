import React, {useState} from 'react'
import Day from "./Day"

function DaysOfWeek(props) {
  const {weeknum} = props
  const [isActive, setActive] = useState(false);
  const [levelTwo, setLevelTwo] = useState([{}])

  function setVisability(e) {
    setActive(!isActive)
  }

  let newData = []
  let object = {
    [weeknum]: {
      newData
    }
  }


  const eventhandler = async (data) => {
    // newData = [...newData, data[0]]
    // console.log('we are in the parent with:', data)

    if(newData.length === 0) {
      newData = [data]
    } else {
      newData = [...newData, data]
    }
  }

  let newerArr = []

  function CreateDays() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let days = daysArr.map((element, index) => {
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
