import React , { useState, useEffect }from 'react'
import WorkItem from '../components/sections/WorkItem';
import { workItemsData } from '../workItemData';
import { Helmet } from 'react-helmet';


const WorksPage = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Helmet>
        <title> Works - Ahreum Han</title>
        <meta name="description" content="Explore the diverse range of projects by Ahreum Han on the Works page. Discover detailed descriptions, technologies used, and visual previews of each project, showcasing a journey of creativity and expertise in front-end development and design." />
      </Helmet>
      <main className="px-4 mt-4 max-w-screen-xl mx-auto"> 
        <h1 className='font-tektur mt-8 text-6xl sm:text-8xl font-bold'>Works</h1>
        { workItemsData.map((item, index) => (
          <WorkItem 
            key = {index}
            title = {item.title}
            brief_info = {item.brief_info}
            techs = {item.techs}
            thumb_images = {item.thumb_images}
            sub_title = {item.sub_title}
            slug = {item.slug}
            />
        )) }
      </main>
    </>
  )
}

export default WorksPage