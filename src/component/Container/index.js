import React from 'react'
import './style.css'
import landing from '../../assets/images/bg.jpg'
const Container = ({children}) => {
  return (
    <div className='container' style={{ backgroundImage: `url('${landing}')` }}>
      <div className='container__inner'>
        {children}
      </div>
    </div>
  )
}

export default Container;