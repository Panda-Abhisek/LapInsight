import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">LapInsight</h3>
            <p className="text-gray-400">Address: Berhampur, Ganjam, Odisha, IN, 761008</p>
            <p className="text-gray-400">Contact: lapinsight404@gmail.com</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-purple-700 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-700 transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">Facebook</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-700 transition-colors">LinkedIn</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 LapInsight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}