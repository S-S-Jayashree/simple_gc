import React from 'react'
import Form from '../Components/Form'
import { Link } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './student.css'
const Student = (props) => {
  
  return (
    <div style={{/*backgroundImage: `url(${background})`,*/
    backgroundColor:"antiquewhite",
    width:"100%",height:"100vh",
    position:"relative"
     }}>
      <h1>Student Page</h1>
      <h4>You can view your Assignment and attempt it !!!</h4>
      <ul >
        {props.announcements.map(
          item => <div className='announce'><AssignmentIcon/><b>Announcement</b><br/><br/>
          {item}<br/><br/>
            <label class="custom-file-upload">
              <input type="file" />
              <AttachFileIcon />Attach file
            </label>
            <SendIcon className='send'  />
          </div>
        )}
      </ul>
 </div>
  )
}

export default Student