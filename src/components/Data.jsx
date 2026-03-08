import React, { useContext, useEffect, useState } from 'react'
import sunny from '../assets/sunny.png'
import thunder from '../assets/icons8-thunderstorm-100.png'
import drizzle from '../assets/icons8-drizzle-48.png'
import rain from '../assets/icons8-rain-64.png'
import snow from '../assets/icons8-snow-48.png'
import fog from '../assets/icons8-fog-48.png'
import cloudy from '../assets/icons8-cloudy-64.png'
import humidity_icon from '../assets/humidity_icon.svg'
import wind_icon from '../assets/Wind_Speed_icon.svg'
import Navbar from './Navbar'
import { ThemeContext } from '../../Context/contextAPI'

function getWeatherImage(code) {

  if (code === 1003 || code === 1006 || code === 1009)return cloudy;
  else if (code === 1030 || code === 1135) return fog;
  else if (code >= 1180 && code <= 1195) return rain;
  else if (code >= 1210 && code <= 1225) return snow;
  else if (code === 1087 || code === 1273 || code === 1276) return thunder;
  return sunny;
}

const Data = () => {
  const {weatherdata,setWeatherdata}=useContext(ThemeContext)
  const {loading,setLoading}=useContext(ThemeContext)

  return (

    <div className='bg-violet-700 text-white h-3/5 mt-8 flex flex-col items-center gap-y-10 py-4 px-2 w-xl rounded-4xl'>
       {(loading)?<div className="spinner"></div>:
       <>
        <div className='w-full flex justify-center '>
        <img className='w-[20%]'src={getWeatherImage(weatherdata.code)} alt='weatherforecast'/>
      </div>
      <div className='w-full flex flex-col items-center gap-y-2'>
        <h1 className='text-7xl font-semi tracking-tighter'>{weatherdata.temp}<span className='text-6xl font-semi'>°C</span></h1>
        <h1 className='text-2xl font-semibold font-'>{weatherdata.city},{weatherdata.Country}</h1>
      </div>
      <div className='flex w-full justify-center items-center gap-x-20'>
        
        <div className='flex gap-x-2 items-center'>
        <img className='w-[30px] invert' src={humidity_icon} alt='humidity icon'/>
         <div className='flex flex-col  items-start justify-start gap-0'>
          <p className='font-semibold text-lg'>{weatherdata.humidity}</p>
          <p className='font-semibold'>Humidity</p>
         </div>
         </div>
         <div className='flex gap-x-2 items-center'><img className='w-[30px] invert' src={wind_icon} alt='wind icon'/>
         <div className='flex flex-col  items-start justify-start gap-0'>
          <p className='font-semibold text-lg'>{weatherdata.wind_speed}</p>
          <p className='font-semibold'>Wind Speed</p>
         </div>
         </div>
         
      </div>
       
       </>}
     
    </div>
  )
}

export default Data
