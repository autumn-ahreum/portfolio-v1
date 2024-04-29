import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <main className="ml-2 mr-2">
      <div className='here-section text-right mt-4'>
        <div className="banner-intro">
          <h3 className='font-tektur uppercase italic text-3xl'>Front-End Web Developer</h3>
          <h2 className='font-lato text-2xl'>Ahreum Han</h2>
          <Link to='/about' > 
            <button className="mt-2 bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">Why Paper Bottle?</p>
            </button>
          </Link>
        </div>
        <img className="my-16"src="/images/banner.png" ></img>
      </div>
      <div className='Second-banner flex flex-col  mt-36 mb-20'>
        {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
        <svg className='w-16 -mb-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill='#cbd1cd' d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
        <div className='text-container  z-10  text-p-color'>
          <h1 className='text-4xl font-rowdies font-bold tracking-tight pl-4' >Thoughtful Design </h1>
          <h2 className='text-2xl/[22px] font-mono font-bold tracking-tighter -pl-2 pt-3'>   User-centered Web Interface </h2>
          <h2 className='text-4xl font-menlo font-bold italic pt-3 pl-8'> Intuitive Flow</h2>        
          <h2 className='text-[34px] font-dmsdisplay font-bold pt-1 ' >Customized Solutions</h2>
        </div>
        <svg className='w-16 self-end -mt-20'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill='#cbd1cd' d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
          <Link to='/works' className='self-end'>
            <button className="mt-8 bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">View Work</p></button>
          </Link>
      </div>
    </main>
  )
}
export default HomePage