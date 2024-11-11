import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 py-6 text-center text-white bg-indigo-950'>
      <p>© Saleem | All rights reserved 2024.</p>
      <div>
        <a 
          href="https://www.linkedin.com/in/mskhan889/" 
          className="text-orange-200 hover:text-white mx-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          My LinkedIn Projects
        </a>
        <a 
          href="https://github.com/mrmskhan" 
          className="text-orange-200 hover:text-white mx-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  )
}

export default Footer
