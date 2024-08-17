import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


const NotFoundPage = () => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <Helmet>
        <title>Not Found - Ahreum Han</title>
      </Helmet>
      <main className="px-4 mt-4 max-w-screen-xl mx-auto h-[60vh] text-center flex flex-col justify-center items-center gap-8"> 
      <h1 className='font-tektur text-7xl '>Sorry...!</h1>
      <h1 className='font-tektur text-4xl max-w-xl'>The page you were looking for was not found.</h1>
      <p className='text-3xl bg-p-color text-white p-3 font-display'>Go back to the <a href='/' className='underline'>HOME PAGE</a></p>
      </main>
    </>
  )
}

export default NotFoundPage