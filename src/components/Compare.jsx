import React from 'react'
import Image from 'next/image'

export default function Compare() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">Discover the Perfect Laptop for You</h2>
          <p className="text-lg mb-8">Our laptops offer a range of benefits, making them the ideal choice for any user. From powerful processors to ample storage, we have the perfect laptop to meet your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Powerful Performance</h3>
              <p>Experience lightning-fast processing speeds and seamless multitasking with our high-performance laptops.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sleek Design</h3>
              <p>Our laptops combine style with functionality, featuring sleek designs that are perfect for any setting.</p>
            </div>
          </div>
          <button className="mt-8 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2">
          <Image src="/Compare.png" alt="Laptop Comparison" width={600} height={400} className="object-cover" />
        </div>
      </div>
    </section>
  )
}