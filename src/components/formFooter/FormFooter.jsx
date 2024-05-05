import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from '../../assets/icons'

export default function FormFooter({type,goto,checkText}) {
  return (
    <>
      <div className=' gap-y-2 mb-5 gap-2 outline-none flex items-center'>
               <input type="checkbox" id="checkbox" className=' h-6 w-6 inline-block outline-none bg-white-3 border-white-4'/>
               <label htmlFor='checkbox' className=' inline-block text-base font-normal leading-6 text-grey-3'>{checkText}</label>
            </div>

            <div className='mb-5'>
               <button className=' bg-orange-8 text-white-1 rounded-lg w-full py-3 px-4 text-sm'>{type}</button>
            </div>
            <div className='flex justify-between mb-3'>
               <hr className=' text-grey-1'/>
               <span className=' font-normal text-base'>OR</span>
               <hr className=' text-grey-1 inline-block'/>
            </div>

            <div className=' text-center bg-white-3 text-white-1 rounded-lg w-full py-4 px-6 text-sm mb-5'>
               <span className=' text-grey-7 font-medium text-sm leading-6'>{type} with Google</span>
            </div>

            <div className=' text-center'> 
               <span className=' font-normal leading-6 text-base'>Don't have an account?<Link to={`/${type.toLowerCase()}`} className=' text-base font-medium leading-6 underline'> {goto}</Link><img src={ArrowUpRight} className=' inline-block w-3 h-3 ml-2'/></span>
            </div>
    </>
  )
}
