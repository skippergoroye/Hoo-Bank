import React from 'react'
import { apple, bill, google } from "../assets"

const Billing = () => {
  return (
    <section id="product" className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>

      {/* paypal section  */}
      <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      
      {/* Easily Control section  */}
      <div className='flex-1 flex justify-center items-start flex-col'>
          <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>


          <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

          {/* Apple store and Google play section  */}
          <div className='flex flex-row flexw-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple__store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
            <img src={google} alt="apple__store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          </div>
      </div>


        
    </section>
  )
}

export default Billing