import React from 'react';
import Vllogo from "../assets/vl-logo.png";
import Call from "../assets/Call.png";
import Map from "../assets/Map.png";
import Google from "../assets/Google.png";
import Insta from "../assets/Instagram-f.png"
import FB from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import Linkedin from "../assets/Linked.png"
import { Link } from 'react-router-dom';


const Footer=()=> {
  return (
    <div id='contact'>
        <div className='bg-black rounded sm:flex mx-auto items-center'>
        <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 lg:gap-x-28   py-4 px-12 sm:px-0 text-white md:justify-center md:items-center">

        <div className='first-col mx-auto md:ml-20'>
            <img src={Vllogo} className='w-28 md:w-48'/>
            <div className='call flex'>
                <img src={Call} alt=""  className='py-3 h-12 w-
                6 md:h-12 md:w-7'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                        +91-62050-57470
                    </li>
                </ul>
                </div>  

                <div className='map flex'>
                <img src={Map} alt=""  className='py-3 h-12 w-
                6 md:h-12 md:w-7'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                    New Delhi, India
                    </li>
                </ul>
                </div>

                <div className='mail flex'>
                <img src={Google} alt=""  className='py-3 h-12 w-
                6 md:h-12 md:w-7'/>
                <ul className='marker:text-yellow-100 list-disc  py-3 pl-5 text-sm font-semibold'>
                    <li> 
                    info@theventurelabs.com
                    </li>
                </ul>
                </div>
       
        </div>
        <div className='flex md:gap-x-1'>
        <div className='second-col'>
        <Link to="/"><h2 className=' font-bold text-xl mt-10 mb-5'>
            Company
        </h2></Link>
        <ul className='text-lg font-semibold pt-5 '>
            <Link to="/aboutUs"><li className='pb-1 hover:text-yellow-300'>About Us</li></Link>
            <Link to="/services"><li className='pb-1 hover:text-yellow-300'>Services</li></Link>
            <a href="/#team"><li className='pb-1 hover:text-yellow-300'>Our Team</li></a>
            <a href="#contact"><li className='pb-1 hover:text-yellow-300'>Contact</li></a>
        </ul>


        </div>
        <div className='third-col ml-16'>
        <h2 className=' font-bold text-xl mt-10 mb-5'>
            Domains
        </h2>
        <ul className='text-base font-semibold pt-5'>
            <li className='pb-1'>Web Development</li>
            <li className='pb-1'>App Development</li>
            <li className='pb-1'>Marketing</li>
            <li className='pb-1'>SEO</li>
            <li className='pb-1'>Strategy</li>
            <li className='pb-1'>Legal Compliances</li>
        </ul>

        </div>
        </div>
        <div className='fourth-col md:-mt-36'>
        <h2 className=' font-bold text-xl mt-10 mb-5 text-center'>
            Follow Us
        </h2>
        <div className=" flex flex-col justify-center pt-5 items-center">
      <div className="grid grid-cols-4 lg:grid-cols-4  text-center  ">
            <a href='https://instagram.com/theventurelabs?igshid=MzRlODBiNWFlZA=='  target='_balnk'><img src={Insta} className=' w-10  pb-2 pl-2'/></a>
            <a href='https://www.facebook.com/venture.labs25' target='_balnk'><img src={FB} className=' w-10 pb-2 pl-2 '/></a>
            <a href='https://twitter.com/theventurelabs' target='_balnk'><img src={Twitter} className='w-10  pb-2 pl-2'/></a>
            <a href='https://www.linkedin.com/company/venture-labs25/mycompany/' target='_balnk'><img src={Linkedin} className='w-10 pb-2  pl-2 '/></a>
            </div>
            </div>
        </div>
            
        </div>
        </div>
        </div>

        </div>
            
 
    );
}

export default Footer