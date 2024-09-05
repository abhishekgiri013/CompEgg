import {Link} from 'react-router-dom'
import React from 'react'

export const Header = () => {
  return (
    <div className='bg-[#313030] text-white '>
      <div className='flex justify-between items-center  max-w-7xl mx-auto p-3'>
        <Link to= "/">
      <h1 className='font-bold'>CompEgg</h1>
      </Link>
      <ul className='flex gap-4'>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/sign-in">
        <li>Sign In</li>
        </Link>
      </ul>
      </div>
    </div>
  )
}
