import axios from 'axios'
import React, {useEffect, useState} from 'react'
// import { object } from 'webidl-conversions'
import Spinner from '../Spinner'

//TODO We will first make an axios clal to see if we can get the information to display, then convert it from a string to an object again, then try and iterate through it to display the relevent information

let res = ""

function Current() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [data, setData] = useState()

  const getWorkout = async () => {
    res = await axios.get('http://localhost:5432/workouts')
    setName(res.data.name)
    setId(res.data.id)
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
    let arr = []
    //todo find a variable for the Monday section, figure out how to loop through it.
    for (let i = 1; i <= Object.keys(data).length; i++) {
      arr.push (
        <h1>{Object.keys(data)[i - 1]}</h1>
      )
      // for (let j = 0; j < Object.keys(Object.values(data)[i].days).length; j++) {
      for (let j = 0; j < Object.keys(data[`Week_${i}`]['days']).length; j++) {
        console.log('access:', Object.keys(data[`Week_${i}`]['days'])[j])
        switch (Object.keys(data[`Week_${i}`]['days'])[j]) {
          case '0':
            arr.push(
              <h2>Monday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][0]).length; x++) {
              let day = data[`Week_${i}`]['days'][0][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '1':
            arr.push(
              <h2>Tuesday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][1]).length; x++) {
              let day = data[`Week_${i}`]['days'][1][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '2':
            arr.push(
              <h2>Wednesday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][2]).length; x++) {
              let day = data[`Week_${i}`]['days'][2][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '3':
            arr.push(
              <h2>Thursday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][3]).length; x++) {
              let day = data[`Week_${i}`]['days'][3][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '4':
            arr.push(
              <h2>Friday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][4]).length; x++) {
              let day = data[`Week_${i}`]['days'][4][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '5':
            arr.push(
              <h2>Saturday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][5]).length; x++) {
              let day = data[`Week_${i}`]['days'][5][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
          case '6':
            arr.push(
              <h2>Sunday</h2>
            )
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][6]).length; x++) {
              let day = data[`Week_${i}`]['days'][6][x]
              arr.push(
                <div>
                  <h3>{day.exercise}</h3>
                  <h3>Sets: {day.sets}</h3>
                  <h3>Reps: {day.reps}</h3>
                  <h3>Weight: {day.weight}</h3>
                </div>
              )
            }
            break;
        }        
        // for (let x = 1; x <= Object.keys(Object.values(data)[i].days)[j].length; x++) {
        //   console.log('for loop:', Object.values(data)[0].days[j][x].exercise)
        //   arr.push(
        //     <div>
        //       <h3>{Object.values(data)[0].days[j][x].exercise}</h3>
        //     </div>
        //   )
        // }
      }
    }
    // console.log(data)
    // console.log('Days:', Object.keys(Object.values(data)[0].days).length)
    // console.log('Exercises:', Object.keys(Object.values(data)[0].days[0]).length)
    console.log('messing:', Object.values(Object.values(Object.values(Object.values(data)[0])[1])[1]))
    console.log('test dig:', data['Week_1']['days'][0])
    // console.log('Exercise data:', Object.values(data)[0].days[0][1].exercise)
    // console.log(Object.keys(data))
    // for(let i = 1; i <= Object.keys(data).length; i++) { 
    //   for(let j = 1; j <= Object.keys(data[`Week_${i}`]).length; j++) { //! This will identify the day (monday, tuesday, etc.)
    //     for(let x = 1; x <= Object.keys(data[`Week_${i}`]).length; x++) {
    //       console.log(data[`Week_${i}`].days.Monday.exercises[j])

    //     }
    //   }
    // }
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
