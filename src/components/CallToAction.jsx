import React from 'react'

export default function CallToAction() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Find your perfect laptop today!</h2>
        <p className="text-xl mb-8">Discover the latest laptops with cutting-edge features and exceptional performance.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
          Learn More
        </button>
      </div>
    </section>
  )
}