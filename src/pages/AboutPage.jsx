import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';



// Stack Section
const developmentSkills = ['JavaScript', 'HTML', 'CSS', 'SASS', 'jQuery', 'PHP', 'ReactJS', 'WordPress', 'Gulp', 'Git', 'RestAPI', 'Shopify', 'WooCommerce', 'SQL', 'Tailwind'];
const designSkills = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX design', 'Brand Identity', 'UI/UX Strategy', 'Visual Storytelling'];
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
          <h2 className='font-tektur tracking-tight text-[22px] sm:text-[28px] font-bold'>const <span className='text-[26px] sm:text-[32px]' >Ahreum</span> = Dev && !not.Dev;</h2>
          <img
            className='my-0 w-72 p-1 opacity-85 rounded-2xl'
            src="/images/ah.png"  
            alt="Ahreum Image"
          />
          <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'>I’m Ahreum. A Design Engineer bridging the gap between aesthetic branding and functional code. I believe that visual beauty truly shines when it translates into seamless usability. My journey as a creator is not limited to a single role; I build brand identities that resonate, design intuitive UI/UX flows that guide users, and transform those visions into high-performance reality through frontend development. I strive to create digital products that are not only pixel-perfect but also robust and user-centered at their core.<br /><br />Before transitioning into the tech industry, I spent nearly a decade as a documentary broadcaster, mastering the art of audience-focused communication. This experience serves as the foundation of my work as a Design Engineer. Just as a documentary requires a clear flow and engaging delivery to keep viewers tuned in, a digital product requires seamless UX and robust performance. I leverage my deep understanding of human perspective to bridge the gap between complex backend logic and user-friendly frontend experiences.</p>
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
        <h2 className='font-tektur tracking-tight text-[42px] sm:text-[46px] font-bold'>Beyond the Code!</h2>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'><span className="font-bold block mb-2"> The Hustle & The Lens </span> My journey began in middle school, working at a local bistro to save up for my first camera. That early drive for visual storytelling led me through various roles—from filming classroom lectures to capturing the raw emotions of weddings. These experiences taught me how to observe the world through a lens, a skill that now defines my attention to detail in UI/UX design.</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'><span className="font-bold block mb-2"> The Philosophy of 仁 (Ren)</span> At the core of my work is the virtue of 仁 (Ren)—the practice of deep empathy and kindness toward others. I believe technology should be inherently human. For me, UX design is not just about pixels; it’s about practicing Ren by creating interfaces that truly understand and respect the user’s perspective.</p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'> </p>
        <p className='font-lato font-light tracking-wide text-[15px] leading-6 sm:text-[18px] sm:leading-7 mt-4'><span className="font-bold block mb-2"> Recharging in Nature</span> When I’m not building digital products, you’ll find me running, camping, or hiking through the mountains. I find my ultimate clarity in nature and the rewarding heat of a sauna after a long run. These moments of physical challenge and quiet reflection keep my creativity grounded and my perspective fresh.</p>        
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