import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-p-color w-full pt-2 p-4 px-5 mt-40 block text-s-color font-lato ">
      <div className="footer-nav text-xs sm:text-base md:text-[18px] flex justify-between sm:justify-end gap-12 max-w-[1300px] mx-auto">
        <div className="left-container">
          <HashLink to="#header" spy={true} smooth={true} offset={50} duration={500} aria-label="Back to Top of the Page"><p>Back to Top</p></HashLink>
        </div>
        <div className="right-container flex space-x-4 sm:gap-4">
          <HashLink to="/"><p>Home</p></HashLink>
          <HashLink to="/about" ><p>About</p></HashLink>
          <HashLink to="/works"><p>Work</p></HashLink>
        </div>
      </div>
      <div className="links-menu text-3xl pt-4 uppercase mt-8  max-w-screen-lg mx-auto sm:text-[42px] md:flex md:gap-10 md:ml-10 md:mt-6 lg:ml-20">
          <HashLink to='https://www.linkedin.com/in/devahreum/'><p className="pt-3 mt-5 sm:pt-6 md:pt-12">Linkedin</p></HashLink>
          <HashLink to='https://github.com/autumn-ahreum/'><p className="pt-3 mt-5 sm:pt-6 md:pt-12">GitHub</p></HashLink>
          <HashLink to='mailto:beautumn43@gmail.com'><p className="pt-3 mt-5 sm:pt-6 md:pt-12">Email</p></HashLink>
      </div>
      <div className="footer-logo-section text-right flex flex-col mt-8 max-w-screen-lg mx-auto md:mr-10 md:my-10 lg:mr-20 lg:my-20">
        <Link to="/"><img src="/images/logo-w.png" alt="Logo" className= "max-w-28 sm:max-w-32 md:max-w-40 self-end inline-block"/></Link>
        <p className='text-xs md:text-base bottom-0 -mt-2'>&copy; 2024 Ahreum Han All Rights Reserved</p>
      </div>
    </footer>
  )
}    

export default Footer