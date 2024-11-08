"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Mock data for laptop options
const laptopOptions = [
  'MacBook Pro 13"',
  "Dell XPS 15",
  "Lenovo ThinkPad X1 Carbon",
  "HP Spectre x360",
  "ASUS ROG Zephyrus G14",
  "Acer Swift 5",
];

export default function Component() {
  const [firstProduct, setFirstProduct] = useState("");
  const [secondProduct, setSecondProduct] = useState("");
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleCompare = (e) => {
    e.preventDefault();
    console.log("Comparing:", firstProduct, "vs", secondProduct);
  };

  const handleClickOutside = (event) => {
    if (
      firstInputRef.current &&
      !firstInputRef.current.contains(event.target)
    ) {
      setShowFirstDropdown(false);
    }
    if (
      secondInputRef.current &&
      !secondInputRef.current.contains(event.target)
    ) {
      setShowSecondDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderDropdown = (options, setProduct, setShowDropdown) => (
    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
      {options.map((option, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-800"
          onClick={() => {
            setProduct(option);
            setShowDropdown(false);
          }}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gradient-to-b from-black via-purple-900/20 to-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <h1 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-3 sm:mb-4">
          Compare Laptops
        </h1>

        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
          Select two laptops and click the &quot;Compare&quot; button. After
          that, you will be able to pick their configurations (such as CPU, RAM,
          etc.) on the comparison page itself.
        </p>

        <form onSubmit={handleCompare} className="space-y-4 sm:space-y-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="relative" ref={firstInputRef}>
              <input
                type="text"
                value={firstProduct}
                onChange={(e) => setFirstProduct(e.target.value)}
                onFocus={() => setShowFirstDropdown(true)}
                placeholder="Enter the name of the first product to search"
                className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 text-gray-800"
              />
              {showFirstDropdown &&
                renderDropdown(
                  laptopOptions,
                  setFirstProduct,
                  setShowFirstDropdown
                )}
            </div>

            <div className="text-center text-base sm:text-lg font-semibold text-purple-700">
              VS
            </div>

            <div className="relative" ref={secondInputRef}>
              <input
                type="text"
                value={secondProduct}
                onChange={(e) => setSecondProduct(e.target.value)}
                onFocus={() => setShowSecondDropdown(true)}
                placeholder="Enter the name of the second product to search"
                className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
              />
              {showSecondDropdown &&
                renderDropdown(
                  laptopOptions,
                  setSecondProduct,
                  setShowSecondDropdown
                )}
            </div>
          </div>

          
            <button
              type="submit"
              className="w-full sm:w-auto bg-purple-700 text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
            >
              COMPARE
            </button>
          
        </form>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
          <span className="text-red-600">*</span>
          Haven&apos;t found the laptop you&apos;re looking for? Let us know via
          the{" "}
          <a href="#" className="text-purple-400 hover:underline">
            feedback form
          </a>
          .
        </p>
      </div>
    </div>
  );
}
