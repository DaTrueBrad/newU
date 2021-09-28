import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../Spinner'

  
function Articles() {
  const [data, setdata] = useState()

  const getData = async () => {
    let res = await axios.get("/article")
    console.log('response is:', res)
    setdata(res.data)
    }

  useEffect(() => {
    getData()
  }, [])
  
    
  const Display = () => {
    if(data === undefined) {
      return <Spinner />
    } else {
      const articleCards = data.map((el, index) => {
        console.log(el)
        return (
          <div key={index} element={el} className='article-card'>
            <h2>{el.title}</h2>
            <p>Website: <a href={el.url} target='_blank'>{el.url}</a></p>
            <p>Author: <a href="">{el.author}</a></p>
            <p>Description: {el.description}</p>
            <div className="button-container">
              <div className="save-container">
                <p>Save</p>
                <i class='bx bx-bookmark'></i>
              </div>
              <a href={el.url} target='_blank'><button>View</button></a>
            </div>
          </div>
        )
      })
      console.log("article cards:", articleCards)
      return articleCards
    }
  }

  return (
    <div>
      <h1 id='page-title'>Articles</h1>
      <p>This is a collection of articles that contain correct information and have been reviewed by a selection of individuals to make their way onto this page. Use them to construct new ideas for workouts, form, and nutrition. All buttons will direct you to the site where the article is hosted.</p>
      <div className="disclaimer-container">
        <h2>*Disclaimer</h2>
        <p>New U did not write MANY of these articles. All rights and privilages are due to the author and their respective publishing site</p>
      </div>
      <div><Display /></div>
    </div>
  )
}

export default Articles
