import React, {useState} from 'react'
import { Collapse } from 'react-collapse'
import CurrentDay from './CurrentDay'

function CurrentWeek(props) {
  const [isActive, setActive] = useState(false);
  let i = props.index
  let data = props.data
  console.log("week:", props.data)
  const ArrowDirection = () => isActive ? <i className='bx bxs-down-arrow' ></i> : <i className='bx bxs-right-arrow'></i>

  const Display = () => {
    let arr = []
    for (let j = 0; j < Object.keys(data[`Week_${i}`]['days']).length; j++) {
      arr.push(<CurrentDay data={props.data} index={props.index} j={j}/>)
    }
    return arr
  }
  

  return (
    <div className="collapse-container">
      <div className='week-container' onClick={() => setActive(!isActive)}>
        <ArrowDirection />
        <h2>Week {props.index}</h2>
      </div>
      <Collapse isOpened={isActive}>
        <Display />
      </Collapse>
    </div>
    
  )
}

export default CurrentWeek
