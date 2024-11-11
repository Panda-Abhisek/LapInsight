import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-purple-900/20 to-purple-900/20 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Find your perfect laptop today!
        </h2>
        <p className="text-xl mb-8">
          Discover the latest laptops with cutting-edge features and exceptional
          performance.
        </p>
        <Link href="/about" passHref>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition-colors">
            About
          </button>
        </Link>
      </div>
    </section>
  );
}
