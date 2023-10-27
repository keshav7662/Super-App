import React, { useEffect, useState } from 'react'
import './Weather.css'
import pressureBar from '../../../assets/pressure.svg'
import windSpeed from '../../../assets/windSpeed.svg'
import Humidity from '../../../assets/humidity.svg'
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentDateTime,setCurrentDateTime] = useState(null);
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=2852eebb350344bfb93125217232310&q=New%20Delhi')
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.log('something went wrong!')
      }
    }
    const updateDateTime = () => {
      const now = new Date();
      //Date
      let year = now.getFullYear();
      let mm = now.getMonth() + 1;
      let dd = now.getDate();
      
      let formattedDate = `${dd<10?'0'+dd:dd}-${mm<10?'0'+mm:mm}-${year}`
      //Time
      let hh = now.getHours();
      let min = now.getMinutes();
      let ampm = hh > 12 ? 'PM' : 'AM'
      hh = hh % 12;
      let formattedTime = `${hh ? hh:'12'} : ${min < 10 ? '0' + min : min} ${ampm}`
      
      setCurrentDateTime({
        date:formattedDate,
        time:formattedTime
      });
    } 
    updateDateTime();
    getWeatherData();
  }, []);
  
  return (
    <>
      <div className="weather-card">
        <div className="date-time">
          <p>{currentDateTime && currentDateTime.date}</p>
          <p>{currentDateTime && currentDateTime.time}</p>
        </div>
        <div className="weather-data">

          {weatherData ? (
            <>
              {/* <---------------------1---------------> */}
              <div className="weather-info">
                <img src={weatherData.current.condition.icon} alt="" style={{height:'50%'}} />
                <p >{weatherData.current.condition.text}</p>
              </div>
              {/* <---------------------2---------------> */}
              <div className="weather-info">
                <h1 >{weatherData.current.temp_c}&deg;C</h1>
                <div className="pressure" style={{width:'80%',height:'50%',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  <img src={pressureBar} alt="" style={{height:'50%'}} />
                  <p>{weatherData.current.pressure_mb} mbar Pressure</p>
                </div>
              </div>
              {/* <---------------------3---------------> */}
              <div className="weather-info">
                <div style={{width:'80%',height:'50%',display:'flex',gap:'0.5rem'}}>
                  <img src={windSpeed} alt="" style={{height:'50%'}} />
                  <p>{weatherData.current.wind_kph} km/h Wind</p>
                </div>
                <div style={{width:'80%',height:'50%',display:'flex',gap:'0.5rem',alignItems:'center'}}>
                  <img src={Humidity} alt="" style={{height:'50%'}} />
                  <p>{weatherData.current.humidity}% humidity</p>
                </div>

              </div>
            </>

          ) : (
            <>Loading.......</>
          )}
        </div>
      </div>
    </>
  )
}

export default Weather
