import React from 'react';
import Vllogo from "../assets/vl-logo.png";
import Call from "../assets/Call.png";
import Map from "../assets/Map.png";
import Google from "../assets/Google.png";
import Insta from "../assets/Instagram-f.png"
import FB from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import Linkedin from "../assets/Linkedin.png"


const Footer=()=> {
  return (
    <>
        <div className='bg-black rounded-2xl pl-20 sm:flex mx-auto items-center'>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-20   text-center py-4 px-12 sm:px-0 text-white">

        <div className='first-col mr-'>
            <img src={Vllogo} className='w-48'/>
            <div className='call flex'>
                <img src={Call} alt="" height={30} width={30} className='py-2'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                        +91-62050-57470
                    </li>
                </ul>
                </div>  

                <div className='call flex'>
                <img src={Map} alt="" height={30} width={30}  className='py-2'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                    New Delhi, India
                    </li>
                </ul>
                </div>

                <div className='call flex'>
                <img src={Google} alt="" height={30} width={30} className='py-2'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                    info@theventurelabs.com
                    </li>
                </ul>
                </div>
       
        </div>
        <div className='second-col'>
        <h2 className=' font-bold text-xl mt-10 mb-5'>
            Company
        </h2>
        <ul className='text-lg font-semibold pt-5'>
            <li className='pb-1'>About Us</li>
            <li className='pb-1'>Services</li>
            <li className='pb-1'>Our Team</li>
            <li className='pb-1'>Contact</li>
        </ul>


        </div>
        <div className='third-col mx-10'>
        <h2 className=' font-bold text-xl mt-10 mb-5'>
            Domains
        </h2>
        <ul className='text-sm font-semibold pt-5'>
            <li className='pb-1'>Web Development</li>
            <li className='pb-1'>App Development</li>
            <li className='pb-1'>Marketing</li>
            <li className='pb-1'>Search Engine Optimization</li>
            <li className='pb-1'>Strategy</li>
            <li className='pb-1'>Legal Compliances</li>
        </ul>

        </div>
        <div className='fourth-col'>
        <h2 className=' font-bold text-xl mt-10 mb-5'>
            Follow Us
        </h2>
        <div className=" flex flex-col justify-center pt-5 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-4  text-center  ">
            <a href='https://instagram.com/theventurelabs?igshid=MzRlODBiNWFlZA=='  target='_balnk'><img src={Insta} className=' w-10  pb-2 lg:pl-2'/></a>
            <a href='https://www.facebook.com/venture.labs25' target='_balnk'><img src={FB} className=' w-10 pb-2 lg:pl-2 '/></a>
            <a href='https://twitter.com/theventurelabs' target='_balnk'><img src={Twitter} className='w-10  pb-2 lg:pl-2'/></a>
            <a href='https://www.linkedin.com/company/venture-labs25/mycompany/' target='_balnk'><img src={Linkedin} className='w-10 pb-2  lg:pl-2 '/></a>
            </div>
            </div>
        </div>
            
        </div>
        </div>
        </div>

        </>
            
 
    );
}

export default Footer