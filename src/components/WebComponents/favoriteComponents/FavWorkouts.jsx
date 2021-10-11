import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Spinner from '../../Spinner'

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
                <i class='bx bx-minus-circle' style={{color: "#FFA620", fontSize: 36}}></i>
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
    <div>
      <Display />
    </div>
  )
}

export default FavWorkouts
