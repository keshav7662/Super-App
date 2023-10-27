import React from 'react'
import UserCard from '../components/HomePage/UserCard/UserCard'
import WeatherCard from '../components/HomePage/WeatherInfo/Weather'
import NewsCard from '../components/HomePage/NewsInfo/News'
import NotesCard from '../components/HomePage/NotesCard/Notes'
import TimerCard from '../components/HomePage/TimerCard/Timer'
const Browse = () => {
  return (
    <div style={{ margin: '2% 3%' }}>
      <div style={{ display: 'flex', gap: '2%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3%' }}>
          <div style={{ display: 'flex', gap: '3%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5%' }}>
              <UserCard />
              <WeatherCard />
            </div>
            <NotesCard />
          </div>
          <div>
            <TimerCard />
          </div>
        </div>
        <div className="news">
          <NewsCard />
        </div>
      </div>
    </div>
  )
}

export default Browse


