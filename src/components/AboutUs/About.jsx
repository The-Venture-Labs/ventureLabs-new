import React from 'react'
import Sofa from '../../assets/AboutUs/sofa.png'
const About = () => {
  return (
    <div className='mx-3 lg:mx-20 bg-bgColor rounded-2xl justify-around items-center mb-28 md:mb-36'>
      <div className='flex gap-x-8 sm:gap-x-36 md:gap-x-48 lg:gap-x-96'>
        <div className='bg-gradient-to-b from-yellow-400 to-yellow-50 text-transparent bg-clip-text font-semibold text-4xl my-10 pl-10'>
            About Us
        </div>
        <div className='lg:ml-80'>
          <img src={Sofa} alt=""  className='-mt-44 h-60 w-60 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:w-96 lg:h-96 lg:-mt-72'  />
        </div> 
    </div>
    <div className='mx-6 text-white font-semibold text-lg px-5'>
    <p className='pb-1'>Introducing Venture Labs, your ultimate partner in startup growth! </p>
    <p className='pb-1'>We specialize in providing comprehensive services to fuel your success.</p>   
    <p className='pb-1'> From website and app development to digital and content marketing, we've got you covered. Need assistance in legal matters or managing your finances? Look no further. With our expertise and unwavering commitment, we ensure your startup reaches new heights. Accelerate your business growth with our tailored solutions and unleash its full potential. Don't wait another moment to revolutionize your startup journey.
    </p>
    </div>
    <div className='mx-6 text-yellow-400 font-semibold text-lg px-5 pb-10'>
        <p>Contact Venture Labs today and embark on a path to unparalleled success!</p>

    </div>


    </div>
  )
}

export default About