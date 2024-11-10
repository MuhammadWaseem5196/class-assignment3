import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
const Project = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <section className="flex-grow w-full py-20 flex flex-col justify-center items-center text-center " 
      id="projects">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">My Projects</h2>
        <ul className="text-lg md:text-2xl text-white">
          <li>Project 1: Portfolio Website</li>
          <li>Project 2: E-commerce Site</li>
          <li>Project 3: Blogging Platform</li>
          <li>Project 4: Social Media App</li>
        </ul>
      </section>
        <Footer></Footer>
    </div>
  )
}

export default Project