import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-purple-700">
        Lap<span className="text-white">Insight</span>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/compare" className="hover:text-purple-700 transition-colors">Compare</Link></li>
          <li><Link href="/find-laptops" className="hover:text-purple-700 transition-colors">Find Laptops</Link></li>
          <li><Link href="/features" className="hover:text-purple-700 transition-colors">Features</Link></li>
          <li><Link href="/recommendation" className="hover:text-purple-700 transition-colors">Recommendation</Link></li>
        </ul>
      </nav>
    </header>
  )
}