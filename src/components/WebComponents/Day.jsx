import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { useFormik } from "formik";


function Day(props) {
  const [isActive, setActive] = useState(false);
  const [dataArr, setDataArr] = useState({})
  const [hideBtn, setHideBtn] = useState(false)
  const [exerciseInput, setExerciseInput] = useState('')
  const [setsInput, setSetsInput] = useState(0)
  const [repsInput, setRepInput] = useState(0)
  const [weightInput, setWeightInput] = useState(0)
  const [number, setNumber] = useState(1)

  // let data = {}

  //TODO we need to stop the constant re render, it is preventing us from properly passing infomraiton when the input fields change. Possibly section it all off into more components as need be.

  const addHandler = () => {
    let object = {
      // [number]: {
        exercise: exerciseInput,
        sets: setsInput,
        reps: repsInput,
        weight: weightInput,
      // },
    }
    //TODO need to understand how to insert a new value pair under teh exercise category with 1 being exercise one, 2 for exercise two, etc.
      setDataArr({...dataArr, exercise: {[number]: object}})
      setNumber((number + 1))
      console.log('New Attempt:', dataArr)
      
  }

  
  const submitHandler = () => {
    let object = {
      name: props.element,
      exercises: dataArr
    }
    console.log('New test, before we send up:', object)
    setHideBtn(!hideBtn)
    props.onChange(object)
  }

  function DisplayInfo() {
    let arr = []
    for(let i = 0; i < dataArr.length; i++) {
      arr.push(
      <tr>
        <td>{dataArr[i].exercise}</td>
        <td>{dataArr[i].sets}</td>
        <td>{dataArr[i].reps}</td>
        <td>{dataArr[i].weight}</td>
      </tr>)
    }
    return arr
  }

  const ArrowDirection = () => isActive ? <i class='bx bxs-down-arrow' ></i> : <i class='bx bxs-right-arrow'></i>
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
