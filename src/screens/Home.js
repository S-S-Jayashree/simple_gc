import { Button } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"
import Teacher from './Teacher'
const Home = () => {
  return (
    <div>
        <h1>Welcomee!! To Smart Evaluator!</h1>
        <div>
            <h4>Login According To ur credentials</h4>
            
                <Link to="/teacher"><button>Teacher</button></Link>
                <Link to="/student"><button>Student</button></Link>
           
           
        </div>
        
    </div>
  )
}

export default Home