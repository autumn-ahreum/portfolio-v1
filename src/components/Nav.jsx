import React from 'react'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';


const Nav = ( { opened, toggleMenu } ) => {

  function closeNav(e){
    toggleMenu()
    e.currentTarget.classList.remove('invisible'); 
    e.currentTarget.classList.add('visible'); 

  }

  return (

    <nav className={classNames('w-0 h-full p-0 m-0 top-0 transition ease-in-out duration-1000',{
      'invisible transition ease-in-out duration-1000': !opened, //backlog - making smooth transition..
      'visible w-full transition-all ease-in-out duration-1000 ': opened
     })}
        onClick={ closeNav }
        >
        <img src="/images/menu-back.png" alt="Menu Black Background" className= "absolute top-0 -left-0 h-screen z-0" />
        <ul className="list-none text-2xl fixed left-2/4 top-2/4 transform -translate-x-1/5 -translate-y-1/2">
            <li className="p-3.5 text-s-color">
            <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-3.5 text-s-color">
            <NavLink to="/works">Works</NavLink>
            </li>          
            <li className="p-3.5 text-s-color">
            <NavLink to="/about">About</NavLink>
        </li>
    </ul>
  </nav>
  )
}

export default Nav