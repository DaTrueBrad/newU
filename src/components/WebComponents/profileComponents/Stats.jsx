import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Spinner from '../../Spinner'

function Stats() {
  const [data, setData] = useState()
  const [hide, setHide] = useState(false)
  const GetStats = async () => {
    let user = +localStorage.getItem("user")
    let res = await axios.get('/userStats', {params: {user: user}})
    setData(res.data[0][0])
    console.log(data)
  }
  useEffect(() => {
    GetStats()
  }, [])
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
