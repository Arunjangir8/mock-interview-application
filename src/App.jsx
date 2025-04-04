import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Interviewer from "./Pages/Interviewer.jsx"
import {Login} from "./Pages/Login.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contect.jsx"
import Myprofile from "./Pages/Myprofile"
import Myinterviews from "./Pages/Myinterviews"
import Apointment from "./Pages/Apointment.jsx"
import Navbar from './Components/Navbar.jsx'
import { Footer } from './Components/Footer.jsx'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/interviewer' element={<Interviewer/>}/>
        <Route path='/interviewer/:speciality' element={<Interviewer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>
        <Route path='/my-interviews' element={<Myinterviews/>}/>
        <Route path='/appointment/:intid' element={<Apointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
