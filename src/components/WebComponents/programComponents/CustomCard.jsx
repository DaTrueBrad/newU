import React, {useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function CustomCard(props) {
  const [hide, setHide] = useState(false)

  const selectCurrent = async (id, name) => {
    let user = +localStorage.getItem('user')
    swal(`Do you want to select ${name}?`, "Your app will begin to track this workout program", "warning", {buttons: true})
    .then((value) => {
      if(value) {
        const body = {
        id,
        user
        }
        axios.post('/currentworkout', body)
        window.location = '/dashboard/programs/'
      }
    })
  }

  const addFavorite = async (id) => {
    let user = +localStorage.getItem('user')
    let db = await axios.get('/favoriteWorkoutExists', {params: {user: user, id: id}})
    if((db.data[0]).length === 0) {
      let bodyObj = {
        id: id,
        user: user
      }
      await axios.post('/favoriteworkout', bodyObj)
      .then((res) => swal("Added to favorites!", "You can find your workout under the favorites page.", "success"))
    } else {
      swal("Already a Favorite!", "Cannot add it a second time.", 'error')
    }
  }

  const trashClick = (id, name) => {
    swal(`Deleting ${name}`, "This action will delete this program, and cannot be undone.", "warning", {buttons: true, dangerMode: true})
    .then((value) => {
      if(value) {
        axios.delete('/deleteWorkout', {data: {id: id}})
        .then((res) => console.log(res.data))
        window.location.reload(true)
      } 
    })
    setHide(!hide)
  }

  return (
    <div className="custom-workout-card">
            <h2>{props.element.name}</h2>
            <div className="custom-info-container">
              <div>
                <h3>Length: {Object.keys(JSON.parse(props.element.data)).length} week(s)</h3>
                <h3>ID: {props.element.id}</h3>
              </div>
              <div>
                <i className='bx bxs-trash' style={{color: "red", fontSize: 36}} onClick={() => trashClick(props.element.id, props.element.name)}></i>
                <i className='bx bx-star' style={{color: "#FFA620", fontSize: 36}} onClick={() => addFavorite(props.element.id)}></i>
                <i className='bx bx-check-square' style={{color: "green", fontSize: 36}} onClick={() => selectCurrent(props.element.id, props.element.name)}></i>
              </div>
            </div>
          </div>
  )
}

export default CustomCard