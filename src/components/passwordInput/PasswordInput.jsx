import React from 'react'
import { Eye } from '../../assets/icons'

export default function PasswordInput({type = true}) {
  return (
   <div className=' form-input-container'>
   <label htmlFor='password' className='input-label'>Password</label>
   <div className=' flex justify-between relative rounded border-white-4 p-6 bg-white-2 '>
      <input id='password' type='email' placeholder='Enter your Password' className='outline-none bg-white-2 w-full text-grey-3 font-normal leading-6'/>
      <img src={Eye} className='w-5 desktop:w-6 inline-block cursor-pointer'/>
   </div>
   {type && <div className=' text-end leading-6 font-normal text-grey-4'>Forgot password?</div>}
</div>
  )
}
