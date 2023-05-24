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


const TeamMember = ({memberImage, memberName, position})=>{
    return(
        <div className='w-full max-w-sm ' >
        <div className=''>
        <img src={memberImage} height={100} width={100} alt="" className='rounded-full mb-3 m-auto' />
      </div>
      <h5 className="mb-1 text-yellow-400 font-semibold text-base text-center">{memberName}</h5>
      <div className="text-white font-semibold text-sm text-center">{position}</div>
      </div>
    )
}


const Team = () => {
  return (
    <>
    <h1 className='text-white font-semibold text-4xl text-center my-20'>The Backbones of Venture Labs</h1>
    <div className='mx-20 '>

    <div className='flex pb-10 justify-evenly '>
    <TeamMember memberImage ={Pratyush} memberName="Pratyush Tiwari" position = "CEO" />
    <TeamMember memberImage ={Sarang} memberName="Sarang Gupta" position = "CTO"/>
    <TeamMember memberImage ={Ayush} memberName="Ayush Kumar" position = "COO"/>
    <TeamMember memberImage ={Aryan} memberName="Aryan Kumar"position = "CXO" />
    <TeamMember memberImage ={Abheet} memberName="Abheet Pandey"position = "CMO" />
    <TeamMember memberImage ={Ajitesh} memberName="Ajitesh Harshit" position = "VP @ Marketing" />
    <TeamMember memberImage ={Rishav} memberName="Rishav Kumar" position = "VP @ Product Engineering"/>
    </div>

    <div className=' flex pb-10 justify-evenly  '>
    <TeamMember memberImage ={Hardik} memberName="Hardik Gupta" position="Social Media Manager" />
    <TeamMember memberImage ={Solanki} memberName="Rishav Singh Solanki" position = "VP @ Tech"/>
    <TeamMember memberImage ={Deva} memberName="Devashish Roy" position="Business Development Lead"/>
    <TeamMember memberImage ={Sway} memberName="Swayanshu Mohapatra" position="Business Development Lead" /> 
   <TeamMember memberImage ={Adarsh} memberName="Adarsh Kumar Singh" position="Chief Product Engineer" />
    <TeamMember memberImage ={Ravish} memberName="Ravish Raj Tiwary" position="Product Engineer" />
     <TeamMember memberImage ={Patra} memberName="Shubham patra" position = "Creative Lead"/>
    </div>

    </div>
    </>
  )
}

export default Team