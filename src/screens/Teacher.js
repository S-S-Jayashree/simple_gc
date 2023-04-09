import React from 'react'
import {Link} from "react-router-dom"
import {useState} from 'react'
import Form from '../Components/Form'
import FileUpload from '../Components/FileUpload'

const Teacher = (props) => {
   
  return (
    <div>
        <h1>Teachers Page</h1>
        <div>
            <h2>You can create ur Assignments Heree!!</h2>
            <h3>Announcement</h3>
            <p>U can announce the required details here</p>
            <Form onAddAnnouncement={props.onAnnouncement}/>
            
            <ul>
                {props.announcements.map(
                    item=><li >{item}</li>
                )}
            </ul>
            
        </div>
      
    </div>
  )
}

export default Teacher