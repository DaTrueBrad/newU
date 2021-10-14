import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Spinner from '../../Spinner'
import swal from 'sweetalert'

function FavWorkouts() {
  const [data, setData] = useState()
  const GetWorkouts = async () => {
    let user = +localStorage.getItem('user')
    let res = await axios.get('/favoriteworkout', {params: {user: user}})
    setData(res.data["0"])
    console.log("res:", res)
    console.log("data:", data)
  }
  useEffect(() => {
    GetWorkouts()
  }, [])

  const removeWorkout = async (id) => {
    swal("Remove from Favorites?", "This action will remove this workout from your favorite tab.", "warning", {buttons: true, dangerMode: true})
    .then((value) => {
      if(value) {
        let user = localStorage.getItem('user')
        axios.delete('/removeFavoriteWorkout', {params: {user: user, id: id}})
        .then((res) => window.location.reload(true))
      }
    })
  }


  const Display = () => {
    if(data === undefined) {
      return <Spinner />
    } else {
      const workoutCards = data.map((element, index) => {
        return (
          <div key={index} element={element} className="custom-workout-card">
            <h2>{element.name}</h2>
            <div className="custom-info-container">
              <div>
                <h3>Length: {Object.keys(JSON.parse(element.data)).length} week(s)</h3>
                <h3>ID: {element.id}</h3>
              </div>
              <div>
                <i className='bx bxs-trash' style={{color: "red", fontSize: 36}} ></i>
                <i class='bx bx-minus-circle' style={{color: "#FFA620", fontSize: 36}}  onClick={() => removeWorkout(element.id)}></i>
                <i className='bx bx-check-square' style={{color: "green", fontSize: 36}}></i>
              </div>
            </div>
          </div>
        )
      })
      return workoutCards
    }
  }

  return (
    <div className="all-custom-container">
      <Display />
    </div>
  )
}

export default FavWorkouts
