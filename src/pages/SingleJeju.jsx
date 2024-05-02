import React from 'react';
import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';
import { Gist } from 'react-gist';


const SingleJeju = () => {
  return (
    <main className="ml-2 mr-2 mt-4"> 
        <SingleHero
            title = {workItemsData[0].title}
            overview = {workItemsData[0].overview}
            techs = {workItemsData[0].techs}
            displayImage = {workItemsData[0].displayImage}
            siteLink = {workItemsData[0].siteLink}
            githubLink = {workItemsData[0].githubLink}
            duration = {workItemsData[0].projectDuration}
            collaboration = {workItemsData[0].collaboration}
            roles = {workItemsData[0].roles}


         />
        <section className='plan-section mb-8'>
            <h2 className='font-tektur text-2xl'>- Plan</h2>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>I had to complete the project within the first month of attending the program, using pure HTML and JavaScript about the specific location or country. In the early stages, I drew inspiration from various travel and regional websites. I thought it is important to design the website and set its tone to reflect the characteristics of the region. </p>
            <img className='mt-2 mx-auto my-0' src={`/images/w-jeju/jeju-colorscheme .png`}></img>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>Jeju Island, known for its beautiful mountains, trees, and sea, inspired me to choose a green tone that evokes a forest, aiming to capture the essence of such places.</p>
        </section>
        <section className='deign-section mb-8'>
            <h2 className='font-tektur text-2xl'>- Design</h2>
            <img className='mt-2 mx-auto my-0' src={`/images/w-jeju/jeju-logo-design.png`}></img>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>I wanted to include an image of Jeju Island's iconic carved stone figure, the Stone Grandfather, in my logo. To create a logo and favicon, I designed a simple outline of the Stone Grandfather's face and features with shadows. My goal was to represent Jeju Island in a way that is both simple and meaningful, making it easily recognizable to those familiar with the island's culture.</p>
        </section>
        <section className='dev-section'>
            <h2 className='font-tektur text-2xl'>- Development</h2>
            <div>
                <video width="100%" height="240" controls autoplay>
                    <source src="/images/w-jeju/jeju-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>This code implements functionality for an image slideshow and a "Read More" button feature, created by me.</p>
            <div>
      <Gist id="c8b3715ce973cfb5a07d0fc944a6b84a" />
    </div>
        </section>
    </main>
  )
}

export default SingleJeju