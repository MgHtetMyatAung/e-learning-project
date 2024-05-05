import React from 'react'
import { ArrowRight, Left } from '../../../../assets/icons'

export default function Buttons() {
  return (
    <div className='flex laptop:justify-end mt-6 justify-center'>
      <div className='flex gap-3'>
         <button className='py-4 px-4 bg-white-1 rounded-lg border-white-4'>
          <img src={Left} className=' w-4'/>
         </button>
         <button className='py-4 px-4 bg-white-1 rounded-lg border-white-4'>
          <img src={ArrowRight} className='w-4'/>
         </button>
      </div>
    </div>
  )
}
