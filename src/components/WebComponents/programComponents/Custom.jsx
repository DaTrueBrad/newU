import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner'

let res = {}

function Custom() {
  const [data, setData] = useState()
  const GetWorkouts = async () => {
    let id = +localStorage.getItem('user')
    res = await axios.get(`/myworkouts`, {params: {id: +id}});
    setData(res.data)
  }
  useEffect(() => {
    GetWorkouts()
  }, [])

  const deleteWorkout = async (id) => {
    alert(`${id}`)
    //todo building a delete will be very easy. add the following:
    //todo a safeguard for if someone accidentally clicks delete
  }

  const selectCurrent = async (id) => {
    let user = +localStorage.getItem('user')
    const body = {
      id,
      user
    }
    await axios.post('/currentworkout', body);
    alert("You have changed your current program! Check it out on the 'Current' tab!")
  }

  const addFavorite = async (id) => {
    let user = +localStorage.getItem('user')
    let bodyObj = {
      id: id,
      user: user
    }
    await axios.post('/favoriteworkout', bodyObj)
    .then((res) => console.log(res.data))
  }

  //todo a favorite would look like an axios get with params to get all the favorites for user, and compare the workout id with the id on the favorites table. Simple. If it exists, render a full star. If it doesn't, render an empty star.

  const Display = () => {
    if (data === undefined) {
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
                <i className='bx bxs-trash' style={{color: "red", fontSize: 36}} onClick={() => deleteWorkout(element.id)}></i>
                <i class='bx bx-star' style={{color: "#FFA620", fontSize: 36}} onClick={() => addFavorite(element.id)}></i>
                <i className='bx bx-check-square' style={{color: "green", fontSize: 36}} onClick={() => selectCurrent(element.id)}></i>
              </div>
            </div>
            
            
          </div>
        )
      })
      return workoutCards
    }
  }
  
  return (
    <div className='all-custom-container'>
      <Display />
    </div>
  )
}

export default Custom
