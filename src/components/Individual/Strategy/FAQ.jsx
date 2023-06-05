import React from 'react'
import Accordion from '../../Service/Accordion'
const FAQ = () => {
   
    const questions1 ='Q1. Why is strategy important for business success?';
    const questions2= 'Q2. How does market strategy contribute to business growth ?';
    const questions3 = 'Q3. What are the benefits of business strategy consulting? ';
    const questions4 = 'Q4. How does financial planning and analysis support strategic decision-making?';
    const questions5 = 'Q5. What role does HR consulting play in business strategy?';


    const answer1 = "Strategy provides a roadmap for businesses to achieve their goals, make informed decisions, and adapt to changing market conditions. It helps organizations allocate resources effectively, identify competitive advantages, and stay ahead of the competition.";
    const answer2 ='A well-defined market strategy enables businesses to identify target markets, understand customer needs, and position their products or services effectively. By targeting the right audience and addressing their pain points, businesses can drive demand, increase market share, and achieve sustainable growth.';
    const answer3 ='Business strategy consulting brings external expertise and fresh perspectives to help businesses identify opportunities, overcome challenges, and optimize their operations. Consultants provide strategic guidance, support decision-making, and help businesses stay competitive in a dynamic marketplace.';
  
    const answer4 ="Financial planning and analysis provide insights into an organization's financial health, performance trends, and potential risks and opportunities. It helps businesses make data-driven decisions, allocate resources effectively, and assess the financial impact of strategic initiatives.";
    const answer5 ='HR consulting ensures that the human resources strategy aligns with the overall business strategy. It helps businesses optimize talent acquisition, employee development, and performance management to support business objectives, foster a positive work culture, and drive organizational success. ';


  return (
    <>
        <div className='mx-2 md:mx-20'>
            <div className='bg-gradient-to-b from-yellow-400 to-yellow-50 text-transparent bg-clip-text font-semibold text-4xl my-10 '>
                Frequently Asked Questions
            </div>

            <div className=''>
            <section className="max-w-8xl text-center">
            
            <Accordion title={questions1} content={answer1}/>
            <Accordion title={questions2} content={answer2}/>
            <Accordion title={questions3} content={answer3}/>
            <Accordion title={questions4} content={answer4}/>
            <Accordion title={questions5} content={answer5}/>
            {/* <Accordion title={questions6} content={answer6}/> */}
            
            </section>
            </div>
        </div>
    </>
  )
}

export default FAQ