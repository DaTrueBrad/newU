import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Spinner from '../../Spinner'
import swal from 'sweetalert'

function FavArticles() {
  const [data, setData] = useState()
  const GetArticles = async () => {
    let user = +localStorage.getItem('user')
    let res = await axios.get('/favoritearticles', {params: {user: user}})
    setData(res.data["0"])
    console.log("res:", res)
    console.log("data:", data)
  }
  useEffect(() => {
    GetArticles()
  }, [])

  const removeArticle = async (id) => {
    swal("Remove from Favorites?", "This action will remove this article from your favorite tab.", "warning", {buttons: true, dangerMode: true})
    .then((value) => {
      if(value) {
        let user = localStorage.getItem('user')
        axios.delete('/removeFavoriteArticle', {params: {user: user, id: id}})
        .then((res) => window.location.reload(true))
      } 
    })
  }

  const Display = () => {
    if(data === undefined) {
      return <Spinner />
    } else {
      const articleCards = data.map((el, index) => {
        return (
          <div key={index} element={el} className='article-card'>
            <h2>{el.title}</h2>
            <div className="article-content">
              <div className="article-description">
                <p>Website: <a href={el.url} target='_blank' rel="noreferrer">{el.url}</a></p>
                <p>Author: {el.author}</p>
                <p>Description: {el.description}</p>
              </div>
            <div className="article-button-container">
              <div className="save-container">
              <i class='bx bx-minus-circle' style={{color: "#FFA620", fontSize: 36}}  onClick={() => removeArticle(el.id)}></i>
              </div>
              <a href={el.url} target='_blank' rel="noreferrer"><button>View</button></a>
            </div>
            </div>
          </div>
        )
      })
      return articleCards
    }
  }

  return (
    <div id='article-container'>
      <Display />
    </div>
  )
}

export default FavArticles
