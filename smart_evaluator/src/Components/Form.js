import React, { useState,useRef } from 'react'
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Form = (props) => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState(null);
    // const [showPreview, setShowPreview] = useState(false);
    /*
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(data)
    }*/
  
     
    const inputValue=useRef()
    
    function submitHandler(){
       
       props.onAddAnnouncement(inputValue.current.value)
      
    }
  return (
    <div>
      <br />
      <textarea type="text" className='textarea' placeholder="Make Your Announcement heree...." ref={inputValue} />

      <br />
      <br />
      <label class="custom-file-upload">
        <input type="file" />
        <AttachFileIcon/>Attach file
      </label>
      {/*
        <input className='file' type="file" name="file"/>
        <button onClick={submitHandler} className='submit_button'><SendIcon/></button>*/}
      <SendIcon className='send' onClick={submitHandler} />


    </div>
  )
}

export default Form
