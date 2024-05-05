import React from 'react'
import FormFooter from '../formFooter/FormFooter'
import FormInput from '../formInput/FormInput'
import PasswordInput from '../passwordInput/PasswordInput'

export default function Form({title,formText}) {
  return (
      <div className='container ml-auto col-span-1'>
         <div className='bg-white-1 rounded-lg p-6'>

            <div className=' text-center'>
               <h1 className=' text-5xl font-semibold leading-relaxed'>{title}</h1>
               <p>{formText}</p>
            </div>

            <FormInput label='Email'/>

            <PasswordInput /> 
            
            <FormFooter type='Login' goto='Sign in' checkText='Remember Me'/>
            
         </div>
      </div>
  )
}
