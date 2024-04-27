import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <main className="ml-2 mr-2">
      <div className='here-section text-right mt-4'>
        <h2 className='font-tektur uppercase italic text-3xl'>Front-End Web Developer</h2>
        <h2 className='font-lato text-2xl'>Ahreum Han</h2>
        <Link to='/about' > 
          <button className="mt-2 bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">Why Paper Bottle?</p>

          </button>
          </Link>
     


        <img className="mt-6"src="/images/banner.png" ></img>

      </div>
      <div>

      </div>
    </main>
  )
}

export default HomePage