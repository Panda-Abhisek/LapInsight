import React from 'react'
import Image from 'next/image'

export default function DiscoverTech() {
  return (
    <section className="bg-gradient-to-b from-purple-900/20 to-purple-900/20 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image src="/Innovate.png" alt="Future Technology" width={600} height={400} className="object-cover" />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6">Discover the Future of Technology with Us</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">At our company, we pride ourselves on offering unique features and services that set us apart from competitors. With our expert support, we strive to exceed your expectations and deliver the best laptop experience possible. Join us on this exciting journey and discover the future of technology.</p>
          {/* <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  )
}