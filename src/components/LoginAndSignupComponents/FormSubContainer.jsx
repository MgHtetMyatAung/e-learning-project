import React from 'react'
import TextContainer from './TextContainer'
import CardAndButtons from './CardAndButtons'

export default function FormSubContainer() {
  return (
    <div className='grid w-full laptop:w-[55%] monitor:w-[50%] tablet:justify-center laptop:m-0 mt-[50px]'>
      <div className=' w-full laptop:w-[87%] desktop:w-[90%] grid gap-y-[30px] laptop:gap-y-[60px] desktop:gap-y-[80px]'>
        <TextContainer/>
        <CardAndButtons/>
      </div>
    </div>
  )
}
