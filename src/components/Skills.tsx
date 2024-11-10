import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className='grid md:grid-col-2 gap-20 items-center bg-indigo-950 shadow-xl shadow-slate-500 pl-10 pr-10 pb-10 pt-10  rounded-lg'>
        <div  data-aos="zoom-in">
            <h2 className='text-4xl md:text-5xl text-center '>Technology I Work With</h2>
            <p className='text-gray-500 pt-6 '>
                I have a solid foundation in web development, specialization in HTML, CSS, and Javascript. My experience extends to using frameworks like React and Next.js to create dynamic and user-frandly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learing, stay updated on the latest technologies to enhance my skills set and contribute effectively to projects.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-orange-200 text-3xl sm:text-4xl text-center '>
                <div className='space-y-2'>
                    <h2  data-aos="zoom-in">Typescript</h2>
                    <h2  data-aos="zoom-in">React.js</h2>
                    <h2  data-aos="zoom-in">Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2  data-aos="zoom-in">Tailwind</h2>
                    <h2  data-aos="zoom-in">CSS</h2>
                    <h2  data-aos="zoom-in">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
