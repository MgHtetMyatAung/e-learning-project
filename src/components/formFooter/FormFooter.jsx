import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, GoogleLogo } from '../../assets/icons'

export default function FormFooter({type,goto,checkText,gotoText}) {
  return (
    <>
      <div className=' gap-y-2 mb-5 gap-2 outline-none flex items-center'>
               <input type="checkbox" id="checkbox" className='h-6 w-6 inline-block bg-white-3 border-white-4'/>
               <label htmlFor='checkbox' className=' inline-block font-normal leading-6 text-grey-3'>{checkText}</label>
            </div>

            <div className='mb-5'>
               <button type='submit' className=' bg-orange-8 text-white-1 rounded-lg w-full py-3 px-4'>{type}</button>
            </div>
            <div className='mb-5 relative h-6 flex items-center'>
               <div className=' border-white-5 bg-white-5 h-px w-1/2'></div>
               <span className='font-normal text-grey-2 bg-white-1 inset-x-1/2 px-3'>OR</span>
               <div className=' border-white-5 bg-white-5 h-px w-1/2'></div>
            </div>

            <div className=' text-center bg-white-3 text-white-1 rounded-lg w-full py-4 px-6 text-sm mb-5'>
               <img src={GoogleLogo} className='w-10 inline-block mr-3'/>
               <button type='submit' className=' text-grey-7 font-medium leading-6'>{type} with Google</button>
            </div>

            <div className=' text-center'> 
               <span className=' font-normal leading-6'>{gotoText}<Link to={`/${goto.toLowerCase()}`} className='font-medium leading-6 underline'> {goto}</Link><img src={ArrowUpRight} className=' inline-block w-3 h-3 ml-2'/></span>
            </div>
    </>
  )
}
