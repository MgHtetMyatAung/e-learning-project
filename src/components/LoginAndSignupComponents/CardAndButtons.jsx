import React from 'react'
import FormCard from './FormCard'
import FormButtons from './FormButtons'

export default function CardAndButtons() {
  return (
    <div className='grid desktop:gap-[30px] laptop:gap-y-[24px] tablet:gap-y-[10px]'>
      <FormCard/>
      <FormButtons/>
    </div>
  )
}
