import React from 'react'
import { Link } from 'react-router-dom';

const SingleHero = ({ title, overview, techs, display_image, github_link, site_link, sub_title, roles, collaboration}) => {
  return (
    <section className='hero-section mt-10 mb-10'>
      <h1 className='font-bold font-tektur text-5xl sm:text-7xl'>{title}</h1>
      <p className='px-[0.2px] font-lato font-bold text-base sm:text-[20px] sm:leading-8 tracking-tight'>{sub_title}</p>
      <div className='h-content-wrapper w-11/12 mx-auto'>
        <img 
          className='mt-2 w-full mx-auto my-0' 
          src={`/images/${display_image}`} 
          alt={`Display image for ${title}`} 
        />
        <div className='btn-container flex w-full gap-2 justify-end mt-4'>
          <Link to={site_link}>
            <button 
              type="button" 
              className='mt-2 mr-1 bg-[url("/images/btn-shape-1.svg")] bg-no-repeat bg-cover w-32 h-9 sm:w-40 sm:h-12 px-2 hover:bg-[url("/images/btn-shape-2.svg")]' 
              aria-label={`Visit live website for ${title}`}
            >
              <p className='text-s-color text-sm sm:text-base font-lato cursor vertical mt-3'>Live Website</p>
            </button>
          </Link>
          <Link to={github_link}>
            <button 
              type="button" 
              className='mt-2 mr-1 bg-[url("/images/btn-shape-1.svg")] bg-no-repeat bg-cover w-32 h-9 sm:w-40 sm:h-12 px-2 hover:bg-[url("/images/btn-shape-2.svg")]' 
              aria-label={`View GitHub repository for ${title}`}
            >
              <p className='text-s-color text-sm sm:text-base font-lato cursor vertical mt-3'>Git Hub</p>
            </button>
          </Link>
        </div>
        {techs.length > 0 && ( 
          <ul className='techs pl-1 mt-6 flex flex-wrap gap-1 font-lato text-[18px]'>
            {techs.map((tech, index) => (
              <React.Fragment key={index}>
                <li className='px-[0.2px] font-bold'>{tech}</li>
                {index < techs.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </ul>
        )}
        <div className='mt-6 text-base sm:text-[20px] sm:leading-8 tracking-tight'>      
          <p className='pl-1 px-[0.2px] font-lato'>✔ &nbsp; Collaboration: <span className='font-bold'>{collaboration}</span></p>
          <p className='pl-1 mt-1 mb-2 font-lato'>✔ &nbsp; Roles: <span className='font-bold'>{roles}</span></p>
        </div>
        <p className='reflextion font-lato font-medium text-base sm:text-[20px] sm:leading-8 mt-4'>{overview}</p>     
      </div>
    </section>
  )
}

export default SingleHero;
