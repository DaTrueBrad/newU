import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner'
import CustomCard from './CustomCard'

// This component will get data from the database and then use it to create cards for each workout program.

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

  const Display = () => {
    if (data === undefined) {
      return <Spinner />
    } else {
      const workoutCards = data.map((element, index) => {
        return (
          <CustomCard element={element} key={index} number={index} />
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
