import React from 'react'
import TextContainer from './textContainer/TextContainer'
import CardAndButtons from './cardAndButtons/CardAndButtons'

export default function SubContainer() {
  return (
    <div className='col-span-1'>
      <TextContainer/>
      <CardAndButtons/>
    </div>
  )
}
