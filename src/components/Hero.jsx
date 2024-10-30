import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4 text-white">Find Your Perfect Laptop at the Best Price</h1>
          <p className="text-xl mb-8 text-gray-300">Compare the latest options and make an informed decision.</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Learn More
          </button>
        </div>

        {/* Image with Blur Background */}
        <div className="relative hidden lg:block">
          {/* Purple Blur */}
          <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-[#7e22ce] rounded-full blur-3xl opacity-50"></div>
          {/* Laptop Image */}
          <Image src="/mac.png" alt="Laptop" width={500} height={300} />
        </div>
      </div>
    </section>
  )
}
