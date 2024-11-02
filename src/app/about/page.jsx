/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { CubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-black">
      {/* about-hero-section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Find Your Perfect
                  <br />
                  Laptop
                  <br />
                  Comparison Tool
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
                  Compare the latest laptops and make an informed decision.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg transition-colors duration-200"
                  >
                    <Link href="/compare">Start</Link>
                  </Button>
                </div>
              </div>

              {/* Image/Illustration */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Purple Blur */}
                  <div
                    className="absolute inset-0 bg-purple-700 rounded-full blur-3xl opacity-50"
                    style={{ zIndex: 1 }}
                  ></div>
                  {/* Main Laptop Illustration */}
                  <div className="relative z-10">
                    <Image
                      src="/tool.png"
                      alt="Laptop comparison tool illustration"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20"></div>
      </section>

      {/* Discover Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Purple Gradient Background */}
        <div className="absolute inset-0 bg-purple-900/20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-lg font-semibold text-white mb-4">Discover</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Compare Top Models and Make
              <br />
              an Informed Decision
            </h3>
            <p className="text-gray-400 text-lg">
              Our comprehensive laptop comparison tool allows you to easily
              evaluate the features, performance, and pricing of the latest
              models. Choose the laptops youre interested in, compare them side
              by side, and confidently find the perfect fit for your needs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            {/* Left Features */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Portraits.png"
                    alt="Compare icon"
                    width={64}
                    height={64}
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  Compare
                </h4>
                <p className="text-gray-400 lg:px-20">
                  Easily evaluate features, performance, and pricing of the
                  latest models.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Portraits.png"
                    alt="Compare icon"
                    width={64}
                    height={64}
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  Performance
                </h4>
                <p className="text-gray-400 lg:px-20">
                  Make informed decisions based on the performance metrics of
                  different laptops.
                </p>
              </div>
            </div>
            {/* Center Image */}
            <div className="relative">
              <div className="relative w-full aspect-square">
                <Image
                  src="/discover.png"
                  alt="Laptop Comparison"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Portraits.png"
                    alt="Compare icon"
                    width={64}
                    height={64}
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  Pricing
                </h4>
                <p className="text-gray-400 lg:px-20">
                  Compare the pricing details of various laptops to find the
                  best value.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Portraits.png"
                    alt="Compare icon"
                    width={64}
                    height={64}
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  Choose
                </h4>
                <p className="text-gray-400 lg:px-20">
                  Choose the laptops you're interested in and compare them side
                  by side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
        {/* Purple Gradient Background */}
        <div className="absolute inset-0 bg-purple-900/20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            {/* Center Image */}
            <div className="relative order-first lg:ml-0 xl:ml-40">
              <div className="relative w-full max-w-[80%] mx-auto lg:max-w-none aspect-square">
                <Image
                  src="/comparison.png"
                  alt="Laptop Comparison"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent"></div>
              </div>
            </div>
            {/* Right Features */}
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Image
                  src="/Portraits.png"
                  alt="Compare icon"
                  width={64}
                  height={64}
                  className="w-8 h-8"
                />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">
                Discover the Latest Models and <br />
                Their Unique Selling Points
              </h4>
              <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
                Stay up-to-date with the newest laptops on the market and learn about their standout features that set them apart from the competition.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
