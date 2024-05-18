import React from 'react'
import FormSubContainer from '../../components/LoginAndSignupComponents/FormSubContainer'
import Form from '../../components/LoginAndSignupComponents/Form'
import FormInput from '../../components/LoginAndSignupComponents/FormInput'
import PasswordInput from '../../components/LoginAndSignupComponents/PasswordInput'
import FormFooter from '../../components/LoginAndSignupComponents/FormFooter'
import SignUpCheckText from '../../components/LoginAndSignupComponents/SignUpCheckText'

export default function SignUpPage() {
  return (
   <div className='formpage'>
     <FormSubContainer/>
     <Form title='Sign Up' formText='Create an account to unlock exclusive features.'>
        <FormInput label='Full Name'/>
        <FormInput label='Email'/>
        <PasswordInput type={false}/>
        <FormFooter type='Sing Up' goto='Login' 
        checkText={<SignUpCheckText/>}
        gotoText='Already have an account?'
        />
     </Form>

   </div>
  )
}
