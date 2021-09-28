import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { useFormik } from "formik";


function Day(props) {
  const [isActive, setActive] = useState(false);
  const [dataArr, setDataArr] = useState([])
  const [exerciseInput, setExerciseInput] = useState('')
  const [setsInput, setSetsInput] = useState(0)
  const [repsInput, setRepInput] = useState(0)
  const [weightInput, setWeightInput] = useState(0)
  
  let i = 0
  const submitHandler = async () => {
    let object = {
      [i]: {
        exercise: exerciseInput,
        sets: setsInput,
        reps: repsInput,
        weight: weightInput,
      }
    }
    //TODO I need to find a way to wait for the dataArr to fully become "set" before it send off to the parent
    if(dataArr.length === 0) {
      // console.log('dataArr has very few people')
      let bodyObj = {
        [props.element]: [dataArr]
      }
      setDataArr([object])
      try {
      } catch(err) {
        console.error(err)
      }
      finally {
        await props.onChange(bodyObj)
      } 
    } else {
      setDataArr([...dataArr, object])
      let bodyObj = {
        [props.element]: [dataArr]
      }
      await props.onChange(bodyObj)
    }
  }

  function DisplayInfo() {
    let arr = []
    for(let i = 0; i < dataArr.length; i++) {
      arr.push(
      <tr>
        <td>{dataArr[i][0].exercise}</td>
        <td>{dataArr[i][0].sets}</td>
        <td>{dataArr[i][0].reps}</td>
        <td>{dataArr[i][0].weight}</td>
      </tr>)
    }
    return arr
  }

  function ArrowDirection() {
    if(isActive) {
      return <i class='bx bxs-down-arrow' ></i>
    } else {
      return <i class='bx bxs-right-arrow'></i>
    }
  }

  function setVisability(e) {
    setActive(!isActive)
  }

  function inputChange(e) {
    if(e.target.name === 'exercise') {
      setExerciseInput(e.target.value)
    } else if(e.target.name === 'sets') {
      setSetsInput(e.target.value)
    } else if(e.target.name === 'reps') {
      setRepInput(e.target.value)
    } else {
      setWeightInput(e.target.value)
    }
  }

  return (
    <div id='annoying-container'>
      <section className="day-of-week-container" onClick={setVisability}>
        <ArrowDirection />
        <h3>{props.element}</h3>
      </section>
      <Collapse isOpened={isActive}>
        <table>
          <tr>
            <td>Exercise</td>
            <td>Sets</td>
            <td>Reps</td>
            <td>Weight</td>
          </tr>
          <DisplayInfo />
        </table>
        <div className="input-container">
          <section className="daily-exercise-container">
            <div className="input-workout-container">
              <input
                type="text"
                name="exercise"
                onChange={inputChange}
                placeholder="Exercise Name"
                className='exercise-input'/>
              <input
                type="number"
                name="sets"
                onChange={inputChange}
                placeholder="Sets" 
                className='short-input'/>
              <input
                type="number"
                name="reps"
                onChange={inputChange}
                placeholder="Reps"
                className='short-input'/>
              <input
                type="number"
                name="weight"
                onChange={inputChange}
                placeholder="Weight"
                className='short-input'/>
            </div>
                <button onClick={submitHandler}>Add</button>
          </section>
          
        </div>
      </Collapse>
    </div>
  )
}

export default Day
