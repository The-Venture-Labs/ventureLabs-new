import React from 'react'
import Confetti from '../../assets/AboutUs/confetti.png' 
import Trophy from '../../assets/AboutUs/trophy.png' 

const Achievements = () => {
  return (
    <div className='mx-3 md:mx-20 mb-20 bg-black rounded-2xl justify-around items-center'>
    <div className='flex  sm:gap-x-20 md:gap-x-56 lg:gap-x-96'>
        <div className='bg-gradient-to-b from-yellow-400 to-yellow-50 text-transparent bg-clip-text font-semibold text-3xl my-10 pl-10 '>
            Our Achievements
        </div>
        <div className='flex lg:ml-72 lg:gap-x-10'>
            <img src={Trophy} alt="" className='h-24 w-24 sm:h-36 sm:w-36 -mt-7 sm:-mt-9 lg:h-48 lg:w-48 lg:-mt-16 '/>
            <img src={Confetti} alt="" className='h-28 w-28 -mt-16 -ml-4 sm:h-36  sm:-mt-20  sm:ml-5 lg:h-48 lg:w-36 lg:-mt-36' />
        </div>
    </div>
    <div className='mx-6 text-yellow-400 font-semibold text-base md:text-lg px-5 pb-2'>
        <p>Unleash Success with Venture Labs: Experience, Expertise, and Accolades</p>
    </div>
    <div className='mx-6 text-white font-semibold text-base md:text-lg px-2 md:px-5'>
    <ul className='pb-16 list-disc pl-7 md:pl-10'>
        <li className='pb-0.5'>Over 500+ hours of hands-on experience in building cutting-edge technology solutions.</li>
        <li className='pb-0.5'>Extensive research and practice with 200+ hours dedicated to crafting effective marketing strategies.</li>
        <li className='pb-0.5'>Proud winner of the prestigious BIT Nishan 2022 competition organized by IIC and BIT Mesra.</li>
        <li>Recognized as the champion of the Business Plan Competition organized by Entrepreneurship Development Cell, BIT Mesra.</li>
    </ul>
    </div>
    </div>
  )
}

export default Achievements