import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    }, 50000);
    console.log(copied);
  }

  return (
    <main className="ml-2 mr-2 mt-4"> 
      <h1 className='font-tektur text-6xl font-bold'>Who I am</h1>
      <div className='font-vt323 text-sm mt-6 '>
        <p className='pb-1 text-[15px]'>Quick Menu - click! </p>
        <div className='in-page-nav font-vt323 text-sm flex gap-2'>
          <a href="#dev-section"><button id="dev-info" className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-800  focus:text-yellow-200 focus:bg-blue-800'>DEV</button></a>
          <Link><button id="extra-info" className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-800 focus:text-yellow-300 focus:bg-blue-800'>!not.DEV</button></Link>
          <Link><button id="[pb-info]" className='cursor px-2 -py-1 border border-black border-dotted shadow-md	rounded-sm hover:text-yellow-300 hover:bg-blue-700 focus:text-yellow-300 focus:bg-blue-800'>const paperBottle;</button></Link>
        </div>
      </div>
      <div className='dev-section mt-3' id="dev-section">
        <div className='left-content mb-8'>
          <h2 className='font-tektur tracking-tight text-[20px] font-bold'>I’m Ahreum. A designer, developer and problem solver.</h2>
          <p className='font-lato font-light tracking-wide text-sm mt-4'>Hello, I am a front-end web developer and UI designer originally from South Korea, currently based in Vancouver, Canada. When assigned a task, I approach it with passion. I believe that passion and empathy are the most crucial virtues in web development. Studying the most effective user-centric UI while ensuring it is aesthetically pleasing is both the most challenging task and a topic that piques my curiosity.<br /><br />Before diving into web development, I worked as a documentary broadcaster for eight years in South Korea. As I delved deeper into web development, I realized that there are many similarities between my previous role as a broadcaster and what I do now. One key similarity is always considering how to make information easily understandable from the viewer’s perspective and figuring out ways to deliver it engagingly. The experience I gained from that work significantly relates to and benefits my career in web development.</p>
        </div>
        <div className='right-section'>
          <div className='stack-section'>
          <h2 className="font-tektur text-2xl font-medium mb-3 relative after:absolute after:top-1/2 after-right-full after:ml-2 after:mt-[0.9px] after:h-[3px] after:w-52 after:bg-black">Stack</h2>
          <div className='btn-container flex gap-[0.5px] mb-3'> 
          {Object.keys(skillData).sort().map(category => (
            <Link key={category}>
                <button id={category}
                  className={`px-1 py-[4px] font-lato uppercase text-sm leading-3 text-slate-700 focus:text-zinc-600  active:underline active:text-zinc-700 active:font-bold active:ring-slate-400 active:ring-1 active:ring-opacity-5 hover:text-zinc-500  transition ${currentCategory === category ? ' text-p-color text-[14px] font-bold underline underline-offset-2' : ''}`}
                  onClick={categoryHandler}
                >
                  {category === 'development' ? 'development' : category === 'design' ? 'design' : category === 'all' ? 'all' : ''}
                </button>
              </Link>
            ))}
          </div>
          <div className='skills-container mx-[2px]'>
            <ul className='flex flex-wrap gap-[6px] font-vt323 mt-2 text-[17px] font-light'>
              { skillData[currentCategory].sort().map(skill => (
                <li key={skill} className={`px-2 bg-p-color mx-[6px] ${ turnAnimate ? 'animate-fade-up' : ''}  animate-ease-in-out animate-normal text-white `}>{skill}</li>     
                )) }
            </ul>
          </div>
          <div className='contact-section mt-4'>
            <h2 className="font-tektur text-2xl font-medium mb-3 relative after:absolute after:top-1/2 fter:ml-2 after:mt-[0.9px] after:h-[3px] after:w-[188px] after:bg-black">Contact</h2>
            <div className='email-section flex gap-2'>
              <p className='font-lato font-bold uppercase '>Email</p>
              <a className=' text-[15px] font-lato leading-6'><p>beautumn43@gmail.com</p></a>
              <button className='font-vt-323'><p className='font-vt323 text-md -mt-[0.5px] border-[0.5px] bg-slate-200 rounded-lg px-1.5 leading-[22px] hover:bg-slate-200'
               onClick={copyEmail}> { copied ? 'copied!' : 'copy!'}</p></button>
            </div>
            <div className='social-links flex gap-2'>
              <Link to={'https://www.linkedin.com/in/devahreum'} className='relative ml-3 mt-2 inline-block before:absolute before:-left-2 before:bg-p-color before:h-[18px] before:mt-[3px] before:w-1.5'><p className='font-lato font-bold text-base'>LinkdIn</p></Link>
              <Link to={'https://github.com/autumn-ahreum'} className='relative ml-3 mt-2 inline-block before:absolute before:-left-2 before:bg-p-color before:h-[18px] before:mt-[3px] before:w-1.5'><p className='font-lato font-bold text-base'>GitHub</p></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='extra-info-section mt-12' id="extra-info-section">
        <h2 className='font-tektur tracking-tight text-4xl font-bold'>Extra! Extra!</h2>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>My first job was as a server at a Korean Spy Rice Cake Bistro 🍴 to save money for buying a camera when I was in middle school. (Somehow my favorite Korean food is spicy rice cake 🌶️🥵.)</p>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>Before working as a broadcast writer, I worked various part-time jobs, such as filming and editing classroom videos 📹, working as a barista ☕, and shooting weddings 💒, while attending school.</p>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>My favorite exercise is running 🏃‍♀️, and my favorite moment is hitting the sauna after a workout 🧖‍♀️.</p>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>My most valued virtue is 仁 (Ren), which means showing kindness and empathy in how we relate to others. It's like a universal ethic that transcends specific relationships, reminding us to always be kind, even in small things. 💖</p>        
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>I often take photos from my perspective 📸, but sometimes people don't understand the story behind those pictures.</p>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>I love being in nature 🏕️, especially camping and hiking in the mountains 🏔️; it's my ultimate relaxation.</p>
      </div>
      <div className='pb-info mt-12 w-full grid grid-cols-1 '>
        <h2 className='font-tektur tracking-tight text-[32px] font-bold'>Why Paper Bottle?</h2>
        <p className='font-lato font-light tracking-wide text-sm mt-4 px-2'>Do you remember ever seeing something that immediately made you want to purchase it, making you curious about what’s inside? For me, I’ve always had a particular impulse, especially when I see well-packaged paper bottles. Whether it’s sweet strawberry milk or smooth almond milk inside, I can’t help but be drawn in by that shiny packaging and crisp white design. Makes you think it’s not just good for the environment but also better for you, right? So, if I were to craft and share content, I’d want it to be like that beautifully packaged paper bottle—something you can’t resist but want to dive into. I want my digital content to be that go-to spot someone opens up and just wants to stick around.</p> 
        <img className="mt-16 w-64 justify-self-end"src="/images/three-bottles.png" ></img>
      </div>
    </main>
  )
}

export default AboutPage