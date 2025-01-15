// components/BasicMenu.js
"use client"
import React, { useState } from 'react';

const BasicMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        className="p-2 bg-gray-700 text-white font-mont rounded-md"
        onClick={toggleMenu}
      >
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Menu Items */}
      {menuOpen && (
        <div className="mt-4 bg-gray-200 rounded-md shadow-lg p-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasicMenu;
