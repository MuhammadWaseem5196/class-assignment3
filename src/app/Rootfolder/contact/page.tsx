import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
         <section
        className="flex-grow w-full py-20 flex flex-col justify-center items-center text-center"
        id="contact"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Contact Me
        </h2>
        <form
          className="w-full max-w-lg space-y-6"
          action="#"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Contact