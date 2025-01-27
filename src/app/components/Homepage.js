"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Homepage = () => {
  
  return (
  <>
    <section id="homepage" className='text-white lg:pt-32 pt-12'>
      <div id="home-container" className='lg:w-2/3 md:w-4/5 flex flex-col items-center mx-auto '>
        <div className='mx-auto flex-shrink-0'>
          <Image 
            src={"/images/cameron.png"}
            width={170}
            height={50}
            alt='Profile Picture of Cameron'
            className='mb-5 border-2 rounded-full border-accent'
          />
        </div>
        <h1 className='font-mont lg:text-5xl md:text-3xl text-2xl text-accent mx-auto dark:text-white'>
          Hi, I'm <strong className='text-accent'>Cameron Hilliard</strong>
        </h1>
        <p className='font-mont text-accent dark:text-white mx-auto lg:text-2xl text-lg mt-4'>
          Data Engineer / Full Stack 
        </p>
        <p className='font-mont lg:text-xl text-accent dark:text-white mx-auto mt-4 mb-4 italic'>
          "Engineering Data for Impact"
        </p>
        <div className='flex mx-auto mt-4'>
          <Link href="#projectspage" className='bg-accent rounded-lg mr-4 p-4 font-mont lg:text-lg font-bold'>
            View My work
          </Link> 
          <Link href="#contactme" className='bg-accent rounded-lg p-4 font-mont lg:text-lg font-bold'>
            Contact Me
          </Link>
        </div>
      </div> 
    </section>

    <section id="aboutpage" className="lg:w-2/3 md:w-4/5 py-32 p-6 text-white mx-auto">
      <h2 className="text-3xl text-center font-mont font-semibold text-accent">About Me</h2>
      <p className="mt-4 lg:text-2xl lg:w-full md:max-w-2xl text-center mx-auto text-lg font-mont text-accent dark:text-white">
      Hi, I’m an aspiring Data Engineer from Halifax, Nova Scotia. With a background in Full Stack Development and IT, I’m passionate about transforming data into meaningful insights and building efficient solutions.
      </p>
    </section>

    <section id="skillspage" className="lg:w-2/3 md:w-4/5 max-w-6xl p-6 py-24 text-white mx-auto">
      <h2 className="text-3xl text-center font-mont font-semibold dark:text-accent text-accent">Skills</h2>
      <div className='lg:flex lg:flex-row flex-wrap justify-center  mt-8 flex flex-col'>
      
      <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 grid grid-cols-2 text-center  font-bold gap-4 '>

        <div className='px-6 p-2  rounded-full dark:bg-zinc-800 shadow-xl text-accent'> 
          <span className='font-mont' >Python</span>
        </div>
       
        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl text-accent'> 
          <span className='font-mont' >JavaScript</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl text-accent'> 
          <span className='font-mont'>React</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl text-accent'> 
          <span className='font-mont' >Git</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800  shadow-xl text-accent'> 
          <span className='font-mont' >Node.js</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl text-accent'> 
          <span className='font-mont'>SQL</span>
        </div>


        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl  text-accent'> 
          <span className='font-mont'>Bash</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl  text-accent'> 
          <span className='font-mont'>MongoDB</span>
        </div>

        <div className='px-6 p-2 rounded-full dark:bg-zinc-800 shadow-xl  text-accent'> 
          <span className='font-mont'>Express</span>
        </div>
      </div>

      </div>
    </section>

    <section id="projectspage" className=" lg:w-4/5  py-24 p-6 text-white mx-auto">
      <h2 className="text-3xl text-center font-mont font-semibold text-accent">Projects</h2>
      <div className='lg:w-6/12 mx-auto'>
      <div className="max-w-sm sm:max-w-lg mt-4 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden  z-[1] mx-auto">
      <Image 
            src={"/images/busmapimage.png"}
            width={300}
            height={100}
            alt="Project Preview"
            className='w-full'
          />
            <div className="p-4">
              <h2 className="text-xl font-bold text-accent mb-2 font-mont">Bus Map Road API</h2>
                <p className="text-accent dark:text-white font-mont mb-4">
                  A Bus Map pulls data from the Halifax transit API, updating every minute. 
                  Built using Leaflet to map images and fetch map information dynamically.
                </p>
        
                <Link href="https://cameronhilliard.github.io/busmapapi/" className="inline-block font-mont bg-accent hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition">Live Demo</Link>
            </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default Homepage

















// const Homepage = () => {
//     return (
//       <section classNameName='grid grid-cols-1 grid-row-3 lg:grid lg:grid-cols-3 lg:grid-rows-4 w-4/5 mt-20 text-white mx-auto'>
//           <h1 classNameName='font-mont text-4xl font-bold text-center mt-32 col-start-2 row-start-1'>Hi, I'm Cameron Hilliard</h1>
//           <p classNameName='font-mont text-2xl font-bold text-center mt-12 col-start-2 row-start-2'>Web Developer / IT Professional</p>
//           <div classNameName='lg:col-start-2 lg:row-start-3 lg:mx-auto'>
//               <a classNameName='bg-accent mr-8 p-4 font-mont font-bold'>View My work</a>
//               <a classNameName='bg-accent p-4 font-mont font-bold'>Contact Me</a>
//           </div>
//       </section>
//     )
//   }
  
//   export default Homepage