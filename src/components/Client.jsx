import React from 'react'
import Pratyush from "../assets/teamAssets/pratyush.jpeg"

const Client = () => {
    
    
    const clientData = [
        {
            id:1,
            logo: ' ' ,
            name:'',
            position:'',
            company:'',
            content:''
        },
    ]
    
return (
      <>
      <h1 className='text-white font-semibold text-4xl text-center my-20'> 
      Hear From Our Clients
    </h1>
      <div className='flex'>
        {/* {clientData.map =(({id, logo, name, company, content}) =>( */}

            <div  className='bg-bgColor w-2/12'>
             <div className='items-center justify-center'> <img src={Pratyush} className="w-36 h-36 "alt="" /></div>
              <div className='text-yellow-300 text-lg font-semibold text-center'>Pratyush</div>
              <div className='text-white text-base font-semibold text-center'>CEO</div>
              <div className='text-white text-base font-semibold text-center'>The Venture Labs</div>
              <div className='text-white text-base pt-5 text-center'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, officia."</div>

            </div>
        {/* ))}
       */}
      
      </div>

      </>
      )
}

export default Client