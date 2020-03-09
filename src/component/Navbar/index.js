import React from 'react'
import { FaBars, FaBell,FaBraille } from 'react-icons/fa'

import './style.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <FaBars />
      </div>
      <div className='navbar__right'>
        <ul>
          <li>
            <FaBell />
          </li>
          <li>
            <FaBraille />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar