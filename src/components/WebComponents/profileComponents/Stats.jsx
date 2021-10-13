import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Spinner from '../../Spinner'
import { useFormik } from 'formik'



function Stats() {
  const [data, setData] = useState()
  const [hide, setHide] = useState(false)
  const [benchDate, setBenchDate] = useState('')
  const initialValues = {
    bench_date: '',
    bench_stat: 0,
    squat_date: '',
    squat_stat: 0,
    deadlift_date: '',
    deadlift_stat: ''
  }

  const GetStats = async () => {
    let user = +localStorage.getItem("user")
    let res = await axios.get('/userStats', {params: {user: user}})
    setData(res.data[0][0])
    console.log(data)
    initialValues.bench_date = getDate(res.data[0][0].bench_date)
    initialValues.squat_date = getDate(res.data[0][0].squat_date)
    initialValues.deadlift_date = getDate(res.data[0][0].deadlift_date)
    initialValues.bench_stat = res.data[0][0].bench_stat
    initialValues.squat_stat = res.data[0][0].squat_stat
    initialValues.deadlift_stat = res.data[0][0].deadlift_stat
  }
  useEffect(() => {
    GetStats()
  }, [])
  

  const onSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  function getDate(date) {
    const d = new Date(date)
    return d.toISOString().split('T')[0]
  }

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  const Display = () => {
    if(data === undefined) {
      return <Spinner />
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <th>Exercise</th>
              <th>Weight</th>
              <th>Date</th>
            </tr>
            
            <tr>
              <td>Bench Press</td>
              <td>{data.bench_stat ? data.bench_stat : "TBD"}</td>
              <td>{data.bench_date}</td>
            </tr>
            <tr>
            <td>Squat</td>
              <td>{data.squat_stat ? data.squat_stat : "TBD"}</td>
              <td>{data.squat_date}</td>
            </tr>
            <tr>
            <td>Deadlift</td>
              <td>{data.deadlift_stat ? data.deadlift_stat : "TBD"}</td>
              <td>{data.deadlift_date}</td>
            </tr>
          </tbody>
          <div className="stat-input-container" id={`${hide ? "" : "hide-workout"}`}>
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend>Bench Press</legend>
                <input
                  type="number"
                  name="bench_stat"
                  value={formik.values.bench_stat}
                  onChange={formik.handleChange}/>
                <input
                  type="date"
                  name="bench_date"
                  value={formik.values.bench_date}
                  onChange={formik.handleChange}/>
              </fieldset>
              <fieldset>
                <legend>Squat</legend>
                <input
                  type="number"
                  name="squat_stat"
                  value={formik.values.squat_stat}
                  onChange={formik.handleChange}/>
                <input
                  type="date"
                  name="squat_date"
                  value={formik.values.squat_date}
                  onChange={formik.handleChange}/>
              </fieldset>
              <fieldset>
                <legend>Deadlift</legend>
                <input
                  type="number"
                  name="deadlift_stat"
                  value={formik.values.deadlift_stat}
                  onChange={formik.handleChange}/>
                <input
                  type="date"
                  name="deadlift_date"
                  value={formik.values.deadlift_date}
                  onChange={formik.handleChange}/>
              </fieldset>
              <button type="submit">Save</button>
            </form>
            
          </div>
          <button onClick={() => setHide(!hide)}>Update</button>
        </table>
        
      )
    }
  }
  return (
      <Display />

  )
}

export default Stats
