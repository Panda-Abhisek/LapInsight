'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: "How to compare laptops?",
    answer: "To compare laptops, simply select up to four laptops and click on the 'Compare' button. You will be able to see a side-by-side comparison of their specs, prices, and user ratings."
  },
  {
    question: "What are the key specs?",
    answer: "The key specs include CPU, RAM, storage, price, and more. These specifications help you make an informed decision based on your computing needs."
  },
  {
    question: "Is the website responsive?",
    answer: "Yes, our laptop comparison page is designed to be responsive and user-friendly on both desktop and mobile devices."
  },
  {
    question: "How can I contact you?",
    answer: "If you have questions, please feel free to contact us. Our team will be happy to assist you."
  },
  {
    question: "What is the price range?",
    answer: "The price range of laptops on our comparison page varies depending on the model and specifications. You can find options to fit any budget."
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-purple-700">
      <button
        className="flex justify-between w-full px-4 py-3 text-left text-white bg-black hover:bg-purple-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-purple-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-purple-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pt-4 pb-2 text-gray-300 bg-purple-900 bg-opacity-50">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}