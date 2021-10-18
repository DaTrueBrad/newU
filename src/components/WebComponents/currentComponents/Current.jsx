import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner'
import CurrentWeek from './CurrentWeek'

// This whole component tree is very complicated, my best tip is to keep track of where the state of data is going. We cycle through the workout JSON that we requested from the server, and display that info for the user to track. Similar to how the BuildWorkout tree operates.

let res = ""

function Current() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [data, setData] = useState()

  // This function will get the current_workout JSON for the user that is logged in.
  const getWorkout = async () => {
    let id = localStorage.getItem('user')
    res = await axios.get('/workouts', {params: {id: id}})
    if(Object.keys(res.data[0]).length != 0) {
      setName(res.data[0][0].name)
      setId(res.data[0][0].id)
      setData(JSON.parse(res.data[0][0].data))
    }
    console.log('top:', data)
  }
  useEffect(() => {
    getWorkout()
  }, [])
  // Similar to the BuildWorkout component, this will create multiple CurrentWeek components based on how many weeks are in the workout program. Each one will become their own collapsable container.
  function RenderWorkout() {
    let arr = []
    for (let i = 1; i <= Object.keys(data).length; i++) {
      arr.push (<CurrentWeek index={i} data={data}/>)
    }
    return arr
  }
    
  const Display = () => {
    if(data === undefined || Object.keys(data).length === 0) {
      return <Spinner />
    } else {
      return (
        <div className="program-container">
          <h2>{name ? name : "Let's Workout!"}</h2>
          <RenderWorkout />
        </div>
      )
    }
  }

  return (
    <div>
      <Display />
    </div>
  )
}

export default Current
