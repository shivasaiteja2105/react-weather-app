import React, { use, useContext, useEffect, useState } from 'react'
import searchicon from '../assets/search_icon.svg'
import axios from 'axios'
import { ThemeContext } from '../../Context/contextAPI';
 const apiKey = import.meta.env.VITE_API_KEY;
 let lat;
 let lon;
const Navbar = () => {
   const [location, setLocation] = useState('New Delhi')
   const {weatherdata,setWeatherdata}=useContext(ThemeContext)
   const [isOk,setIsOk]=useState(true)
  
   const{loading,setLoading}=useContext(ThemeContext)
   useEffect(() => {
    search()
    setIsOk(true)
   }, [])
async function userSearch(){
  setLoading(true)
  try{
    const response=await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`)
    console.log(response)
    setWeatherdata({
    temp: response.data.current.temp_c,
    wind_speed: response.data.current.wind_kph,
    humidity: response.data.current.humidity,
    city:response.data.location.name,
    Country:response.data.location.country,
    code:response.data.current.condition.code
  })
  setIsOk(true)
 
  setLoading(false)
  lat=null
  lon=null
  }catch(e){
    console.log(e)
    setIsOk(false)
    setLoading(false)
  }
}
   
async function search(){
  setLoading(true)
 try{
     
      const response=await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)

    setWeatherdata({
    temp: response.data.current.temp_c,
    wind_speed: response.data.current.wind_kph,
    humidity: response.data.current.humidity,
    city:response.data.location.name,
    Country:response.data.location.country,
    code:response.data.current.condition.code
  })
  console.log(response)
  setLocation('')
  setLoading(false)
  setIsOk(true)
 }catch(e){
  console.log(e)
  setIsOk(false)
  setLoading(false)
 }
}
function setUserLocation(position){
  lat=position.coords.latitude
  lon=position.coords.longitude
 
  console.log(lat)
  console.log(lon)
  if(lat && lon ) userSearch()
}
function Error(error){
  console.log(error.message)
    setLoading(false)
  setIsOk(false)
}
function getUserLocation(){
  setLoading(true)
  navigator.geolocation.getCurrentPosition(setUserLocation,Error)
}
 
  
  return (
    <div className='  bg-violet-700 flex flex-col justify-center items-center gap-y-1 p-3.5 rounded-4xl'>
      <div className=' bg-violet-700 flex justify-between items-center gap-x-15 p-2 rounded-4xl'>
      <input className=' bg-white rounded-4xl p-2 px-3 '  placeholder='Search' type='text' onChange={(e)=>{setLocation(e.target.value);setIsOk(true)}}/>
      <button className=' p-2  bg-white rounded-full px-3 active:scale-80' onClick={search}><img className='w-[24px] 'src={searchicon} alt='search logo'/></button>
      <button className='p-2 bg-blue-500 rounded-xl active:scale-80' onClick={getUserLocation}>Use My Location</button>
       </div>
      
   
    {(isOk)?<></>:<div className='bg-white text-red-600 text-xl p-2 rounded-xl '><p>City Not Found!</p></div>}
    
    </div>
    
  )
}

export default Navbar
