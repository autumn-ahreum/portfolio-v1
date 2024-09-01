import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';



// Stack Section
const developmentSkills = ['JavaScript', 'HTML', 'CSS', 'SASS', 'jQuery', 'PHP', 'ReactJS', 'WordPress', 'Gulp', 'Git', 'RestAPI', 'Shopify', 'WooCommerce', 'SQL', 'Tailwind'];
const designSkills = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX design'];
const emailText = 'beautumn43@gmail.com';

const skillData = {
    'development': developmentSkills,
    'design': designSkills,
    'all': [...developmentSkills, ...designSkills]
};

const AboutPage = () => {
  const baseUrl = "https://ahreum.xyz";

  //In-page-nav section 
  const [ chosenSection, setChosenSection ] = useState('dev');

  //Stack Section 
  const [ currentCategory, setCurrentCategory ] = useState('all');
  const [ turnAnimate, setTurnAnimate ] = useState(false);

  function categoryHandler(e) {
    const category = e.target.id;
    setTurnAnimate(true);
    setCurrentCategory(category) 

		setTimeout(() => {
      setTurnAnimate(false);
    }, 1200);
  }

  // Email Copy Funcationality 
  const [ copied, setCopied ] = useState(false);

  function copyEmail(){
    navigator.clipboard.writeText(emailText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

    useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  //Page nav handle
  const [violation, setViolation] = useState(null);

  const handleAnimationEnd = () => {
    setTurnAnimate(false);
  };

  useEffect(() => {
    if (violation) {
      window.scrollTo({
        top: violation.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [violation]);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    setViolation(element);
  }

  

  return (
    <>
    <Helmet>
    <title>About - Ahreum Han</title>
    <meta name="description" content="Discover the story behind Paper Bottle, a unique blend of creativity and digital innovation by Ahreum. Explore Ahreum's journey, design philosophy, and the inspiration fueling their diverse digital projects, from web development to visual artistry." />
    <meta property="og:title" content="About Me - Ahreum's Portfolio" />
    <meta property="og:description" content="Learn more about Ahreum, a front-end web developer and UI designer from South Korea, currently based in Seattle, USA." />
    <meta property="og:image" content={`${baseUrl}/images/logo.png`} />
    <meta property="og:url" content={`${baseUrl}/about`} />
    <meta property="og:type" content="website" />
    </Helmet>
    <main className="px-2 mt-4 max-w-[1000px] mx-auto"> 
      <h1 className='font-tektur mt-8 text-6xl sm:text-8xl font-bold'>Who I am</h1>
      <div className='font-vt323 px-4 text-sm mt-6 '>
        <p className='pb-1 text-xl'>Quick Menu - click! </p>
        <div className='in-page-nav font-vt323 text-base md:text-xl md:mb-8 flex gap-2'>
            <button id="dev-info-btn" onClick={() => handleNavClick('dev-section')} className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-800  focus:text-yellow-200 focus:bg-blue-800' aria-label="Navigate to Development Section">DEV</button>
            <button id="extra-info-btn" onClick={() => handleNavClick('extra-info-section')}className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-800 focus:text-yellow-300 focus:bg-blue-800' aria-label="Navigate to Extra Information Section">!not.DEV</button>
          <button id="paper-bottle-btn" onClick={() => handleNavClick('paper-bottle-info')}className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-700 focus:text-yellow-300 focus:bg-blue-800' aria-label="Navigate to Paper Bottle Section">const paperBottle;</button>
        </div>
      </div>
      <div className='dev-section mt-3' id="dev-section">
        <div className='left-content mb-8 px-4 md:w-[70%] md:float-left'>
          <h2 className='font-tektur tracking-tight text-[22px] sm:text-[28px] font-bold'>I’m Ahreum. A designer, developer and problem solver.</h2>
          <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>Hello, I am a front-end web developer and UI designer originally from South Korea, currently based in Vancouver, Canada. When assigned a task, I approach it with passion. I believe that passion and empathy are the most crucial virtues in web development. Studying the most effective user-centric UI while ensuring it is aesthetically pleasing is both the most challenging task and a topic that piques my curiosity.<br /><br />Before diving into web development, I worked as a documentary broadcaster for eight years in South Korea. As I delved deeper into web development, I realized that there are many similarities between my previous role as a broadcaster and what I do now. One key similarity is always considering how to make information easily understandable from the viewer’s perspective and figuring out ways to deliver it engagingly. The experience I gained from that work significantly relates to and benefits my career in web development.</p>
        </div>
        <aside className='right-section max-w-[400px] md:w-[30%] px-4 md:float-right '>
          <div className='stack-section '>
            <h2 className="font-tektur text-3xl sm:text-3xl font-medium mb-4 relative after:absolute after:top-1/2 after:ml-2 after:mt-[0.9px] after:h-[2px] after:w-4/6 sm:w-full 3xl:after:w-[251px] after:bg-p-color">Stack</h2>
            <div className='btn-container flex gap-[3px] mb-3'> 
            {Object.keys(skillData).sort().map(category => (
              <Link key={category}>
                  <button id={category}
                    className={`px-1 py-[4px] font-lato uppercase text-[16px] leading-3 text-slate-700 focus:text-p-color active:underline active:text-p-color  active:font-bold active:ring-slate-400 active:ring-1 active:ring-opacity-5 hover:text-zinc-500  transition ${currentCategory === category ? ' text-p-color text-[16px] font-bold underline underline-offset-2' : ''}`}
                    onClick={categoryHandler}
                  >
                    {category === 'development' ? 'development' : category === 'design' ? 'design' : category === 'all' ? 'all' : ''}
                  </button>
                </Link>
              ))}
            </div>
            <div className={`teches-container mx-[2px] ${turnAnimate ? 'animate-fade-up' : ''}`} onAnimationEnd={handleAnimationEnd}>
            <ul className='flex flex-wrap gap-[6px] font-vt323 mt-2 text-[18px] font-light'>
                { skillData[currentCategory].sort().map(skill => (
                  <li key={skill} className={`px-2 bg-p-color mx-[6px] ${ turnAnimate ? 'animate-fade-up' : ''}  animate-ease-in-out animate-normal text-white `}>{skill}</li>     
                  )) }
              </ul>
            </div>
          </div>
          <div className='contact-section mt-7'>
            <h2 className="font-tektur text-3xl sm:text-3xl font-medium mb-3 relative after:absolute after:top-1/2 after:ml-2 after:mt-[0.9px] after:h-[2px] after:w-2/4 sm:w-full 3xl:after:w-[220px] after:bg-black">Contact</h2>
            <div className='email-section flex gap-[6px]'>
              <p className='font-lato text-[18px]  font-bold uppercase '>Email</p>
              <a className=' text-[16px] font-lato leading-7 '><p>beautumn43@gmail.com</p></a>
              <button className='copy-btn' aria-label="Copy email address"><p className='font-vt323 text-[18px] -mt-[0.5px] border-[0.5px] bg-slate-200 rounded-lg px-1.5 leading-[26px] hover:bg-slate-200'
              onClick={copyEmail}> { copied ? 'copied!' : 'copy!'}</p></button>
            </div>
            <div className='social-links flex gap-3'>
              <Link to='https://www.linkedin.com/in/devahreum' className='relative ml-3 mt-2 inline-block before:absolute before:-left-2 before:bg-p-color before:h-[22px] before:mt-[3px] before:w-1.5' target='_blank' rel='noopener noreferrer' ><p className='font-lato font-bold text-xl ml-[2px]'>LinkdIn</p></Link>
              <Link to='https://github.com/autumn-ahreum'className='relative ml-3 mt-2 inline-block before:absolute before:-left-2 before:bg-p-color before:h-[22px] before:mt-[3px] before:w-1.5' target='_blank' rel='noopener noreferrer'><p className='font-lato font-bold text-xl ml-[2px]'>GitHub</p></Link>
            </div>
          </div>
        </aside>
      </div>
      <div className='extra-info-section px-4 mt-12 md:w-2/3 block' id="extra-info-section">
        <h2 className='font-tektur tracking-tight text-[42px] sm:text-[46px] font-bold'>Extra! Extra!</h2>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>My first job was as a server at a Korean Spy Rice Cake Bistro 🍴 to save money for buying a camera when I was in middle school. (Somehow my favorite Korean food is spicy rice cake 🌶️🥵.)</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>Before working as a broadcast writer, I worked various part-time jobs, such as filming and editing classroom videos 📹, working as a barista ☕, and shooting weddings 💒, while attending school.</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>My favorite exercise is running 🏃‍♀️, and my favorite moment is hitting the sauna after a workout 🧖‍♀️.</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>My most valued virtue is 仁 (Ren), which means showing kindness and empathy in how we relate to others. It's like a universal ethic that transcends specific relationships, reminding us to always be kind, even in small things. 💖</p>        
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>I often take photos from my perspective 📸, but sometimes people don't understand the story behind those pictures.</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>I love being in nature 🏕️, especially camping and hiking in the mountains 🏔️; it's my ultimate relaxation.</p>
      </div>
      <div id='paper-bottle-info' className='h-16' ></div>
      <div className='pb-info px-4 w-full grid grid-cols-1' >
        <h2 className='font-tektur tracking-tight text-[42px] sm:text-6xl font-bold'>Why Paper Bottle?</h2>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-[30px] mt-4'>Do you remember ever seeing something that immediately made you want to purchase it, making you curious about what’s inside? For me, I’ve always had a particular impulse, especially when I see well-packaged paper bottles. Whether it’s sweet strawberry milk or smooth almond milk inside, I can’t help but be drawn in by that shiny packaging and crisp white design. Makes you think it’s not just good for the environment but also better for you, right? So, if I were to craft and share content, I’d want it to be like that beautifully packaged paper bottle—something you can’t resist but want to dive into. I want my digital content to be that go-to spot someone opens up and just wants to stick around.</p> 
        <img className="mt-16 w-64 sm:w-96 justify-self-end"src="/images/three-bottles.png" alt="Three paper bottles with a minimalist design" ></img>
      </div>
    </main>
    </>
  )
}

export default AboutPage