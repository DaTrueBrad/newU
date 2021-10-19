import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Spinner from '../../Spinner'
import CustomCard from './CustomCard'

function Templates() {
  const [data, setData] = useState()
  let res = {}
  
  const GetWorkouts = async () => {
    res = await axios.get(`/templates`);
    setData(res.data[0])
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

export default Templates
