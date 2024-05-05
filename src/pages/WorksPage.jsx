import React , { useState, useEffect }from 'react'
import WorkItem from '../components/sections/WorkItem';
import { workItemsData } from '../workItemData';


const WorksPage = () => {


  return (
    <main className="px-4 mt-4 max-w-screen-xl mx-auto"> 
      <h1 className='font-tektur mt-8 text-6xl sm:text-8xl font-bold'>Work</h1>
      { workItemsData.map((item, index) => (
        <WorkItem 
          key = {index}
          title = {item.title}
          briefInfo = {item.briefInfo}
          techs = {item.techs}
          thumbImages = {item.thumbImages}
          />
      )) }
    </main>
  )
}

export default WorksPage