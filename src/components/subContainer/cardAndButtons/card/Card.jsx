import React from 'react';

import { CardImg } from '../../../../assets/img';
export default function Card() {
  return (
    <div className='rounded-2xl bg-white-2'>

      <div className='p-6 font-normal text-grey-5'>
         <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
      </div>

      <hr className='text-grey-2 opacity-10'/>

      <div className='flex justify-between py-5 px-8 items-center'>

         <div className='flex items-center'>
            <div className=' w-12 h-12 rounded-lg overflow-hidden mr-4'>
               <img src={CardImg} alt='cardImg' className='w-full h-full'/>
            </div>
            <span className='font-semibold text-md text-grey-6'>Sarah L</span>
         </div>

         <div>
            <button className='rounded-lg bg-white-3 border-spacing-1 border-white-4 py-4 px-8 font-medium align-middle text-sm destop:text-lg'>Read Full Story</button>
         </div>
      </div>


    </div>
  )
}
