import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import { useFormik } from "formik";


function Day(props) {
  const [isActive, setActive] = useState(false);
  const [dataArr, setDataArr] = useState([])
  
  
  const formik = useFormik({
    initialValues: {
      exercise: "",
      sets: 0,
      reps: 0,
      weight: 0,
    },
    onSubmit: (values) => {
      setDataArr([...dataArr, values])
      console.log("Form Data:", values);
      console.log("state content:", dataArr)
      props.onChange(dataArr)
    }
  });

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

  function ArrowDirection() {
    if(isActive) {
      return <i class='bx bxs-down-arrow' ></i>
    } else {
      return <i class='bx bxs-right-arrow'></i>
    }
  }

  function setVisability(e) {
    setActive(!isActive)
    console.log(isActive)
  }

  return (
    <div>
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
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="exercise"
                onChange={formik.handleChange}
                value={formik.values.exercise}
                placeholder="Exercise Name"
                className='exercise-input'/>
              <input
                type="number"
                name="sets"
                onChange={formik.handleChange}
                value={formik.values.sets}
                placeholder="Sets" 
                className='short-input'/>
              <input
                type="number"
                name="reps"
                onChange={formik.handleChange}
                value={formik.values.reps}
                placeholder="Reps"
                className='short-input'/>
              <input
                type="number"
                name="weight"
                onChange={formik.handleChange}
                value={formik.values.weight}
                placeholder="Weight"
                className='short-input'/>
                <button type='submit'>Add</button>
            </form>
            
          </section>
          
        </div>
      </Collapse>
    </div>
  )
}

export default Day
