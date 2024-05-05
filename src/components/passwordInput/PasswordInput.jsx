import React from 'react'

export default function PasswordInput() {
  return (
   <div className=' gap-y-2 mb-5'>
   <label htmlFor='password' className='mb-2 text-grey-7 font-medium text-base leading-6 w-full'>Password</label>
   <div className=' relative'>
      <input id='password' type='email' placeholder='Enter your Password' className='rounded border-white-4 p-4 outline-none bg-white-2 w-full text-grey-3 font-normal leading-6 text-base'/>
   </div>
   <div className=' text-end text-base leading-6 font-normal text-grey-4'>Forgot password?</div>
</div>
  )
}
