import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const About = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
    <section 
    className="flex-grow w-full py-20 flex flex-col justify-center items-center text-center " 
    id="about"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
      About Me
    </h2>
    <p className="text-lg md:text-2xl text-white ">
      With a strong foundation in HTML, CSS, JavaScript, Next.js, and modern frameworks, 
      I build user-friendly and dynamic websites. I enjoy problem-solving and continuously 
      learning new technologies to improve my skills.
    </p>
  </section>
  <Footer></Footer>
  </div>

  )
}

export default About
