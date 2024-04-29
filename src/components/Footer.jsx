import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-p-color w-full pt-2 p-4 mt-40 text-s-color font-lato">
      <div className="footer-nav text-xs flex justify-between">
        <div className="left-container">
          <Link to="#header"><p>Back to Top</p></Link>
        </div>
        <div className="right-container flex space-x-4">
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/"><p>Works</p></Link>
        </div>
      </div>
      <div className="links-menu text-2xl pt-4 uppercase mt-8">
          <Link to="/"><p className="pt-3 ">Linkedin</p></Link>
          <Link to="/about"><p className="pt-3">GitHub</p></Link>
          <Link to="/"><p className="pt-3">Email</p></Link>
      </div>
      <div className="footer-logo-section w-full text-right flex flex-col mt-8">
        <Link to="/"><img src="/images/logo-w.png" alt="Logo" className= "max-w-28 float-right clear-start"  /></Link>
        <p className='text-xs bottom-0 -mt-2'>&copy; 2024 Ahreum Han All Rights Reserved</p>
      </div>
    </footer>
  )
}    

export default Footer