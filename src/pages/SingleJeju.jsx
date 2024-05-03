import React, { useState, useEffect } from 'react';
import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';


const SingleJeju = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

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
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>I aimed to create a layout that showcases the destination's attractions and scenery with large, high-quality images. In addition to the image slider on the homepage, I highlighted each page with a large image banner to create visual highlights. </p>
            <img className='mt-2 mx-auto my-0' src={`/images/w-jeju/jeju-desktop-images.png`}></img>            
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>The layout includes a hero section at the top, featuring a captivating image, followed by sections highlighting various aspects of the destination such as attractions, attractions andactivities. </p>
            <img className='mt-4 mx-auto my-0' src={`/images/w-jeju/jeju-mobile-images.png`}></img>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>
            The content is presented in a visually appealing manner, incorporating a mix of images, text, and sometimes videos or interactive elements to engage users and encourage them to explore further.</p>
        </section>
        <section className='dev-section mb-8'>
            <h2 className='font-tektur text-2xl mb-8'>- Development</h2>
            <div>
                <video width="100%" height="240" controls autoplay>
                    <source src="/images/w-jeju/jeju-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className='plan-decription mt-4 mb-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>The slideshow displays a series of images, allowing users to move back and forth between them. Each image has a "Read More" button that reveals additional text specific to that image when clicked. These features enhance the user experience by providing interactive content presentation.</p>
            <div dangerouslySetInnerHTML={{__html: `
              <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js" data-slug-hash="oNOrzzd" data-user="Autumn-the-reactor" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                <span>See the Pen <a href="https://codepen.io/Autumn-the-reactor/pen/oNOrzzd">Untitled</a> by Autumn (<a href="https://codepen.io/Autumn-the-reactor">@Autumn-the-reactor</a>) on <a href="https://codepen.io">CodePen</a>.</span>
              </p>
            `}}></div>
                <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>It includes functions to move to the next or previous slide <code>plusSlides(n)</code>, or jump to a specific slide <code>currentSlide(n)</code>, and to display the slides <code>showSlides(n)</code>.<br/>
                With the "Read More" button, users can toggle the display of additional text related to each slide. The <code>myFunction(index)</code> function controls this behavior, toggling the display of the "Read More" button and the additional text for a specific slide when clicked.



</p>

        </section>
        <section className='reflextion-section '>
            <h2 className='font-tektur text-2xl mb-8'>- Reflection</h2>
            <p className='plan-decription mt-4 pl-1 px-3 font-lato font-light tracking-wide text-[15px]'>This is my first project creating a website with multiple pages and features. While the site is functional and accessible to most users, I realized it doesn't follow best practices, especially regarding photo optimization, after learning more about it. My main focus was to make users feel the charm of 'Jeju Island' by showcasing large photos so I could learned experience on how to arrange important content and what features to include to make it more efficient. </p>
        </section>
    </main>
  )
}

export default SingleJeju