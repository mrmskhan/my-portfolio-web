import React from 'react'
import { SlMenu } from 'react-icons/sl'; // Assume you have imported the icon

const Navbar = () => {
  return (
    <div className='container w-full pt-8 shadow-xl shadow-slate-500'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start text-xl font-medium'>Muhammad Saleem Khan</div>
      </div>
      <ul className='gap-20 justify-end pr-[35px] lg-gap-16 hidden md:flex text-2xl'>
        <li className='menuLink'>
          <a href="#hero" className="hover:text-orange-200">Home</a>
        </li>
        <li className='menuLink'>
          <a href="#about" className="hover:text-orange-200">About</a>
        </li>
        <li className='menuLink'>
          <a href="#projects" className="hover:text-orange-200">Projects</a>
        </li>
        <li className='menuLink'>
          <a href="#skills" className="hover:text-orange-200">Skills</a>
        </li>
        <li className='menuLink'>
          <a href="#contact" className="hover:text-orange-200">Contact</a>
        </li>
      </ul>
      <SlMenu className='md:hidden' size={30} />
    </div>
  );
}

export default Navbar;





