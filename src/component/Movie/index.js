import React from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'
import image1 from '../../assets/images/sonic.jpg'
import image2 from '../../assets/images/flash.jpg'
import image3 from '../../assets/images/jumanji.jpg'

const Movie = () => {
  return (
    <div class='movie'>
      <div className='movie__item'>
        <div className='movie__item__top'>
          <img src={image1} alt='' />
        </div>
        <div className='movie__item__bottom'>
          <h3>Sonic</h3>
          <ul>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
        </div>
      </div>
      <div className='movie__item'>
        <div className='movie__item__top'>
          <img src={image2} alt='' />
        </div>
        <div className='movie__item__bottom'>
          <h3>Jumanji</h3>
          <ul>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
        </div>
      </div>
      <div className='movie__item'>
        <div className='movie__item__top'>
          <img src={image3} alt='' />
        </div>
        <div className='movie__item__bottom'>
          <h3>The avenger</h3>
          <ul>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Movie