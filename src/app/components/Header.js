"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Menu from './Menu'
import DarkModeToggle from './Darkmode'



const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <header className={`flex flex-row  justify-between sticky top-0 ${
        isScrolled
          ? "bg-gray-800 bg-opacity-90 backdrop-blur-sm dark:bg-black/30 bg-white/30 shadow-lg text-white"
          : "bg-transparent text-gray-900"
      }`} 
    >
      <h1 className='text-accent  font-bold font-mont text-lg mt-12 ml-12 mb-8 '>Cameron Hilliard</h1>
        <nav className='flex items-center mt-12 mr-12 mb-8 space-x-2'>
          <DarkModeToggle />
          <Menu />
        </nav>
    </header>
  )
}

export default Header