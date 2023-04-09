import React, { useState,useRef } from 'react'

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
        <textarea type="text" placeholder="Announcement...."  ref={inputValue}/>
        
        <br />
        <input type="file" name="file"/>
        <br/>
        <button onClick={submitHandler}>Submit</button>
        
    </div>
  )
}

export default Form
