import React, { useState , useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';



const WorkItem = ({ title, brief_info, techs, thumb_images, sub_title, slug}) => {
    
  return (

    <article className={`item-${title} mb-24 flex flex-col gap-6 items-center leading-tight md:mt-12 md:flex-row md:items-start`} id={`item-${title}`}>
        <div className='text-info left-side flex flex-col mt-12 md:mt-6 font-lato text-p-color max-w-[700px] '>
            <h3 className='font-bold font-lato text-[34px] sm:text-[44px]'>{title}</h3>
            <p className='px-[0.2px] font-lato font-bold text-base mt-2 sm:text-[20px] sm:leading-8'>{sub_title}</p>
            <p className='pl-1 text-[15px] font-light leading-[22px] tracking-wide sm:text-[18px] sm:leading-[24px] sm:mt-2'>{brief_info}</p>
            {techs.length > 0 && ( 
                <ul className='techs pl-1 flex flex-wrap gap-1 font-lato text-base sm:text-[20px] mt-2 sm:mt-6'>
                    {techs.map((tech, index) => (
                        <React.Fragment key={index}>
                        <li className='px-[0.2px] font-bold'>{tech}</li>
                        {index < techs.length - 1 && <span>|</span>}
                        </React.Fragment>
                    ))}
                </ul>
            )}
            <HashLink
                to={`/works/${slug}`}
                spy={true} 
                smooth={true} 
                offset={50} 
                className='self-end'> 
                <button className="mt-10 mr-4  bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-9 sm:w-40 sm:h-12 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm sm:text-base font-lato cursor vertical mt-3">View More</p></button>
            </HashLink>    
        </div>
        <div className='thumbs-container right-side relative w-full text-center flex justify-center sm:mt-6'>
            <img className='relative block z-0 transition-opacity border-stone-700 border-[0.5px] w-[500px] md:min-w-[650px] mx-auto my-0' src={`/images/${thumb_images[0]}`} alt={`Thumbnail ${slug}`}
            ></img>
            <img className='absolute block z-[3] opacity-0 w-[500px] md:min-w-[650px] mx-auto my-0 transition-opacity hover:opacity-100 border-stone-700 border-[0.5px]' src={`/images/${thumb_images[1]}`} alt={`Thumbnail ${slug}-2`}></img>
        </div>
    </article>
)
}

export default WorkItem;