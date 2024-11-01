/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-purple-900/20 to-purple-900/20 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
        <div className="bg-purple-900/20 bg-opacity-50 p-8 rounded-lg">
          <p className="text-xl mb-6">&quot;I am extremely satisfied with my new laptop. It has all the features I need for my work. Highly recommended!"</p>
          <div className="flex items-center justify-center">
            <Image src="/Review1.png" alt="John Doe" width={64} height={64} className="rounded-full mr-4" />
            <div className="text-left">
              <p className="font-semibold">John Doe</p>
              <p className="text-purple-400">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}