import React from 'react'
import Link from 'next/link'

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Compare Laptops</h1>
        <p className="text-lg mb-8">Select laptops to compare their specifications and features.</p>
        
        {/* Placeholder for laptop comparison functionality */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-4">Laptop comparison tool coming soon!</p>
          <Link 
            href="/find-laptops" 
            className="inline-block bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors"
          >
            Find Laptops to Compare
          </Link>
        </div>
      </main>
    </div>
  )
}