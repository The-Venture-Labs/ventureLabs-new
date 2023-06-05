import React from 'react'
import Accordion from '../../Service/Accordion'
const FAQ = () => {
   
    const questions1 ='Q1. What is the importance of digital marketing?';
    const questions2= 'Q2. How long does it take to see results from SEO?';
    const questions3 = 'Q3. What are the benefits of email marketing?';
    const questions4 = 'Q4. How can I measure the success of my digital marketing campaigns?';
    const questions5 = 'Q5. How can influencer marketing benefit my business?';
    const questions6 = 'Q6. What are the key elements of a successful video marketing strategy?';

    const answer1 = "Digital marketing is crucial for businesses as it allows them to reach a wider audience, increase brand visibility, generate leads, and drive conversions. It offers a cost-effective and measurable way to promote products or services in today's digital landscape.";
    const answer2 ='SEO is a long-term strategy that requires patience and consistent effort. While some improvements can be seen within a few months, it generally takes several months to a year to see significant results, depending on factors such as competition, website authority, and industry.';
    const answer3 ='Email marketing enables businesses to directly communicate with their audience, deliver personalized messages, nurture leads, and drive conversions. It is a cost-effective and versatile marketing channel that can be automated and segmented for better targeting and engagement.';
    const answer4 ='The success of digital marketing campaigns can be measured through key performance indicators (KPIs) such as website traffic, conversions, click-through rates, engagement metrics, and return on investment (ROI). Analyzing these metrics helps businesses assess the effectiveness of their campaigns and make data-driven decisions.';
    const answer5 ='Influencer marketing allows businesses to tap into the established audience and credibility of influencers in their niche. By collaborating with influencers, businesses can reach a highly targeted audience, gain trust and credibility, and amplify their brand message.';
    const answer6 ='A successful video marketing strategy involves understanding the target audience, creating engaging and shareable video content, optimizing videos for search engines, promoting videos through various channels, and measuring performance through metrics such as views, engagement, and conversions.';


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
            <Accordion title={questions6} content={answer6}/>
            
            </section>
            </div>
        </div>
    </>
  )
}

export default FAQ