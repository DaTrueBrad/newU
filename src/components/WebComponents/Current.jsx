import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../Spinner'

//TODO We will first make an axios clal to see if we can get the information to display, then convert it from a string to an object again, then try and iterate through it to display the relevent information

let res = ""

function Current() {
  // const [name, setName] = useState('')
  // const [id, setId] = useState(0)
  const [data, setData] = useState()

  const getWorkout = async () => {
    res = await axios.get('http://localhost:5432/workouts')
    // setName(res.data.name)
    // setId(res.data.id)
    setData(JSON.parse(res.data.data))
    // console.log('digging test:', data.Week_1.days.Monday.exercises.exercise_1.exercise_1.exercise)

  }
  useEffect(() => {
    getWorkout()
  }, [])

  function DisplayInfo() {
    let arr = []
    for(let i = 1; i <= Object.keys(data.Week_1.days.Monday.exercises.exercise_1.exercise_1).length; i++) {
      arr.push(
      <tr>
        <td>{data.Week_1.days.Monday.exercises.exercise_[`${toString(i)}`].exercise_[`${toString(i)}`].exercise}</td>
        <td>{data.Week_1.days.Monday.exercises.exercise_[`${toString(i)}`].exercise_[`${toString(i)}`].sets}</td>
        <td>{data.Week_1.days.Monday.exercises.exercise_[`${toString(i)}`].exercise_[`${toString(i)}`].reps}</td>
        <td>{data.Week_1.days.Monday.exercises.exercise_[`${toString(i)}`].exercise_[`${toString(i)}`].weight}</td>
      </tr>)
    }
    return arr
  }

  function RenderWorkout() {
    

    // for(let i = 1; i <= Object.keys(data).length; i++) {
    //   for(let j = 1; j <= Object.keys(data[`Week_${i}`]).length; j++) {
        
    //   }
    // }
    console.log("access", data)
    return (
      <div>
        <table>
          <tr>
            <td>Exercise</td>
            <td>Sets</td>
            <td>Reps</td>
            <td>Weight</td>
          </tr>
          {/* <DisplayInfo /> */}
          <tr>no</tr>
        </table>
      </div>
      
    )
  }
    
  RenderWorkout()

  const Display = () => {
    if(data === undefined || Object.keys(data).length === 0) {
      return <Spinner />
    } else {
      return (
        <div>
          <h2>name</h2>
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
