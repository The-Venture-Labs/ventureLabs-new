import React from 'react'
import Accordion from './Accordion'
const FAQ = () => {
   
    const questions1 ='Q1. What services does your firm offer?';
    const questions2= 'Q2. What expertise does your firm have in app development?';
    const questions3 = 'Q3. Can your firm create mobile apps for both iOS and Android platforms?';
    const questions4 = 'Q4. Can your firm help with intellectual property protection and trademark registration?';

    const answer1 = 'Ans. Our firm offers a comprehensive range of services including website development, app development, marketing strategies, and legal assistance tailored specifically for startups.';


  return (
    <>
        <div className='mx-2 md:mx-20'>
            <div className='bg-gradient-to-b from-yellow-400 to-yellow-50 text-transparent bg-clip-text font-semibold text-4xl my-10 '>
                Frequently Asked Questions
            </div>

            <div className=''>
            <section className="max-w-8xl text-center">
            
            <Accordion title={questions1} content={answer1}/>
            <Accordion title={questions2} content={answer1}/>
            <Accordion title={questions3} content={answer1}/>
            <Accordion title={questions4} content={answer1}/>
            
            </section>
            </div>
        </div>
    </>
  )
}

export default FAQ