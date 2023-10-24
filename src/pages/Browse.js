import React from 'react'
import UserCard from '../components/HomePage/UserCard/UserCard'
import WeatherCard from '../components/HomePage/WeatherInfo/Weather'
const Browse = () => {
  return (
    <>
    <div style={{display:'flex',width:'100vw',justifyContent:'space-between'}}>
    <UserCard />
      <WeatherCard/>
    </div>
      
    </>
  )
}

export default Browse
