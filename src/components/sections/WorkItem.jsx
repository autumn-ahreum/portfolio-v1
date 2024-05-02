import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';



const WorkItem = ({ title, briefInfo, techs, thumbImages}) => {

    function generateSlug(text){
        const lowerText = text.toLowerCase();
        return lowerText.replace(/\s+/g, '-');
    }
    
  return (

    <article className={`item-${title} mb-24`} id={`item-${title}`}>
        <div className='left-side flex flex-col mt-12 font-lato text-p-color'>
            <h3 className='font-bold text-3xl uppercase'>{title}</h3>
            <p className='pl-1 mt-2 text-[15px] leading-[22px] tracking-wide'>{briefInfo}</p>
            {techs.length > 0 && ( 
                <ul className='techs pl-1 flex flex-wrap gap-1 font-lato text-base mt-4'>
                    {techs.map((tech, index) => (
                        <React.Fragment key={index}>
                        <li className='px-[0.2px] font-bold'>{tech}</li>
                        {index < techs.length - 1 && <span>|</span>}
                        </React.Fragment>
                    ))}
                </ul>
            )}
            <Link to={`/works/${generateSlug(title)}`} className='self-end'> 
                <button className="mt-8 mr-4  bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-9 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"><p className="text-s-color text-sm font-lato cursor vertical mt-3">View More</p></button>
            </Link>    
        </div>
        <div className='right-side mt-6 relative w-full text-center flex justify-center'>
            <img className='relative block z-0 transition-opacity border-stone-700 border-[0.5px] w-[305px] mx-auto my-0' src={`/images/${thumbImages[0]}`}></img>
            <img className='absolute block z-[3] opacity-0 w-[305px] transition-opacity hover:opacity-100 border-stone-700 border-[0.5px]' src={`/images/${thumbImages[1]}`}></img>
        </div>
    </article>
)
}

export default WorkItem;