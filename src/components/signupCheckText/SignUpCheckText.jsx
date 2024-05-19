import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpCheckText() {
  return (
    <div>
      <span>I agree with </span>
      <Link to='/' className=' underline'>Term of Use</Link>
      <span> and </span>
      <Link to='/' className=' underline'>Privacy Policy</Link>
    </div>
  )
}