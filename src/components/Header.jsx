import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header class="p-2 flex justify-between mb-1">
      <div>
      <img src="/images/logo.png" alt="Logo" class= "w-32" />
      </div>
      <div>
        
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/works">Works</NavLink>
          </li>          
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header