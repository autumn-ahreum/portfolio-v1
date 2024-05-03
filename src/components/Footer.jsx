import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-p-color w-full pt-2 p-4 mt-40 block text-s-color font-lato">
      <div className="footer-nav text-xs sm:text-base md:text-[18px] flex justify-between max-w-screen-lg mx-auto">
        <div className="left-container">
          <Link to="#header"><p>Back to Top</p></Link>
        </div>
        <div className="right-container flex space-x-4 sm:gap-4">
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/"><p>Works</p></Link>
        </div>
      </div>
      <div className="links-menu text-3xl pt-4 uppercase mt-8  max-w-screen-lg mx-auto sm:text-5xl md:text-6xl">
          <Link to='https://www.linkedin.com/in/devahreum/'><p className="pt-3 sm:pt-6 md:pt-12">Linkedin</p></Link>
          <Link to='https://github.com/autumn-ahreum/'><p className="pt-3 sm:pt-6 md:pt-12">GitHub</p></Link>
          <Link to='mailto:beautumn43@gmail.com'><p className="pt-3 sm:pt-6 md:pt-12">Email</p></Link>
      </div>
      <div className="footer-logo-section text-right flex flex-col mt-8 max-w-screen-lg mx-auto">
        <Link to="/"><img src="/images/logo-w.png" alt="Logo" className= "max-w-28 sm:max-w-32 md:max-w-40 self-end inline-block"/></Link>
        <p className='text-xs md:text-base bottom-0 -mt-2'>&copy; 2024 Ahreum Han All Rights Reserved</p>
      </div>
    </footer>
  )
}    

export default Footer