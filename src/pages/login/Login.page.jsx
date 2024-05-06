import React from 'react'
import { SubContainer } from '../../components/subContainer'
import Form from '../../components/Form/Form'
import FormInput from '../../components/formInput/FormInput'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import FormFooter from '../../components/formFooter/FormFooter'

export default function LoginPage() {
  return (
    <div className=' laptop:container tablet:container container text-sm tablet:text-base destop:text-lg'>
      <div className='flex flex-col-reverse tablet:flex-row items-center justify-center tablet:justify-between font-bevi mx-auto flex-wrap'>
        <SubContainer/>
        <Form 
        title='Login'
        formText='Welcome back! Please log in to access your account.'
        >
          <FormInput label='Emial'/>
          <PasswordInput/>
          <FormFooter type='Login' goto='Sign Up' checkText='Remember Me' gotoText='Don’t have an account?'/>
        </Form>
      </div>
    </div>
  )
}
