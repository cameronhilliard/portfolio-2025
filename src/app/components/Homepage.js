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
          Software Engineer / IT Professional
        </p>
        <p className='font-mont lg:text-xl text-accent dark:text-white mx-auto mt-4 mb-4 italic'>
          "Turning Ideas into Reality."
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
        I am an aspiring Software Engineer based in Halifax, Nova Scotia, with a passion for developing innovative digital solutions that improve efficiency and simplify everyday processes. My goal is to create impactful technology that makes life easier.
      </p>
    </section>

    <section id="skillspage" className="lg:w-2/3 md:w-4/5 p-6 py-24 text-white mx-auto">
      <h2 className="text-3xl text-center font-mont font-semibold dark:text-accent text-accent">Skills</h2>
      <div className='lg:flex lg:flex-row flex-wrap lg:mt-20 flex flex-col'>
        <div className='lg:col-start-2 md:col-start-1 md:p-0 p-2 mx-auto'>
          <Image 
            src={"/images/react.png"}
            width={90}
            height={80}
            alt='React Logo'
          />
          <p className='mx-auto text-accent dark:text-white text-center font-mont'>React</p>
        </div>

        <div className='mx-auto pt-4'>
          <Image 
            src={"/images/js.png"}
            width={90}
            height={80}
            alt='Javascript Logo'
          />
          <p className='mx-auto text-accent dark:text-white text-center font-mont'>Javascript</p>
        </div>

        <div className='mx-auto pt-4'>
          <Image 
            src={"/images/nodejs.png"}
            width={90}
            height={80}
            alt='Node JS Logo'
          />
          <p className='mx-auto text-accent dark:text-white text-center font-mont'>Node.js</p>
        </div>

        <div className='mx-auto pt-4'>
          <Image 
            src={"/images/mongodb.png"}
            width={90}
            height={80}
            alt='MongoDB Logo'
          />
          <p className='mx-auto text-accent dark:text-white text-center font-mont'>MongoDB</p>
        </div>

        <div className='mx-auto pt-4'>
          <Image  
            src={"/images/python.png"}
            width={90}
            height={80}
            alt='MongoDB Logo'
          />
          <p className='mx-auto text-accent dark:text-white p-2 text-center font-mont'>Python</p>
        </div>

        <div className='mx-auto pt-4'>
          <Image  
            src={"/images/tailwind.png"}
            width={90}
            height={80}
            alt='MongoDB Logo'
          />
          <p className='mx-auto p-2 text-accent dark:text-white text-center font-mont'>Tailwind</p>
        </div>
      </div>
    </section>

    <section id="projectspage" className="lg:w-2/3 md:w-4/5 py-24 p-6 text-white mx-auto">
      <h2 className="text-3xl text-center font-mont font-semibold text-accent">Projects</h2>
      <p className="mt-4 lg:text-2xl lg:w-full md:max-w-2xl text-center mx-auto text-lg font-mont text-accent dark:text-white">
        Create Project Component Next.
      </p>
      <div className='lg:grid lg:grid-cols-2 flex flex-col'>
        <div className="bg-zinc-800 lg:m-8 lg:p-4 m-4 p-4 font-mont rounded">
          <h2 className="text-accent font-bold text-xl">Project #1</h2>
          <p>Project description</p>
        </div>
        <div className="bg-zinc-800 m-8 p-4 font-mont rounded col-start-2">
          <h2 className="text-accent font-bold text-xl">Project #2</h2>
          <p>Project description</p>
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