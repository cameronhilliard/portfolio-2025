import React from 'react'
import Link from 'next/link'
import BasicMenu from './Basicmenu'
import Menu from './Menu'
import DarkModeToggle from './Darkmode'


const Header = () => {
  return (
    <header className='flex flex-row  justify-between sticky top-0'>
        <h1 className='text-accent  font-bold font-mont text-lg mt-12 ml-12 '>Cameron Hilliard</h1>
        
        <nav className='flex items-center mt-12 mr-12 space-x-2'>
        <DarkModeToggle />
          
        <Menu />
          
           
        </nav>
        
    </header>
  )
}

export default Header