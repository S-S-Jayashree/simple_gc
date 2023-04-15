import React from 'react'
import './score.css'
const Score = () => {
  return (
    <div style={{
    backgroundColor:"antiquewhite",padding:"0%",
    width:"100%",height:"100vh",backgroundSize:"auto",backgroundSize:"cover"}}>
        <h1>View Your Scores heree</h1>
        <label className='name'>Enter the students Name:</label>
        <input type="text" /><br/><br/>
         <button  className='score_button'>Get Score</button>
    </div>
  )
}

export default Score