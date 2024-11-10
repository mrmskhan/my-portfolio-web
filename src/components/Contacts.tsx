import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contacts = () => {
  return (
    <div id="contacts" className='pt-32 container'>
      <div className='grid grid-cols-2 md:cols-2 bg-indigo-950 gap-10  shadow-xl shadow-slate-500 pt-10 pb-10 pl-10 pr-10  rounded-lg'>
        <div className='space-y-8 pt-20'>
          <h2 className='text-5xl'  data-aos="zoom-in">Get in Touch</h2>
          <p className='text-gray-600 text-[18px] pt-2 text-justify'  data-aos="zoom-in">     Thank you for visiting my website! If you 
                have any questions, feedback, or collaboration
                 opportunities, feel free to reach out to me. 
                 I am always open to connecting with fellow 
                 learners, developers, and professionals. 
                 You can contact me via the following methods: </p>
          <div className='flex gap-3 items-center'  data-aos="zoom-in">
            <MdOutlineMail size={30} /> msk.seven86@gmail.com
          </div>
          <div className='flex gap-3 items-center'  data-aos="zoom-in">
            <BsTelephone size={30} /> (021) 0347-2400889
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'  data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-orange-200  rounded-lg'
            id="name" />
          </div>

          <div className='flex flex-col gap-1'  data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-orange-200  rounded-lg'
            id="email" />
          </div>

          <div className='flex flex-col gap-1 '  data-aos="zoom-in">
            <label htmlFor="message">Message</label>
            <textarea
            className='bg-transparent border border-orange-200  rounded-lg mix-blend-lighten'
            id="Message" rows={8}>
             </textarea>
          </div>
          <button className='bg-orange-200 p-2 px-6 text-black rounded-lg'  data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
