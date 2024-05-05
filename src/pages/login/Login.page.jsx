import React from 'react'
import { SubContainer } from '../../components/subContainer'
import { Form } from '../../components/Form'

export default function LoginPage() {
  return (
    <div className=' laptop:container tablet:container container'>
      <div className='grid laptop:grid-cols-2 tablet:grid-cols-1 items-center gap-10 font-bevi mx-auto tablet:justify-center'>
        <SubContainer/>
        <Form 
        title='Login'
        formText='Welcome back! Please log in to access your account.'
        />
      </div>
    </div>
  )
}
