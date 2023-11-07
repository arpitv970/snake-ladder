import React from 'react'
import DarkMode from '../utility/DarkMode'
import UserMenu from '../utility/UserMenu'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='logo'>
        Snake Ladder
      </span>
      <span className='actionSpan'>
        <DarkMode />
        <UserMenu />
      </span>
    </nav>
  )
}

export default Navbar
