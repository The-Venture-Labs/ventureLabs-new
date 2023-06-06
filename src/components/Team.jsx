import React from 'react'
import Pratyush from '../assets/teamAssets/pratyush.jpeg'
import Sarang from '../assets/teamAssets/sarang.jpeg'
import Ayush from '../assets/teamAssets/ayush.jpeg'
import Aryan from '../assets/teamAssets/aryan.jpeg'
import Abheet from '../assets/teamAssets/abheet.jfif'
import Ajitesh from '../assets/teamAssets/ajitesh.jpeg'
import Rishav from '../assets/teamAssets/rishav.jfif'
import Hardik from '../assets/teamAssets/hardik.jfif'
import Adarsh from '../assets/teamAssets/adarsh.jfif'
import Ravish from '../assets/teamAssets/ravish.jfif'
import Solanki from '../assets/teamAssets/solanki.png'
import Deva from '../assets/teamAssets/deva.jpeg'
import Patra from '../assets/teamAssets/patra.jpeg'
import Sway from '../assets/teamAssets/sway.jpeg'


const Team = () => {


  const teamData = [
    {
      id:1,
      src: Pratyush,
      name: 'Pratyush Tiwari',
      position: 'CEO'
    },
    {
      id:2,
      src: Sarang,
      name: 'Sarang Gupta',
      position: 'CTO'
    },
    {
      id:3,
      src: Ayush,
      name: 'Ayush Kumar',
      position: 'COO'
    },
    {
      id:4,
      src: Aryan,
      name: 'Aryan Kumar',
      position: 'CXO'
    },
    {
      id:5,
      src:Abheet,
      name: 'Abheet Pandey',
      position: 'CMO'
    },
    {
      id:6,
      src: Ajitesh,
      name: 'Ajitesh Harshit',
      position: 'VP @ Marketing'
    },
    {
      id:7,
      src: Rishav,
      name: 'Rishav Kumar',
      position: 'VP @ Product Engineering'
    },
    {
      id:8,
      src: Hardik,
      name: 'Hardik Gupta',
      position: 'Social Media Manager'
    },
    {
      id:9,
      src: Solanki,
      name: 'Rishav Singh Solanki',
      position: 'VP @ Tech'
    },
    {
      id:10,
      src: Deva,
      name: 'Devashish Roy',
      position: 'BD Lead'
    },
    {
      id:11,
      src: Sway,
      name: 'Swayanshu Mohapatra',
      position: 'BD Lead'
    },
    {
      id:12,
      src: Adarsh,
      name: 'Adarsh Kumar Singh',
      position: 'Cheif Product Engineer'
    },
    {
      id:13,
      src: Ravish,
      name: 'Ravish Raj Tiwary',
      position: 'Product Engineer'
    },
    {
      id:14,
      src: Patra,
      name: 'Shubham Patra',
      position: 'Creative Lead'
    },
  ]


  return (
    <div id='team'>
    <h1 className='text-white font-semibold text-4xl text-center my-20'> 
      The Backbones of Venture Labs
    </h1>
    
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-8   text-center py-4 px-12 sm:px-0">

      {teamData.map(({ id,src, name, position }) => (
            <div
              key={id}
              className={` hover:scale-105 duration-500 py-2 rounded-lg md:-mx-2`}
            >
              <img src={src} alt="" className="w-24 mx-auto rounded-full" />
              <p className="mt-4 text-yellow-300 -mb-3 text-base font-semibold">{name}</p>
              <p className="mt-4 text-white text-sm font-semibold">{position}</p>
            </div>
          ))}

    </div>


    </div>

    </div>
  )
}

export default Team