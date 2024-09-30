import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='sticky top-0 bg-[#313030] text-[#f7d185] shadow-md z-50'>
      <div className='flex justify-between items-center mx-auto p-3'>
        {/* Logo */}
        <Link to="/">
          <div className='flex items-center gap-2'>
            <img src="egg.svg" alt="egg" className='w-8' />
            <h1 className='font-bold text-lg'>CompEgg</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className='w-6 h-6 text-[#f7d185]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu Links */}
        <ul className='hidden md:flex gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt='profile'
                  className='h-7 w-7 rounded-full object-cover'
                />
              ) : (
                'Sign In'
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-[#313030] p-4 border-t border-[#f7d185]'>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link to="/" className='block py-2 px-3 hover:bg-[#f7d185] hover:text-[#313030] transition-colors duration-300' onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className='block py-2 px-3 hover:bg-[#f7d185] hover:text-[#313030] transition-colors duration-300' onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/dashboard" className='block py-2 px-3 hover:bg-[#f7d185] hover:text-[#313030] transition-colors duration-300' onClick={() => setMenuOpen(false)}>Dashboard</Link>
            </li>
            <li>
              <Link to="/profile" className='block py-2 px-3 hover:bg-[#f7d185] hover:text-[#313030] transition-colors duration-300' onClick={() => setMenuOpen(false)}>
                {currentUser ? (
                  <img
                    src={currentUser.profilePicture}
                    alt='profile'
                    className='h-7 w-7 rounded-full object-cover inline-block'
                  />
                ) : (
                  'Sign In'
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
