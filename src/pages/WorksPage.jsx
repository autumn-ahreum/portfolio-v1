import React , { useState, useEffect }from 'react'
import WorkItem from '../components/sections/WorkItem';
import { workItemsData } from '../workItemData';


const WorksPage = () => {


  return (
    <main className="ml-2 mr-2 mt-4"> 
      <h1 className='font-tektur text-6xl font-bold'>Work</h1>
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