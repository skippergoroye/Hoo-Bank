import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id="client" className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
      
       {/* color gradient section  */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] blue__gradient rounded-full' />


      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>What people are <br className='sm:block hidden' /> saying about us</h1>

        <div className='w-full md:mt-0 mt-6'>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>


       {/* Feedback card map data here  */}
       <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
       </div>
    </section>
  )
}

export default Testimonials