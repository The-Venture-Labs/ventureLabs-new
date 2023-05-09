import React from 'react'
import HeroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='mx-20'>
        <div className="md:flex justify-between ">
    <div className="flex-col text-center flex-auto space-y-3 pt-16 sm:pt-0">
      <div className="text-white font-bold text-3xl sm:">
        Grow Your Buisness with
      </div>

      <div class="font-bold bg-gradient-to-b from-blue-900 to-blue-500 text-transparent bg-clip-text text-4xl">
        VENTURE LABS
      </div>
    </div>
    <div className="md:flex">
      <div className="text-white flex-col text-center m-5 space-y-5 mt-24">
        <div className="font-bold">Ab dhandha karna hua easy</div>
        <div>
          <span> Book your slot</span>
          <span className="text-red-500"> NOW</span>
        </div>
        <div class="overflow-hidden sm:mx-8 sm:block flex justify-center items-center w-48 mx-auto">
          <button class="block text-white text-sm shadow-border bg-[#071145] py-2 sm:px-4 font-sans tracking-wide uppercase font-bold rounded-full ">
            Schedule a Call
          </button>
        </div>
      </div>
      <div>
        <img src={HeroImage} alt="" className="w-96 h-auto" />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero