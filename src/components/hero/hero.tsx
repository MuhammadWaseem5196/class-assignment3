import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="h-screen py-20 flex flex-col-reverse md:flex-row items-center justify-center
                        transition-all duration-1000 ease-in-out transform" id="home">
      
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/profile.jpg"
          alt="portfolio profile"
          width={350}
          height={350}
          className="rounded-full shadow-lg"
        />
      </div>
      
      <div className="md:w-1/2 px-4 text-center md:text-left">
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Hi, I&apos;m Salwagull
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          I&apos;m a Web Developer passionate about creating engaging and responsive websites.
        </p>
      </div>
    </section>
  )
}

export default Hero
