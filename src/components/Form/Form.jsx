import React from 'react'

export default function Form({title,formText,children}) {
  return (
      <div className='container ml-auto col-span-1'>
         <form className='bg-white-1 rounded-lg p-6'>

            <div className=' text-center mb-5'>
               <h1 className=' destop:text-5xl tablet:text-3xl text-2xl font-semibold leading-9 laptop:leading-relaxed text-grey-7'>{title}</h1>
               <p className='font-normal text-grey-5 leading-5'>{formText}</p>
            </div>

            {children}
         </form>
      </div>
  )
}
