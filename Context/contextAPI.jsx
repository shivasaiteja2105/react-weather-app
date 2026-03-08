import React, { createContext, use, useState } from 'react'
export const ThemeContext=createContext()

const ContextAPI = ({children}) => {
    const [weatherdata, setWeatherdata] = useState({})
    const [loading,setLoading]=useState(false)
  return (

      <ThemeContext.Provider value={{weatherdata,setWeatherdata,loading,setLoading}}>
         {children}
      </ThemeContext.Provider>
    
  )
}

export default ContextAPI
