import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, GoogleLogo } from '../../assets/icons'

export default function FormFooter({type,goto,checkText,gotoText}) {
  return (
    <>
      <div className=' outline-none flex gap-x-[10px]  items-center'>
               <input type="checkbox" id="checkbox" className='desktop:h-[30px] desktop:w-[30px] h-[24px] w-[24px] inline-block bg-white-3 border border-white-4 cursor-pointer'/>
               <label htmlFor='checkbox' className=' inline-block font-normal leading-5 text-grey-3'>{checkText}</label>
            </div>

            <div className='flex justify-center'>
               <button type='submit' className=' bg-orange-8 text-white-1 rounded-[6px] w-full desktop:py-[18px] desktop:px-[20px] py-[14px] px-[20px] inline-block text-[14px] desktop:text-[18px] leading-[21px] desktop:leading-[27px]'>{type}</button>
            </div>

            <div className='relative h-6 flex items-center gap-[12px]'>
               <div className=' border-white-5 bg-white-5 h-px w-1/2'></div>
               <span className='font-normal text-grey-2 bg-white-1 inset-x-1/2 w-[20px] h-[21px]'>OR</span>
               <div className=' border-white-5 bg-white-5 h-px w-1/2'></div>
            </div>

            <div className='flex items-center'>
               <div className=' text-center bg-white-3 text-white-1 border border-white-4 rounded-[6px] w-full desktop:py-[20px] desktop:px-[24px] py-[16px] px-[24px] flex justify-center items-center gap-[14px]'>
                  <div className='w-[35px] h-[30px] overflow-hidden inline-block'>
                     <img src={GoogleLogo} className='inline-block tablet:mr-3 mr-2 w-full'/>
                  </div>
                  <button type='submit' className=' text-grey-7 font-medium leading-[21px] desktop:leading-[27px] text-[14px] desktop:text-[18px]'>{type} with Google</button>
               </div>
            </div>

            <div className=' text-center grid gap-[6px]'> 
               <span className=' font-normal leading-[24px] desktop:leading-[27px]'>{gotoText}<Link to={`/${goto.toLowerCase()}`} className='font-medium leading-6 underline'> {goto}</Link><img src={ArrowUpRight} className=' inline-block w-[11px] h-[11px] ml-2'/></span>
            </div>
    </>
  )
}
