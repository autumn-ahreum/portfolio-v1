import React, { useState, useEffect } from 'react';
import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';
import Swiper from '../components/sections/Swiper';



const SingleMovas = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  

  return (
    <main className="px-4 mt-4 max-w-screen-xl mx-auto"> 
      <SingleHero
        title = {workItemsData[1].title}
        overview = {workItemsData[1].overview}
        techs = {workItemsData[1].techs}
        displayImage = {workItemsData[1].displayImage}
        siteLink = {workItemsData[1].siteLink}
        githubLink = {workItemsData[1].githubLink}
        collaboration = {workItemsData[1].collaboration}
        roles = {workItemsData[1].roles}
        subTitle = {workItemsData[1].subTitle}
      />
      <div className='detail-content-wrapper w-11/12 mx-auto'>
        <section className='plan-section mb-12'>
          <h2 className='font-tektur text-[30px] sm:text-[36px]'>- Initial Design</h2>
          <p className='ini-plan font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>Before making the design decisions, I explored other movie streaming websites and movie databases. However, most of these websites had a dark theme with a modern feel. This led me to consider creating a website with a lighter tone and an old-fashioned feel.</p>
          <img className='mt-2 mx-auto my-0' src={`/images/w-movas/movas-old-color-scheme.png`}></img>
          <p className='ini-plan font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 mb-5'>I aimed to give this website a light theme with a retro vibe, rather than a dark one. In the early stages of the hifi-wireframe, I added noise to a light background to achieve an old, funky look. To enhance the retro feel, I used yellow as an accent color, contrasting it with purple.</p>
          <img className='mt-2 mx-auto' src={`/images/w-movas/movas-old-wireframes.png`}></img>
        </section>
        <section className='new-design-section mb-10'>
          <h2 className='font-tektur text-[30px] sm:text-[36px]'>- Plans Can Change: A Design Tale</h2>
          <p className='design-plan font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 mb-4'>In the development phase, as I started styling, I noticed a major flaw in my design - it wasn't drawing enough attention to the content. Movie posters are vibrant and informative, but the noisy white background was distracting. So, I quickly decided to simplify the design and switch back to a dark mode.</p>
          <img className='mt-2 mx-auto my-0' src={`/images/w-movas/movas-color-scheme.png`}></img>
          <p className='ini-plan font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>The new design plan aimed to eliminate unnecessary text and design elements, focusing more on the movie content. I avoided using flashy design icons and aimed to allow users to focus more on the movie content, appealing to them as much as possible.</p>
          <div className='demo-responsive mt-4 text-center'>
            <video width="100%" height="240" controls autoplay>
                <source src="/images/w-movas/demo-movas-responsive.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className='font-lato text-sm'>Fully Responsive Design </p>
          </div>
        </section>
        <section className='dev-section mb-10'>
          <h2 className='font-tektur text-[30px] sm:text-[36px]'>- My first exprience with React</h2>
          <p className='dev-part font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 mb-4'>This app utilizes the Movie Database API to fetch movie data and showcases movies in different sections such as popular, top-rated, trending, and now playing.It uses useState to manage the movieData and url_set states. movieData stores the fetched movie data, and url_set stores the URL for fetching data from the API.</p>
          <div className='demo-addtolist text-center'>
            <video width="100%" height="240" controls autoplay>
              <source src="/images/w-movas/demo-movas-addtolist.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className='font-lato text-sm'>'Add to List' Accessablity</p>
          </div>
          <p className='dev-info add-list-info font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 mb-4'>This Card component manages a "Add to List" feature for movies. It toggles the state of addToList when the user clicks the add button, allowing them to add or remove movies from their list stored in local storage.</p>
          <div className='codepen-card-component' dangerouslySetInnerHTML={{__html: `
            <p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="gOyNRJB" data-user="Autumn-the-reactor" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/Autumn-the-reactor/pen/gOyNRJB">
            MDB movie card </a> by Autumn (<a href="https://codepen.io/Autumn-the-reactor">@Autumn-the-reactor</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          `}}></div>
        </section>
        <section className='reflextion-section mb-8'>
          <h2 className='font-tektur text-[30px] sm:text-[36px]'>- What I learned from the project</h2>
          <p className='reflextion font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 '>In my first React project with the Movie Database API, I gained a solid foundation in React fundamentals, such as components, state, props, and lifecycle methods. I also gained experience in API integration, learning how to make requests, handle responses, and update my app's state. Implementing routing for different sections introduced me to React Router for navigation. Managing state for user interactions and structuring components effectively taught me the importance of state management and component organization. Additionally, I learned about UI/UX design principles to enhance the look and feel of my app.</p>
        </section>
      </div>
      <Swiper
          currentWorkSlug={workItemsData[1].slug}/>
    </main>
  )
}

export default SingleMovas