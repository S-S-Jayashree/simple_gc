import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Form from '../Components/Form'
import './teacher.css'
import background from "../images/bck9.jpeg"
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
const Teacher = (props) => {

  return (
    <div className="bck" style={{/*backgroundImage: `url(${background})`,*/
    backgroundColor:"antiquewhite",padding:"0%",
    width:"100%",height:"100vh",backgroundSize:"auto",backgroundSize:"cover"
     }}>
      <div>
        <h1>Teachers Page</h1>
        <div>
          <p className='para'>Welcome to the page , You can do the announcement here and can attact files so that the students can view your announcements.</p>
         
          {/*<Link to="/teacher/viewScore"><button className='button'>View Scoree</button></Link>*/}
          <div className='score_div'>
            <label className='score_label'>
              <Link to="/teacher/viewScore"><SchoolIcon className="score" /></Link><br />
              scores
            </label>
          </div>
          
          <br />
          <Form onAddAnnouncement={props.onAnnouncement} />

          
          <ul >
            {props.announcements.map(
              item => <p className="announcement" ><AssignmentIcon/><b>Assignment</b><br/><br/> {item}</p>
            )}
            <br />
          </ul>
          

        </div>
      </div>
    </div>
  )
}

export default Teacher