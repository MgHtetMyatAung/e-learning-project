import React from 'react'
import TextContainer from './textContainer/TextContainer'
import CardAndButtons from './cardAndButtons/CardAndButtons'

export default function SubContainer() {
  return (
    <div className=' w-full tablet:w-2/6 laptop:w-1/2 tablet:justify-center laptop:m-0 mt-12'>
      <TextContainer/>
      <CardAndButtons/>
    </div>
  )
}
