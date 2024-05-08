import React from 'react'
import { SubContainer } from '../../components/subContainer'
import Form from '../../components/Form/Form'
import FormInput from '../../components/formInput/FormInput'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import FormFooter from '../../components/formFooter/FormFooter'

export default function LoginPage() {
  return (
    <div className='formpage-container'>
      <div className='formpage'>
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
