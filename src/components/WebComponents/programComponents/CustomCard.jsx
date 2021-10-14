import React, {useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function CustomCard(props) {
  const [hide, setHide] = useState(false)
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

  const deleteWorkout = async (id) => {
    await axios.delete('/deleteWorkout', {data: {id: id}})
    .then((res) => console.log(res.data))
    window.location.reload(true)
  }

  const trashClick = () => {
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
                <i className='bx bxs-trash' style={{color: "red", fontSize: 36}} onClick={() => trashClick()}></i>
                <i className='bx bx-star' style={{color: "#FFA620", fontSize: 36}} onClick={() => addFavorite(props.element.id)}></i>
                <i className='bx bx-check-square' style={{color: "green", fontSize: 36}} onClick={() => selectCurrent(props.element.id)}></i>
                <div className="workout-input-container" id={`${hide ? "" : "hide-workout"}`}>
                  <p>Are you sure you want to delete:</p>
                  <h3>{props.element.name}</h3>
                  <p>This will be gone forever.</p>
                  <button onClick={() => deleteWorkout(props.element.id)}>Yes</button>
                  <button onClick={() => setHide(!hide)}>No</button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CustomCard