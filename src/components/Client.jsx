import React from 'react'

const Client = () => {
    
    
    const clientData = [
        {
            id:1,
            logo: ' ' ,
            name:'',
            content:''
        },
    ]
    
return (
      <>
      <h1 className='text-white font-semibold text-4xl text-center my-20'> 
      Hear From Our Clients
    </h1>
      <div className='flex'>
        {clientData.map =(({id, logo, name, content}) =>(

            <div className='bg-black'>

            </div>

        ))}
      
      
      </div>

      </>
      )
}

export default Client