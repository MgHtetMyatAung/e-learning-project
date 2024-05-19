import React, { useRef } from 'react'
import { Eye } from '../../assets/icons'

export default function PasswordInput({type = true}) {
  let passRef = useRef()
  return (
   <div className=' form-input-container'>
   <label htmlFor='password' className='input-label'>Password</label>
   <div className=' flex justify-between relative input-wraper'>
      <input id='password' type='password' placeholder='Enter your Password' className='outline-none bg-white-2 w-full text-grey-3 font-normal leading-6' ref={passRef}/>
      <img src={Eye} className='w-5 desktop:w-6 inline-block cursor-pointer' onClick={() => {
        const passInput = passRef.current;
        if(passInput.type === 'password'){
          passInput.type = 'text'
        } else {
          passInput.type = 'password'
        }
      }}/>
   </div>
   {type && <div className=' text-end leading-6 font-normal text-grey-5'>Forgot password?</div>}
</div>
  )
}
