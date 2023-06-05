import React from 'react'
import Accordion from '../../Service/Accordion'
const FAQ = () => {
   
    const questions1 ='Q1.Why is website development important for businesses?';
    const questions2= 'Q2. What is the difference between a website and a web application?';
    const questions3 = 'Q3. How can CRM & ERP solutions benefit businesses?';
    const questions4 = 'Q4. Why is UI/UX development important for websites and applications?';
    const questions5 = 'Q5. How can website optimization improve user experiences?';


    const answer1 = "Website development is essential for businesses to establish an online presence, reach a wider audience, and showcase their products or services. It provides a platform for engagement, generates leads, and contributes to brand credibility and visibility in the digital landscape.";
    const answer2 ='A website is typically informational and serves as an online representation of a business or organization. A web application, on the other hand, provides specific functionalities and services, often involving user interactions and data processing. Web applications are more dynamic and interactive compared to traditional websites.';
    const answer3 ='CRM solutions help businesses manage customer relationships, streamline sales and marketing processes, and enhance customer experiences. ERP solutions integrate various business functions, improving efficiency, data visibility, and decision-making capabilities.';
  
    const answer4 ="UI/UX development ensures that websites and applications are visually appealing, intuitive to use, and provide exceptional user experiences. A well-designed UI/UX enhances user engagement, satisfaction, and contributes to the overall success of digital products.";
    const answer5 ='Website optimization, particularly improving responsiveness, page load speed, and compatibility across devices, ensures that users have a seamless and engaging experience when accessing a website. It reduces bounce rates, improves user retention, and enhances overall user satisfaction.';


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