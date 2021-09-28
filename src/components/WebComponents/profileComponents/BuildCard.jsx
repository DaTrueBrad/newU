import React, {useState} from 'react'
import axios from 'axios'

function BuildCard(props) {
  console.log("build card:", props.data)
  
  for(let i = 0; i < props.data.length; i++) {
    console.log("for loop", props.data)
  }

  return (
    <div>
      {/* <MoreCards /> */}
      {props.data.map((item, index) => (
        <div>
          <p>{item}</p>
          <p>{item.title}</p>
        </div>
      //   <div className="article-card" key={index} item={item}>
      //   <h2>{item.title}</h2>
      //   <p>Website: <a href={item.url} target="_blank">{item.url}</a></p>
      //   <p>Author: <a href="">{item.author}</a></p>
      //   <p>Description: {item.description}</p>
      //   <div className="save-container">
      //     <p>Save</p>
      //     <i class='bx bx-bookmark'></i>
      //   </div>
      //   <div className="button-container">
      //   <a href={item.url}><button>View</button></a>
      //   </div>
      // </div>
      ))}
    </div>
    
  )
}

export default BuildCard
