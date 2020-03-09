import React from 'react'
import { FaPlay } from 'react-icons/fa'
import './style.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__icon'>
          <span className='banner__icon-active'><FaPlay/></span>
      </div>
      <div className='banner__information'>
        <h1 className='banner__information__title'>RINGS</h1>
        <h2 className='banner__information__subtitle'>EVIL IS REBORN</h2>
        <p className='banner__information__description'>Paramount Pictures Have just released the first trailer for the upcoming horor movie thigns.</p>
      </div>
    </div>
  )
}

export default Banner