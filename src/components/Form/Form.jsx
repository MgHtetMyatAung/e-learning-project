import React from 'react'

export default function Form({title,formText,children}) {
  return (
      <div className=' w-full laptop:w-[45%] flex justify-end'>
         <form className='bg-white-1 rounded-[10px] p-[30px] laptop:p-[40px] w-full laptop:w-[85%] grid gap-[30px] laptop:gap-[40px] desktop:gap-[50px] '>

            <div className=' text-center grid gap-[8px] laptop:gap-[12px]'>
               <h1 className=' destop:text-[48px] laptop:text-[38px] text-[28px] font-semibold desktop:leading-[60px] laptop:leading-[38px] leading-[35px] text-grey-7'>{title}</h1>
               <p className='font-normal text-grey-5 leading-5'>{formText}</p>
            </div>

            <div className='grid gap-y-[24px] desktop:gap-y-[30px]'>
               {children}
            </div>
         </form>
      </div>
  )
}
