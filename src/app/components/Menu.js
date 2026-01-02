"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import DarkModeToggle from './Darkmode';

const Menu = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    { name: "Home", href: "#homepage" },
    { name: "About", href: "#aboutpage" },
    { name: "Areas", href: "#skillspage" },
    { name: "Certificates", href: "#certspage" },
    { name: "Contact", href: "#contactpage" },
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative">
      <button
        className="rounded-xl p-2 transition hover:bg-[#EDEDED]/5 focus:outline-none focus:ring-2 focus:ring-[#C86A2A]/40"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        {openMenu ? (
          <XMarkIcon className="h-7 w-7 text-[#C86A2A]" />
        ) : (
          <Bars3Icon className="h-7 w-7 text-[#C86A2A]" />
        )}
      </button>

      {openMenu && (
        <div
          className="
            absolute right-0 mt-3 z-50 w-56
            rounded-2xl border border-[#EDEDED]/10
            bg-[#0F0F10]/95 backdrop-blur
            shadow-[0_20px_60px_rgba(0,0,0,0.55)]
            animate-fade-down
          "
        >
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="
                    block px-5 py-3 font-mont text-sm tracking-wide
                    text-[#DADADA] transition
                    hover:text-[#EDEDED] hover:bg-[#EDEDED]/5
                  "
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C86A2A]/70" />
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>         
        </div>
      )}
    </div>
  );
};

export default Menu;
