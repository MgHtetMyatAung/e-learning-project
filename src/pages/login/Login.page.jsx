import React from 'react'
import { SubContainer } from '../../components/subContainer'
import Form from '../../components/Form/Form'
import FormInput from '../../components/formInput/FormInput'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import FormFooter from '../../components/formFooter/FormFooter'

export default function LoginPage() {
  return (
    <div className=' laptop:container tablet:container container text-sm tablet:text-base destop:text-lg'>
      <div className='grid laptop:grid-cols-2 tablet:grid-cols-1 items-center gap-10 font-bevi mx-auto tablet:justify-end'>
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
