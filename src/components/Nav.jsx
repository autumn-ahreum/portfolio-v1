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

    <nav className={classNames(' h-full p-0 m-0 top-0 transition ease-in-out duration-1000 trans text-left',{
      'invisible transition ease-in-out duration-700': !opened, //backlog - making smooth transition..
      'visible w-full z-10 fixed transition-all ease-in duration-300 ': opened
     })}
        onClick={ closeNav }
        >
        <img src="/images/menu-back.png" alt="Menu Black Background" className= "absolute top-0 -left-0 h-full 3xl:w-full text-left" />
        <ul className="list-none text-3xl fixed left-2/4 top-2/4 transform -translate-x-1/5 -translate-y-1/2 font-lato ">
            <li className="p-3.5 text-s-color">
            <NavLink to="/" className="nav-link group relative ">
                <p className="group-hover:text-white hover:text-[2rem] hover:transition-all">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-6">◦</span>Home
                </p>
            </NavLink> 
            </li>
            <li className="p-3.5 text-s-color">
            <NavLink to="/works" className="nav-link group relative ">
                <p className="group-hover:text-white hover:text-[2rem]  hover:transition-all ">
                  <span className="opacity-0 group-hover:opacity-100 absolute  -left-6">◦</span>Works
                </p>
            </NavLink> 
            </li>          
            <li className="p-3.5 text-s-color">
            <NavLink to="/about" className="nav-link group relative">
                <p className="group-hover:text-white hover:text-[2rem] hover:transition-all">
                  <span className="opacity-0 group-hover:opacity-100 absolute  -left-6">◦</span>About
                </p>
            </NavLink>       
            </li>
    </ul>
  </nav>
  )
}

export default Nav