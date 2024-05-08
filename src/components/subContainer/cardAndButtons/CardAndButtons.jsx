import React from 'react'
import Card from './card/Card'
import Buttons from './buttons/Buttons'

export default function CardAndButtons() {
  return (
    <div className='grid desktop:gap-[30px] laptop:gap-y-[24px] tablet:gap-y-[10px]'>
      <Card/>
      <Buttons/>
    </div>
  )
}
