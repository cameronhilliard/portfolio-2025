"use client"
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button id="darkbutton"
      onClick={toggleDarkMode}
      className="rounded-md  font-mont font-bold text-gray-900 dark:text-gray-100"
    >
      {darkMode ? <SunIcon className='h-8 w-8 pl-2  text-accent'/> : <MoonIcon className='h-8 w-8 pl-2 text-accent'/>}
    </button>
  );
}