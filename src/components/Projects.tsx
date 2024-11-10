import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title:"Resume Builder",
        desc:"A React & Typescript based app for managing and organized",
        img:"/proj01.png",
        tags:["React", "Node", "css", "typesctipt"],
    },
    {
        id:1,
        title:"Dynamic Resume",
        desc:"A React & Typescript based app for managing and organized",
        img:"/proj02.png",
        tags:["React", "Node", "css", "typesctipt"],
    },
    {
        id:2,
        title:"Editable Resume",
        desc:"A React & Typescript based app for managing and organized",
        img:"/proj03.png",
        tags:["React", "Node", "css", "typesctipt"],
    },
    {
        id:3,
        title:"Sharable Resume",
        desc:"A React & Typescript based app for managing and organized",
        img:"/proj04.png",
        tags:["React", "Node", "css", "typesctipt"],
    },
    {
        id:4,
        title:"Giaic Iniciative",
        desc:"A React & Typescript based app for managing and organized",
        img:"/proj05.png",
        tags:["React", "Node", "css", "typesctipt"],
    },
]

const Projects = () => {
  return (
    <div id="projects" className='container pt-32 '>
      <Heading title="My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg:grid-cols-0 place-items-center  bg-indigo-950 shadow-2xl shadow-slate-500 pb-10 pt-10 rounded-lg'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
