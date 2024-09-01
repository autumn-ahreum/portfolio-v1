// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { workItemsData } from '../../workItemData';
import { HashLink } from 'react-router-hash-link';

// Import Swiper styles
import 'swiper/css';

export default ({ currentWorkSlug }) => {

  const filteredItems = workItemsData.filter(item => item.slug !== currentWorkSlug);

  return (
    <section className='other-work-cta w-11/12 mx-auto mt-4 md:flex md:gap-6 md:justify-start md:mt-20 md:min-h-[440px]'>
      <div>
        <h2 className='font-tektur text-[30px] sm:text-[36px] max-w-[360px] md:text-6xl'>
          Check Out More Work!
        </h2>
      </div>
      <div className='self-end'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='mt-6 md:mt-0'
        >
          {filteredItems.map((item, index) => (
            <SwiperSlide
              className='slide-container mx-auto border-2 border-p-color p-2 pb-5 rounded shadow-md min-w-[240px] max-w-[350px] min-h-[380px] sm:min-h-[410px] md:mx-2'
              key={item.slug}
              role="group"
              aria-labelledby={`slide-title-${index}`}
            >
              <div className='relative'>
                <img 
                  src={`/images/${item.thumb_images[0]}`} 
                  alt={`Thumbnail image of ${item.title}`} 
                  className='relative block z-0 transition-opacity mx-auto my-0 border border-1 rounded border-p-color' 
                />
                <img 
                  src={`/images/${item.thumb_images[1]}`} 
                  alt={`Overlay thumbnail image of ${item.title}`} 
                  className='absolute top-0 block z-[3] opacity-0 transition-opacity hover:opacity-100 mx-auto my-0 border border-1 rounded border-p-color' 
                />
              </div>
              <HashLink 
                to={`/works/${item.slug}#header`}
                aria-label={`Go to ${item.title}`}
              >
                <p 
                  id={`slide-title-${index}`}
                  className='font-lato text-sm italic font-thick mt-2 uppercase hover:underline'
                >
                  Click to go &gt;&gt;
                </p>
                <p 
                  className='capitalize text-[22px] mt-1 sm:text-2xl font-extrabold not-italic'
                >
                  {item.title}
                </p>
                <p 
                  className='px-[0.2px] font-lato pb-0 text-base tracking-tight'
                >
                  {item.sub_title}
                </p>
              </HashLink>
              {item.techs.length > 0 && ( 
                <ul className='techs mt-2 flex flex-wrap gap-1 font-lato text-sm'>
                  {item.techs.map((tech, i) => (
                    <li key={tech} className='px-[0.2px] font-extrabold'>
                      {tech} {i < item.techs.length - 1 && <span>|</span>}
                    </li>
                  ))}
                </ul>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
