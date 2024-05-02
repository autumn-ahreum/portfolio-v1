import React from 'react'
import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';

const SingleMovas = () => {
  return (
    <main>
      <SingleHero
          title = {workItemsData[1].title}
          overview = {workItemsData[1].overview}
          techs = {workItemsData[1].techs}
          displayImage = {workItemsData[1].displayImage}
          siteLink = {workItemsData[1].siteLink}
          githubLink = {workItemsData[1].githubLink}
      />

    </main>

  )
}

export default SingleMovas