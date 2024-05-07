import React from 'react'
import { SubContainer } from '../../components/subContainer'
import Form from '../../components/Form/Form'
import FormInput from '../../components/formInput/FormInput'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import FormFooter from '../../components/formFooter/FormFooter'
import SignUpCheckText from '../../components/signupCheckText/SignUpCheckText'

export default function SignUpPage() {
  return (
   <div className=' destop:container tablet:container container text-sm tablet:text-base destop:text-lg'>
   <div className='frompage-container'>
     <SubContainer/>
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
 </div>
  )
}
