import React from 'react'


const Button = ({ propStyles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${propStyles}`}>
      GetStarted
    </button>
  )
}

export default Button