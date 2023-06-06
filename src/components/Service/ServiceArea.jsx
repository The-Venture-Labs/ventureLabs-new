import React from 'react'
import Technical from"../../assets/Service/technical.png"
import Strategy from"../../assets/Service/strategy.png"
import DigitalMarketing from"../../assets/Service/digitalMarketing.png"
import { Link } from 'react-router-dom'

const ServiceArea = () => {
  return (
    <div className=' mx-4 my-10 md:mx-20'>
    <div className='bg-yellow-300 text-transparent bg-clip-text font-semibold text-4xl mb-10 '>
         Our Service Areas
    </div>
      <div className=''>
        <Link to='/marketing'>
        <div className='bg-bgColor md:flex md:w-3/5  hover:scale-105 duration-500 rounded-2xl mb-7'>
          <div className='mx-auto'>
            <img src={Technical} alt="" className='w-44 h-44 mx-auto md:mr-36 md:my-10 md:ml-10 ' />
          </div>
          <div>
            <h4 className='text-yellow-300 font-bold py-2 text-center my-6' >
              Technical Consultancy
            </h4>
            <p className='text-white md:pl-14 md:pr-4 px-5'>Explore essential web development services like website development, web-app development, CRM & ERP solutions, API integration, mobile app development, UI/UX development, and website optimization. </p>
<p className='text-yellow-300  py-4 md:pl-14 px-5 md:pr-4'>Click to create engaging digital experiences and drive business growth with expert web development expertise. </p>
          </div>
        </div>
        </Link>

        <a href=''>
        <div className='bg-bgColor md:flex md:w-3/5  hover:scale-105 duration-500 rounded-2xl mb-7  md:my-20 md:ml-auto'>
          <div className='mx-auto'>
            <img src={DigitalMarketing} alt="" className='w-44 h-44 mx-auto md:mr-36 md:my-10 md:ml-10 ' />
          </div>
          <div>
            <h4 className='text-yellow-300 font-bold py-2 text-center my-6' >
              Digital Marketing
            </h4>
            <p className='text-white md:pl-14 md:pr-4 px-5'>Explore essential web development services like website development, web-app development, CRM & ERP solutions, API integration, mobile app development, UI/UX development, and website optimization. </p>
<p className='text-yellow-300 py-4 md:pl-14 md:pr-4 px-5'>Click to create engaging digital experiences and drive business growth with expert web development expertise.  </p>
          </div>
        </div>
        </a>

        <a href=''>
        <div className='bg-bgColor md:flex md:w-3/5  hover:scale-105 duration-500 rounded-2xl mb-7 '>
          <div className='mx-auto'>
            <img src={Strategy} alt="" className='w-44 h-44 mx-auto md:mr-36 md:my-10 md:ml-10 ' />
          </div>
          <div>
            <h4 className='text-yellow-300 font-bold py-2 text-center my-6' >
              Strategy & Building
            </h4>
            <p className='text-white md:pl-14 md:pr-4 px-5'>Elevate your business with strategic branding solutions. Leverage market & business strategy , financial planning & analysis, HR consulting, & business operational strategy. Craft a compelling brand strategy, establish a strong brand identity, develop impactful brand messaging, execute effective brand marketing, and ensure seamless brand management for lasting success. </p>
            <p className='text-yellow-300  py-4 mb-5 md:pl-14 md:pr-4 px-5'>Click to Know More</p>

          </div>
        </div>
        </a>
      </div>

       
    </div>
  )
}

export default ServiceArea