import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../Spinner'

let res = ""

function Current() {
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [data, setData] = useState()

  const getWorkout = async () => {
    let id = localStorage.getItem('user')
    res = await axios.get('/workouts', {params: {id: id}})
    if(Object.keys(res.data[0]).length != 0) {
      setName(res.data[0][0].name)
      setId(res.data[0][0].id)
      setData(JSON.parse(res.data[0][0].data))
    }
    console.log(res)
  }
  useEffect(() => {
    getWorkout()
  }, [])

  function RenderWorkout() {
    let arr = []
    for (let i = 1; i <= Object.keys(data).length; i++) {
      arr.push (
        <div className='week-container'>
          <h2>Week {i}</h2>
        </div>
      )
      for (let j = 0; j < Object.keys(data[`Week_${i}`]['days']).length; j++) {
        switch (Object.keys(data[`Week_${i}`]['days'])[j]) {
          case '0':
            let monArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][0]).length; x++) {
              let day = data[`Week_${i}`]['days'][0][x]
              monArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Monday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {monArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            break;
          case '1':
            let tueArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][1]).length; x++) {
              let day = data[`Week_${i}`]['days'][1][x]
              tueArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Tuesday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {tueArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
            break;
          case '2':
            let wedArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][2]).length; x++) {
              let day = data[`Week_${i}`]['days'][2][x]
              wedArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Wednesday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {wedArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
            break;
          case '3':
            let thurArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][3]).length; x++) {
              let day = data[`Week_${i}`]['days'][3][x]
              thurArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Thursday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {thurArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
            break;
          case '4':
            let friArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][4]).length; x++) {
              let day = data[`Week_${i}`]['days'][4][x]
              friArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Friday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {friArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
            break;
          case '5':
            let satArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][5]).length; x++) {
              let day = data[`Week_${i}`]['days'][5][x]
              satArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Saturday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {satArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            break;
          case '6':
            let sunArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days'][6]).length; x++) {
              let day = data[`Week_${i}`]['days'][6][x]
              sunArr.push(
                <tr>
                  <td>{day.exercise}</td>
                  <td>{day.sets}</td>
                  <td>{day.reps}</td>
                  <td>{day.weight}</td>
                </tr>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Sunday</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {sunArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
            break;
          default:
            let unkArr = []
            for(let x = 1; x <= Object.keys(data[`Week_${i}`]['days']['undefined']).length; x++) {
              let day = data[`Week_${i}`]['days']['undefined'][x]
              unkArr.push(
                <div className='show-workout'>
                  <p>{day.exercise}</p>
                  <p>{day.sets}</p>
                  <p>{day.reps}</p>
                  <p>{day.weight}</p>
                </div>
              )
            }
            arr.push(
              <div>
                <div className="day-of-week-container">
                  <h3>Unknown Day (what)</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                    </tr>
                    {unkArr.map((el, index) => el)}
                  </tbody>
                </table>
              </div>
            )
            
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
