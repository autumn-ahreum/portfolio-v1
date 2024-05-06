import React, { useState, useEffect } from 'react';
import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';
import Swiper from '../components/sections/Swiper';


const SinglePawtopia = () => {
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
            title = {workItemsData[2].title}
            overview = {workItemsData[2].overview}
            techs = {workItemsData[2].techs}
            displayImage = {workItemsData[2].displayImage}
            siteLink = {workItemsData[2].siteLink}
            githubLink = {workItemsData[2].githubLink}
            duration = {workItemsData[2].projectDuration}
            collaboration = {workItemsData[2].collaboration}
            roles = {workItemsData[2].roles}
            subTitle = {workItemsData[2].subTitle}

         />
         <div className='detail-content-wrapper w-11/12 mx-auto'>
          <section className='plan-section mb-8'>
              <h2 className='font-tektur text-[33px] sm:text-[42px]'>- Plan: Real-Life Features for Convention Website</h2>
              <p className='plan-desc font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>Our capstone project was a collaborative effort among four team members, spanning four weeks. We meticulously progressed through idea generation, content inventory, wireframing, development, and styling phases. The project's primary objective was to implement practical features including direct ticket purchasing, tiered vendor information display (price, description), schedule presentation, detailed activities introduction, top-tier vendor showcase on every page, and a news subscription feature. </p>
              <img className='mt-2 mx-auto my-0' src={`/images/w-paw/paw-pm-image.png`}alt='Project Management Tool Screenshot'></img>
              <p className='plan-descr-2 font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>For our first group project, all members participated across roles without boundaries, including project management, development, and design. We actively organized meetings using project management tools like Trello and aimed to enhance communication efficiency using Google Sheets, Google Docs, Slack, and other tools.</p>
          </section>
          <section className='deign-section mb-8'>
            <h2 className='font-tektur text-[33px] sm:text-[42px]'>- Design Process: Selecting a Playful Concept</h2>
            <p className='design-descr font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>Pawtopia was developed as a website using WordPress and WooCommerce plugins. We focused on making it easy for the client (festival owner) to update and understand the content. Vendors were categorized into tiers using taxonomy, and their logos were displayed accordingly with sorting options for day1, day2, and all. For activities, schedules were organized using a time picker and displayed by schedule or day. In addition to the requirements, the main page included a festival countdown feature and other intuitive features to engage users more effectively.. </p>
            <img className='mt-2 mx-auto my-0' src={`/images/w-paw/paw-color-scheme.png`} alt='Pawtopia Logo and Color Scheme'></img>
            <p className='design-descr font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 mb-8'>After finalizing the design concept, the designer worked on high-fidelity wireframes, which were discussed and iteratively refined by the team. The design aimed to make navigation easy for users by avoiding complex structures. The menu was simplified, and CTAs were strategically placed on the homepage to ensure ease of use for festival visitors and stakeholders (vendors/volunteers)</p>
            <img className='mt-2 mx-auto my-0' src={`/images/w-paw/paw-wireframes.png`} alt='Pawtopia Hi-fi Wireframes'></img>
          </section>
          <section className='dev-section mb-8'>
            <h2 className='font-tektur text-[33px] sm:text-[42px]'>- Enhancing User Experience with WordPress and WooCommerce</h2>
            <p className='dev-descr font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 my-8'>Pawtopia was developed as a website using WordPress and WooCommerce plugins. We focused on making it easy for the client (festival owner) to update and understand the content. Vendors were categorized into tiers using taxonomy, and their logos were displayed accordingly with sorting options for day1, day2, and all. For activities, schedules were organized using a time picker and displayed by schedule or day. In addition to the requirements, the main page included a festival countdown feature and other intuitive features to engage users more effectively.</p>
          </section>
         </div>
         <Swiper
          currentWorkSlug={workItemsData[2].slug}/>
    </main>
  )
}

export default SinglePawtopia