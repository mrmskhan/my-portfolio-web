import React from 'react'
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className='container w-[100] pt-8 shadow-xl shadow-slate-500'>
        <div className='flex justify-between items-center '>
            <div className='flex justify-start text-xl font-medium '>Muhammad Saleem Khan</div>
        </div>
            <ul className='gap-20 justify-end pr-[35px] lg-gap-16 hidden md:flex text-2xl'>
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#About">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            <SlMenu className='md:hidden' size={30} />
    </div>
  )
}

export default Navbar
