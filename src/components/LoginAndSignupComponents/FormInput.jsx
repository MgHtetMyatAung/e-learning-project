import React from 'react'

export default function FormInput({label}) {
  return (
   <div className='form-input-container'>
      <label htmlFor={label.toLowerCase()} className='text-grey-7 font-medium leading-6 w-full'>{label}</label>
      <div className=' input-wraper'>
        <input type={label.toLowerCase()} placeholder={`Enter your ${label}`} id={label.toLowerCase()} className=' w-full text-grey-3 font-normal leading-6 border-none outline-none bg-white-2'/>
      </div>
   </div>
  )
}
