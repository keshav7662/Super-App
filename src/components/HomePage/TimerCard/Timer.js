import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Up from '../../../assets/up.svg'
import Down from '../../../assets/down.png'
import './Timer.css'
const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startStopBtn, setStartStopBtn] = useState('start');

  const updateHour = (action) => {
    if (action === 'increase') {
      setHours((hours) => hours + 1);
    } else if (hours > 0) {
      setHours((hours) => hours - 1);
    }
  }
  const updateMinute = (action) => {
    if (action === 'increase') {
      if (minutes < 59)
        setMinutes((minutes) => minutes + 1);
    } else {
      if (minutes > 0)
        setMinutes((minutes) => minutes - 1);
    }
  }
  const updateSecond = (action) => {
    if (action === 'increase') {
      if (seconds < 59)
        setSeconds((seconds) => seconds + 1);
    } else {
      if (seconds > 0)
        setSeconds((seconds) => seconds - 1);
    }
  }
  const handleStart = () => {
    if (startStopBtn === 'start') {
      setStartStopBtn('stop');
      setIsPlaying(true);
    } else {
      setStartStopBtn('start');
      setIsPlaying(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  }
  const convertSeconds = (remainingSecond) => {
    const hh = String(Math.max(0,Math.floor(remainingSecond / 3600))).padStart(2, '0');
    const mm = String(Math.max(0,Math.floor((remainingSecond % 3600) / 60))).padStart(2, '0');
    const ss = String(Math.max(0,remainingSecond % 60)).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }
  return (
    <>
      <div className="timer-card">
        <div className="timer-circle">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={seconds + minutes * 60 + hours * 60 * 60}
            strokeWidth={8}
            size={150}
            colors={'#FF6A6A'}
          >
            {({ remainingTime }) => <p style={{ color: '#fff',fontSize:'1.5rem' }}>{convertSeconds(remainingTime)}</p>}
          </CountdownCircleTimer>
        </div>
        <div className="controller">
          <div className="set-timer-block">
            <div className="timer-controller">
              <p>Hours</p>
              <img src={Up} alt=""
                onClick={() => updateHour('increase')}
              />
              <p>{hours.toString().padStart(2, '0')}</p>
              <img src={Down} alt=""
                onClick={() => updateHour('decrease')}
              />
            </div>
            <div className="timer-controller">
              <p>Minutes</p>
              <img src={Up} alt=""
                onClick={() => updateMinute('increase')}
              />
              <p>{minutes.toString().padStart(2, '0')}</p>
              <img src={Down} alt=""
                onClick={() => updateMinute('decrease')}
              />
            </div>
            <div className="timer-controller">
              <p>Seconds</p>
              <img src={Up} alt=""
                onClick={() => updateSecond('increase')}
              />
              <p>{seconds.toString().padStart(2, '0')}</p>
              <img src={Down} alt=""
                onClick={() => updateSecond('decrease')}
              />
            </div>
          </div>
          <div className="start-btn">
            <button onClick={handleStart}>{startStopBtn}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer
