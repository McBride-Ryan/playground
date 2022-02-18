import React from 'react'
import logo from '../images/logo.png';

function Navbar() {
  return (
        <nav>
           <img src={logo} alt=""  className='icon'/>
           <h3 className='header'>ReactFacts</h3>
           <h4 className='subhead'>React Course - Project 1</h4>
        </nav>
    
  )
}

export default Navbar