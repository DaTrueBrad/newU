import React, {useState} from 'react'
import { Collapse } from 'react-collapse'


function Day(props) {
  const [isActive, setActive] = useState(false);
  const [dataArr] = useState({})
  const [hideBtn, setHideBtn] = useState(false)
  const [exerciseInput, setExerciseInput] = useState('')
  const [setsInput, setSetsInput] = useState(0)
  const [repsInput, setRepInput] = useState(0)
  const [weightInput, setWeightInput] = useState(0)
  const [number, setNumber] = useState(1)

  const addHandler = () => {
    let object = {
        exercise: exerciseInput,
        sets: setsInput,
        reps: repsInput,
        weight: weightInput,
    }
      dataArr[number] = object
      setNumber((number + 1))
  }
  
  const submitHandler = () => {
    console.log(props.index)
    let object = {
      name: props.number,
      exercises: dataArr
    }
    setHideBtn(!hideBtn)
    props.onChange(object)
  }

  function DisplayInfo() {
    let arr = []
    for(let i = 1; i <= Object.keys(dataArr).length; i++) {
      console.log(dataArr[i])
      arr.push(
      <tr>
        <td>{dataArr[i].exercise}</td>
        <td>{dataArr[i].sets}</td>
        <td>{dataArr[i].reps}</td>
        <td>{dataArr[i].weight}</td>
      </tr>)
    }
    const exercises = arr.map((element, index) => element)
    return exercises
  }

  const ArrowDirection = () => isActive ? <i className='bx bxs-down-arrow' ></i> : <i className='bx bxs-right-arrow'></i>
  const setVisability = (e) => setActive(!isActive)

  function inputChange(e) {
    if(e.target.name.includes('exercise')) {
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
    <div className="current-day-container">
      <section className="day-of-week-container" onClick={setVisability}>
        <ArrowDirection />
        <h3>{props.element}</h3>
      </section>
      <Collapse isOpened={isActive}>
        <table>
          <tbody>
            <tr>
              <td>Exercise</td>
              <td>Sets</td>
              <td>Reps</td>
              <td>Weight</td>
            </tr>
          <DisplayInfo />
          </tbody>
        </table>
        <div className="input-container">
          <section className="daily-exercise-container">
            <div className="input-workout-container">
              <input
                type="text"
                name={`${props.element} exercise #${number}`}
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
            <div className={hideBtn ? "invisible" : "button-container-flex"}>
              <button onClick={addHandler}>Add</button>
              <button onClick={submitHandler}>Save</button>
            </div>
          </section>
        </div>
      </Collapse>
    </div>
  )
}

export default Day
