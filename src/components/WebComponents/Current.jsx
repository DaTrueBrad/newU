import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../Spinner'

let res = ""

function Current() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [data, setData] = useState()

  const getWorkout = async () => {
    res = await axios.get('/workouts')
    setName(res.data.name)
    setId(res.data.id)
    setData(JSON.parse(res.data.data))
  }
  useEffect(() => {
    getWorkout()
  }, [])

  function RenderWorkout() {
    let arr = []
    //todo find a variable for the Monday section, figure out how to loop through it.
    for (let i = 1; i <= Object.keys(data).length; i++) {
      arr.push (
        <div className='week-container'>
          <h2>Week {i}</h2>
        </div>
      )
      for (let j = 0; j < Object.keys(data[`Week_${i}`]['days']).length; j++) {
        switch (Object.keys(data[`Week_${i}`]['days'])[j]) {
          case '0':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Monday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
              
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][0]).length; x++) {
              let day = data[`Week_${i}`]['days'][0][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '1':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Tuesday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][1]).length; x++) {
              let day = data[`Week_${i}`]['days'][1][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '2':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Wednesday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][2]).length; x++) {
              let day = data[`Week_${i}`]['days'][2][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '3':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Thursday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][3]).length; x++) {
              let day = data[`Week_${i}`]['days'][3][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '4':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Friday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][4]).length; x++) {
              let day = data[`Week_${i}`]['days'][4][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '5':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Saturday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][5]).length; x++) {
              let day = data[`Week_${i}`]['days'][5][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
          case '6':
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Sunday</h3>
                </div>
                <div className="show-workout">
                  <h4>Exercise</h4>
                  <h4>Sets</h4>
                  <h4>Reps</h4>
                  <h4>Weight</h4>
                </div>
              </div>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][6]).length; x++) {
              let day = data[`Week_${i}`]['days'][6][x]
              arr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            break;
        }        
      }
    }
    return arr
  }
    
  const Display = () => {
    if(data === undefined || Object.keys(data).length === 0) {
      return <Spinner />
    } else {
      return (
        <div>
          <h2>{name}</h2>
          <RenderWorkout />
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Let's Workout!</h1>
      <Display />
    </div>
  )
}

export default Current
