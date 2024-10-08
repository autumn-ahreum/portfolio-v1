import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import classNames from 'classnames';


const Header = () => {

  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };
  
 
  return (
    <header id='header' className={classNames(`pt-1.5 max-w-[1920px] mx-auto`, { 'show': opened })}>
      <div className="first-low-container flex justify-between w-full">
        <div className="logo-container ml-1">
          <Link to="/"><img src="/images/logo.png" alt="Move to Home" className= "max-w-32"  /></Link>
        </div>
        {/** 
        * found at this url : 
        * https://www.patrykgulas.com/hamburgers 
        **/}
        <div className={classNames(`tham tham-e-squeeze tham-w-5 mt-6 ml-2 mr-3 cursor-pointer`, { 'tham-active': opened}) } 
          onMouseDown= {(e) => { e.preventDefault(); }}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          id="header"
          aria-label="Open Menu"
          aria-expanded={opened}
          role="button"
          tabIndex={0} // to receive a keyboard focusing
        >
          <div className="tham-box">
            <div className={classNames(`tham-inner bg-p-color`, 
            { 'bg-s-color': opened, 'z-40': opened}) }/>
          </div>
        </div>
      </div>
      <Nav className="nav-menu"
          toggleMenu ={ toggleMenu }
          opened ={ opened }
      />
    </header>
  )
}
export default Header