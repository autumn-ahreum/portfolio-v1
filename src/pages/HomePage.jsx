import React, { useState , useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

const HomePage = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <Helmet>
        <title>Ahreum Han- Front-End Developer</title>
        <meta name="description" content="Explore to Paper Bottle, Ahreum Han's evolving front-end development and design brand. Discover a portfolio of innovative web projects and thoughtfully crafted designs that highlight a journey of continuous growth, creativity, and passion for the digital world." />
      </Helmet>
      <main className='px-4 mt-4 max-w-screen-xl mx-auto' id='home-header'> 
        <div className='here-section mt-10'>
          <div className="banner-intro flex flex-col align-end text-right">
            <h3 className='font-tektur font-medium uppercase  text-3xl sm:text-4xl md:text-5xl'>Front-End Web Developer</h3>
            <h2 className='font-lato text-2xl sm:text-4xl md:5xl md:mt-2'>Ahreum Han</h2>
            <HashLink to="/about#paper-bottle-info"   spy={true} smooth={true} hashSpy={true}  offset={50} duration={500} delay={1000} isDynamic={true}>
              <button 
                className="mt-2 mr-2 relative md:w-40 md:h-12 z-[2] bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover h-10 px-2 hover:bg-[url('/images/btn-shape-2.svg')] cursor-pointer"
                aria-label="Learn more about Paper Bottle"
              >
                <p className="text-s-color text-sm md:text-base font-lato cursor vertical mt-3">Why Paper Bottle?</p>
              </button>
            </HashLink>
          </div>
          <picture>
            {/* s-screen */}
            <source
              media="(max-width: 480px)"
              srcSet="/images/first-test-small.gif 480w"
              sizes="(max-width: 480px) 100vw"
            />
            {/* m-screen */}
            <source
              media="(min-width: 481px) and (max-width: 768px)"
              srcSet="/images/first-test-medium.gif 768w"
              sizes="(min-width: 481px) and (max-width: 768px) 100vw"
            />
            {/* l-screen */}
            <source
              media="(min-width: 769px)"
              srcSet="/images/first-test-large.gif 1071w"
              sizes="(min-width: 769px) 100vw"
            />
            <img
              className="mt-6 mb-16 w-full object-cover sm:-mt-6 xl:w-[1071px] mx-auto block"
              src="/images/first-test-large.gif"
              alt="Stiring a Soup Animation"
              width="1071"
              height="746"
            />
          </picture>
        </div>
        <div className='Second-banner flex flex-col mt-36 mb-20 max-w-[1250px] mx-auto'>
            <picture>
              {/* s-screen */}
              <source
                media="(max-width: 480px)"
                srcSet="/images/second-banner-small.png 480w"
                sizes="(max-width: 480px) 100vw"
              />
              {/* m-screen */}
              <source
                media="(min-width: 481px) and (max-width: 768px)"
                srcSet="/images/second-banner-medium.png 768w"
                sizes="(min-width: 481px) and (max-width: 768px) 100vw"
              />
              {/* l-screen */}
              <source
                media="(min-width: 769px)"
                srcSet="/images/second-banner-large.png 1030w"
                sizes="(min-width: 769px) 100vw"
              />
              <img
                src="/images/second-banner-large.png"
                alt="Banner displaying text: Thoughtful Design, User-centered Web Interface, Intuitive Flow, Customized Solutions"
                className="block w-[1100px] self-center"
                width="1100"
                height="504"
              />
            </picture>
            <HashLink to='/works#header' className='self-end'>
              <button 
                className="mt-8 bg-[url('/images/btn-shape-1.svg')] bg-no-repeat bg-cover w-32 h-10 md:w-40 md:h-12 xl:mt-20 px-2 hover:bg-[url('/images/btn-shape-2.svg')]"
                aria-label="View Works"
              >
                <p className="text-s-color text-sm md:text-base font-lato cursor vertical mt-3">View Works</p>
              </button>
            </HashLink>
          </div>
      </main>
    </>

  )
}
export default HomePage