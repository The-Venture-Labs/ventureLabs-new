import React from 'react'
import Website from "../../assets/Service/website.png"
import CallSchedule from "../../assets/Service/callSchedule.png"
import Domain from "../../assets/Service/domain.png"
import Arrow from "../../assets/Service/Arrow.png"
import ArrowMob from "../../assets/Service/ArrowM.png"

const Potential = () => {
  return (
    <div className=' mx-4 my-10 md:mx-20'>
    <div className='bg-yellow-300 text-transparent bg-clip-text font-semibold text-4xl my-16 '>
    How to Unleash your Startup’s Potential
    </div>
      <div className=''>
        <div className='bg-bgColor md:w-2/5  hover:scale-125 duration-500 rounded-2xl mb-7'>
        <h4 className='text-yellow-300 font-bold  md:text-center pl-4 py-6 text-center' >
            Visit the Venture Labs website
            </h4>
          <div className=' flex pb-5'>
            <div className='w-3/4'>
            <p className='text-white md:pl-14 md:pr-4 pl-2 md:px-5 pb-4'>Visit our website, open the services 
sections and select the services section to see the varied domains we serve in.</p>
          </div>
          <div className='w-1/4'>
            <img src={Website} alt="" className='ml-1 w-20 h-28 md:h-36 md:w-28  md:mr-36 md:my-10 md:ml-10 md:-mt-6 ' />
          </div>
          </div>
        </div>
        <div className='flex'>
        <div className='invisible md:visible md:mx-96'>
          <img src={Arrow} alt="" className='md:h-28 md:-mt-10 md:hover:' />
        </div>
        <div className='md:invisible mx-24 '>
          <img src={ArrowMob} alt="" className='-mt-7 h-28 ' />
        </div>
        </div>

        <div className='bg-bgColor md:w-2/5  hover:scale-125 duration-500 rounded-2xl mb-7 md:mx-auto'>
        <h4 className='text-yellow-300 font-bold  md:text-center pl-4 py-6 text-center' >
            Select the domain of your interest
            </h4>
          
          <div className='flex pb-5'>
            <div className='w-3/4 '>
            <p className='text-white md:pl-14 md:pr-4 px-5'>
              Amongst the list available, look out for the domain in which you are seeking support. You will be able to get a brief idea about what that actually means in the sections as well. 
            </p>
            </div>
          
          <div className='w-1/4'>
            <img src={Domain} alt="" className='ml-1 w-28 h-24   md:mr-36 md:h-28 md:my-10 md:ml-10 md:-mt-6 ' />
          </div>
          </div>
        </div>

        <div className='flex'>
        <div className='invisible md:visible md:mx-96'>
          <img src={Arrow} alt="" className='md:h-28 md:-mt-10 md:ml-96 md:hover:' />
        </div>
        <div className='md:invisible mx-24 '>
          <img src={ArrowMob} alt="" className='-mt-7 h-28 ' />
        </div>
        </div>



        <div className='bg-bgColor md:w-2/5  hover:scale-125 duration-500 rounded-2xl mb-7 md:ml-auto'>
        <h4 className='text-yellow-300 font-bold  md:text-center pl-4 py-6 text-center' >
            Get yourself a call scheduled
            </h4>
          <div className='flex pb-5'>
          <div className='w-3/4'>
            <p className='text-white md:pl-14 md:pr-4 px-5'>Visit our website, open the services sections and select the services section to see the varied domains we serve in.</p>

          </div>
          <div className='w-1/4'>
            <img src={CallSchedule} alt="" className='ml-1 w-28 h-24 md:w-36 md:h-28  md:mr-36 md:my-10 md:ml-10 md:-mt-6' />
          </div>
          </div>
        </div>

      </div>

       
    </div>
  )
}

export default Potential