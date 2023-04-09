import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {useState} from 'react'
import Home from "./screens/Home";
import Teacher from "./screens/Teacher";
import Student from "./screens/Student";
function App() {
  const [announcement,setAnnouncement]=useState([])
  function announceHandler(newAnnouncement){
      setAnnouncement((prevArray)=>{
          return[newAnnouncement,...prevArray]
      })
  }
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route   path="/" element={<Home/>}/>         
         <Route  path="/teacher" element={<Teacher onAnnouncement={announceHandler} announcements={announcement}/>}   />   
         <Route  path="/student" element={<Student announcements={announcement}/>}   />  
      </Routes>
       </Router>
     
    </div>
  );
}

export default App;
