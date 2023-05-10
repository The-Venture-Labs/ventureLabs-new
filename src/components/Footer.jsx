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
    <div className='mx-20 my-30  '>
        <div className='bg-black rounded-2xl  pl-8 flex'>
            <div className='first-col'>
            <div className='image'>
                <img src={Vllogo} height ={250} width={250} alt=""  className="pt-10" / >
            </div>
            <div className='  flex'>
                <img src={Call} alt=""  height={40} width={40} className='pl-3 pb-5'/>
                <div className='text-white font-semibold text-base '> 
                <ul className='list-disc pl-10' >
                    <li>+91-62050-57470</li>
                    </ul> 
                </div>
            </div>
            <div className='  flex'>
                <img src={Map} alt=""  height={40} width={40} className='pl-3 pb-5'/>
                <div className='text-white font-semibold text-base '> 
                <ul className='list-disc pl-10'>
                    <li>New Delhi, India</li>
                    </ul> 
                </div>
            </div>
            <div className='flex'>
                <img src={Google} alt=""  height={40} width={40} className='pl-3 pb-5'/>
                <div className='text-white font-semibold text-base '> 
                <ul className='list-disc pl-10'>
                    <li>info@theventurelabs.in</li>
                    </ul> 
                </div>
            </div>  
            </div>
            <div className='second-col  mx-24 px-24 my-20'>
                <div className='text-white font-semibold text-base   my-10'>Company</div>
                <div className='text-white font-semibold text-base '>
                    <ul className='list-none'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className=' third-col text-white font-semibold text-base my-20'>
                <div className='my-10'>Domains</div>
                <div className='text-white font-semibold text-base '>
                    <ul className='list-none'>
                        <li>Website Development</li>
                        <li >App Development</li>
                        <li >Digital Marketing</li>
                        <li >Search Engine Optimization</li>
                        <li >Legal Compliances</li>
                    </ul>
                </div>
            </div>

            <div className='fourth-col  mx-20 my-20'>
                <div className='text-white font-semibold text-base my-10'>Follow Us</div>
                <div className='flex'>
                    <img src={Insta} alt="" height={35} width={35} className='mx-2'/>
                    <img src={Linkedin} alt="" height={35} width={35} className='mx-2'/>
                    <img src={FB} alt="" height={35} width={35} className='mx-2'/>
                    <img src={Twitter} alt="" height={35} width={35} className='mx-2'/>

                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Footer