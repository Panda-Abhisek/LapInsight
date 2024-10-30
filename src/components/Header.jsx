'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-700">
          Lap<span className="text-white">Insight</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <NavItem href="/compare">Compare</NavItem>
            <NavItem href="/find-laptops">Find Laptops</NavItem>
            <NavItem href="/features">Features</NavItem>
            <NavItem href="/recommendation">Recommendation</NavItem>
          </ul>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <NavItem href="/compare" onClick={toggleMenu}>Compare</NavItem>
            <NavItem href="/find-laptops" onClick={toggleMenu}>Find Laptops</NavItem>
            <NavItem href="/features" onClick={toggleMenu}>Features</NavItem>
            <NavItem href="/recommendation" onClick={toggleMenu}>Recommendation</NavItem>
          </ul>
        </nav>
      )}
    </header>
  )
}

function NavItem({ href, children, onClick }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white hover:text-purple-700 transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}