import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Data from './components/Data'


function App() {
/*logo
 temp
 place
 humidity  windspeed*/

  return (
   <div className='h-screen bg-pink-50 w-full p-3.5 flex flex-col justify-center items-center'>
     <Navbar/>
    <Data/> 
   
   </div>
  )
}

export default App
