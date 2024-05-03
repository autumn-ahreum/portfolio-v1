import React from 'react'
import { Link } from 'react-router-dom';

const SingleHero = ({ title, overview, techs, displayImage, githubLink, siteLink, duration, roles, collaboration}) => {
  return (
    <section className='hero-section mb-10'>
      <h1 className='font-bold font-lato text-[1.7rem]'>{title}</h1>
      <img className='mt-2 w-full] mx-auto my-0' src={`/images/${displayImage}`}></img>
      <div className='btn-container flex w-full gap-2 justify-end mt-4'>
        <Link to={siteLink} className=''> 
            <button className="bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">Live Website</p></button>
        </Link>  
        <Link to={githubLink} className=''> 
            <button className="bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">Git Hub</p></button>
      </Link>  
      </div>
      {techs.length > 0 && ( 
        <ul className='techs pl-1 mt-6 flex flex-wrap gap-1 font-lato text-base'>
            {techs.map((tech, index) => (
                <React.Fragment key={index}>
                <li className='px-[0.2px] font-bold'>{tech}</li>
                {index < techs.length - 1 && <span>|</span>}
                </React.Fragment>
            ))}
        </ul>
      )}
      <div className='mt-6  font-lato'>      
        <p className='pl-1 px-[0.2px] font-lato'> ✔  Collaboration : <span className='font-bold'>{collaboration}</span></p>
      <p className='pl-1 my-2font-lato text-base tracking-wide'>✔  Roles : <span className='font-bold'>{roles}</span></p>
      </div>

      <p className='pl-1 pr-2 mt-2 px-3 font-lato tracking-wide text-[15px] '>{overview}</p>        
    </section>
  )
}

export default SingleHero