import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux';

export const Header = () => {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='sticky top-0 bg-[#313030] text-[#f7d185] shadow-md z-50'>
      <div className='flex justify-between items-center  max-w-7xl mx-auto p-3'>
        <Link to="/">
          <div className='flex items-center gap-2'>
            <img src="egg.svg" alt="egg" className='w-8' />
            <h1 className='font-bold'>CompEgg</h1>
          </div>
        </Link>
        <ul className='flex gap-4'>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
          { currentUser ? (
            <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover'/>
          ):(

            <li>Sign In</li>
          )}
          </Link>
        </ul>
      </div>
    </div>
  )
}
