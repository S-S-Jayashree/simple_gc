import React from 'react'
import Form from '../Components/Form'

const Student = (props) => {
  
  return (
    <div>
      <h1>Student Page</h1>
      <h4>Your Assignment will be posted here !!</h4>
      <ul>
                {props.announcements.map(
                    item=><li >{item}</li>
                )}
            </ul>
            <input type="file" name="file"/>
      
    </div>
  )
}

export default Student