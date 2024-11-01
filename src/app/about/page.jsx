'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div>
    <section className="relative bg-black min-h-[600px] overflow-hidden">
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

                {/* Decorative Elements
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20"></div>
    </section>
    
    
    </div>
  );
}
