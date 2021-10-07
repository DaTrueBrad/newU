import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner'

let res = {}

function Custom() {
  const [data, setData] = useState()
  const GetWorkouts = async () => {
    let id = +localStorage.getItem('user')
    res = await axios.get(`/myworkouts`, {params: {id: +id}});
    setData(res.data)
    console.log('yes, it wokrs')
  }
  useEffect(() => {
    GetWorkouts()
  }, [])

  const Display = () => {
    if (data === undefined) {
      return <Spinner />
    } else {
      const workoutCards = data.map((element, index) => {
        return (
          <div key={index} element={element} className="custom-workout-card">
            <h2>{element.name}</h2>
            <h3>ID: {element.id}</h3>
            <h3>Length: {Object.keys(JSON.parse(element.data)).length} week(s)</h3>
          </div>
        )
      })
      return workoutCards
    }
  }
  
  return (
    <div>
      <Display />
    </div>
  )
}

export default Custom
