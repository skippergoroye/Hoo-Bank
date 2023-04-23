import React from 'react'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">

       {/* Find better card section  */}
      <div className='flex-1 flex justify-center items-start flex-col'>

        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>

        <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

        <Button propStyles="mt-10" />

      </div>
    </section>
  )
}

export default CardDeal