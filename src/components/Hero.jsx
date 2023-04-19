import React from 'react'
import { discount } from '../assets/index'

const Hero = () => {
  return (
     <section id="home" className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
          
         <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>  {/* Discount   */}
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
              <span className='text-white'>20%</span>Discount For {" "}
              <span className='text-white'>1 Month</span> Account {" "}
            </p>
          </div> 

        </div>
     </section>
  )
}

export default Hero