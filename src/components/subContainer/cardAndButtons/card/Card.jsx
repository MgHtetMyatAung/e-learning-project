import React from 'react';

import { CardImg } from '../../../../assets/img';
export default function Card() {
  return (
    <div className='rounded-[10px] bg-white-2'>

      <div className='p-[30px] laptop:p-[40px] desktop:p-[50px] font-normal text-grey-5'>
         <p className='text-[14px] laptop:text-[16px] leading-[24px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
      </div>

      <hr className='text-grey-2 opacity-10'/>

      <div className='flex justify-between desktop:py-[30px] desktop:px-[50px] laptop:py-[24px] laptop:px-[40px] py-[20px] px-[30px] items-center'>

         <div className='flex items-center'>
            <div className='w-[50px] h-[50px] rounded-[6px] overflow-hidden mr-3'>
               <img src={CardImg} alt='cardImg' className='w-full h-full object-cover'/>
            </div>
            <span className='font-semibold tablet:text-md text-grey-6 text-[16px] desktop:text-[18px] leading-[24px]'>Sarah L</span>
         </div>

         <div>
            <button className='rounded-lg bg-white-3 border-spacing-1 border-white-4 py-[14px] px-[16px] font-medium align-middle text-[14px] destop:text-[18px] leading-[21px] desktop:leading-[27px]'>Read Full Story</button>
         </div>
      </div>


    </div>
  )
}
