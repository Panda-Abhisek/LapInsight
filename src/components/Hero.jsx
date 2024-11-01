import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black to-purple-900/20 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Text Content */}
        <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Find Your Perfect Laptop at the Best Price</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">Compare the latest options and make an informed decision.</p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-colors">
            Learn More
          </button>
        </div>

        {/* Image with Blur Background */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          {/* Purple Blur */}
          <div className="absolute inset-0 bg-purple-700 rounded-full blur-3xl opacity-50" style={{ zIndex: 1 }}></div>
          {/* Laptop Image */}
          <div className="relative" style={{ zIndex: 2 }}>
            <Image 
              src="/mac.png" 
              alt="Laptop" 
              width={500} 
              height={300} 
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}