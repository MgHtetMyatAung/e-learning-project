import React from 'react'
import TextContainer from './textContainer/TextContainer'
import CardAndButtons from './cardAndButtons/CardAndButtons'

export default function SubContainer() {
  return (
    <div className='grid w-full laptop:w-[55%] monitor:w-[50%] tablet:justify-center laptop:m-0 mt-12'>
      <div className=' w-full laptop:w-[90%] grid gap-y-[30px] laptop:gap-y-[60px] desktop:gap-y-[80px]'>
        <TextContainer/>
        <CardAndButtons/>
      </div>
    </div>
  )
}
