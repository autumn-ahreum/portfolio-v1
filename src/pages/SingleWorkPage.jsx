import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


// import SingleHero from '../components/sections/SingleHero';
import { workItemsData } from '../workItemData';
import Swiper from '../components/sections/Swiper';


const SingleWorkPage = () => {

  const { slug } = useParams(); 
  const currentWork = workItemsData.find(item => item.slug === slug);
  if (!currentWork) return null;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
console.log("Current Work :", currentWork);
  return (
    <>
      <Helmet>
        <title> {currentWork.title}- Ahreum Han</title>
        <meta name="description" content={`Discover details about ${currentWork.title} by Ahreum Han. Explore project insights, technologies used, and visual showcases, including live links and GitHub repositories.`} />
      </Helmet>
      <main className={`${currentWork.slug}-single px-4 mt-4 max-w-screen-xl mx-auto`}>
        <section className='hero-section mt-10 mb-10'>
          <h1 className='font-bold font-tektur text-5xl sm:text-7xl'>{currentWork.title}</h1>
          <p className='px-[0.2px] font-lato font-bold text-base sm:text-[20px] sm:leading-8 tracking-tight'>{currentWork.sub_title}</p>
          <div className='h-content-wrapper w-11/12 mx-auto'>
            <img 
              className='mt-2 w-full mx-auto my-0' 
              src={`/images${currentWork.images_dir}${currentWork.display_image[0]}`} 
              srcSet={`
                /images${currentWork.images_dir}${currentWork.display_image[2]} 400w,
                /images${currentWork.images_dir}${currentWork.display_image[1]} 800w,
                /images${currentWork.images_dir}${currentWork.display_image[0]} 1200w
              `}
              sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
              alt={`${currentWork.title} Display Image`}
            />
            <div className='btn-container flex w-full gap-2 justify-end mt-4'>
              <Link to={currentWork.site_link} className=''> 
                  <button className='mt-2 mr-1  bg-[url("/images/btn-shape-1.svg")] bg-no-repeat bg-cover w-32 h-9 sm:w-40 sm:h-12 px-2 hover:bg-[url("/images/btn-shape-2.svg")]'><p className='text-s-color text-sm sm:text-base font-lato cursor vertical mt-3'>Live Website</p></button>
              </Link>  
              <Link to={currentWork.github_link} className=''> 
                  <button className='mt-2 mr-1  bg-[url("/images/btn-shape-1.svg")] bg-no-repeat bg-cover w-32 h-9 sm:w-40 sm:h-12 px-2 hover:bg-[url("/images/btn-shape-2.svg")]'><p className='text-s-color text-sm sm:text-base font-lato cursor vertical mt-3'>Git Hub</p></button>
              </Link>  
            </div>
            {currentWork.techs.length > 0 && ( 
              <ul className='techs pl-1 mt-6 flex flex-wrap gap-1 font-lato text-[18px]'>
                  {currentWork.techs.map((tech, index) => (
                      <React.Fragment key={currentWork.index}>
                      <li className='px-[0.2px] font-bold'>{tech}</li>
                      {index < currentWork.techs.length - 1 && <span>|</span>}
                      </React.Fragment>
                  ))}
              </ul>
            )}
            <div className='mt-6 text-base sm:text-[20px] sm:leading-8 tracking-tight'>      
              <p className='pl-1 px-[0.2px] font-lato'> ✔ &nbsp; Collaboration : <span className='font-bold'>{currentWork.collaboration}</span></p>
              <p className='pl-1 mt-1 mb-2 font-lato'>✔ &nbsp;  Roles : <span className='font-bold'>{currentWork.roles}</span></p>
            </div>
            <p className='reflextion font-lato font-medium text-base sm:text-[20px] sm:leading-8 mt-4 '>{currentWork.overview}</p>     
          </div>
        </section> 
      {/*=====Single Hero Ends=====*/}
      <section className='detail-content-wrapper w-11/12 mx-auto'>
      {currentWork.sections.map((section, index) => (
        <article key={index} className={`${section.title.toLowerCase()}-section mb-8`}>
          <h2 className='font-tektur text-[33px] sm:text-[42px]'>{`- ${section.title}`}</h2>
            {section.content.map((item, itemIndex) => {
              switch (item.type) {
                  case 'paragraph':
                    return (
                      <p key={itemIndex} className='font-lato font-light tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4'>
                          {item.text}
                      </p>
                    );
                  case 'image':
                    return (
                      <img
                        key={itemIndex}
                        className='mt-2 mx-auto my-0'
                        src={`/images${currentWork.images_dir}${item.file_path}`}
                        alt={item.file_path}
                      />
                    );
                  case 'video':
                    return (
                      <div key={itemIndex} className='demo mt-5'>
                        <video width="100%" height="240" controls autoPlay>
                            <source src={`/images${currentWork.images_dir}${item.file_path}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      </div>
                      );
                  case 'codepen':
                    return (
                      <div key={itemIndex} dangerouslySetInnerHTML={{ __html: item.html }}></div>
                    );
                  case 'download':
                    return (
                      <a 
                        key={itemIndex} 
                        href={`/images${currentWork.images_dir}${item.download_link}`}
                        download 
                        className="download-link font-lato tracking-wide text-base sm:text-[20px] sm:leading-8 mt-4 font-bold italic underline bg-neutral-100 cursor-pointer focus:ring-2"
                        aria-label={`Download ${item.link_text} file`}
                        title={`Download ${item.link_text}`}
                      >          
                       {item.link_text}
                      </a>
                    )
                  default:
                    return null;
                }
            })}
        </article>
        ))}
        </section>
      <Swiper currentWorkSlug={currentWork.slug} />
      </main>
    </>
  );
}

export default SingleWorkPage;
