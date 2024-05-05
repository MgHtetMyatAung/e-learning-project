import React from 'react'

export default function FormInput({label}) {
  return (
   <div className=' gap-y-2 mb-5'>
      <label htmlFor={label.toLowerCase()} className='mb-2 text-grey-7 font-medium text-base leading-6 w-full'>{label}</label>
      <input type={label.toLowerCase()} placeholder={`Enter your ${label}`} id={label.toLowerCase()} className='rounded border-white-4 p-4 outline-none bg-white-2 w-full text-grey-3 font-normal leading-6 text-base'/>
   </div>
  )
}
