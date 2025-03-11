"use client"; // For Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between p-4 md:p-5 px-6 md:px-10 lg:px-16 xl:px-20 3xl:px-32">

        {/* Left Side: Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex flex-wrap items-center text-base gap-4 lg:gap-6 xl:gap-8">
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">My Account</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Documentation</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Discover</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">New World</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Community</Link>
        </nav>

        {/* Right Side: Buttons (Shown on Larger Screens) */}
        <div className="hidden md:flex items-center gap-3 md:gap-4">
          {/* <button className="relative overflow-hidden bg-gray-300 text-black px-8 py-2 rounded-full text-lg transition-all duration-700 before:content-[''] before:absolute before:top-0 before:left-full before:w-full before:h-full before:bg-gray-300 before:skew-x-12 before:transition-all before:duration-700 hover:before:left-0 hover:bg-transparent">
            LAUNCH MAP
          </button> */}
          <button class="relative overflow-hidden bg-gray-300 text-black text-lg  cursor-pointer transition-all duration-[700ms] ease-in-out px-8 py-2.5 rounded-full before:content-[''] before:absolute before:h-full before:w-0 before:bg-transparent before:skew-x-12 before:z-[-1] before:transition-all before:duration-[700ms] before:ease-in-out before:-right-10 before:top-0 hover:before:w-[160%] hover:bg-transparent hover:text-red-500 hover:border-2 hover:border-solid hover:border-red-500">
            LAUNCH MAP
          </button>

          <button className="bg-transparent border-2 border-white text-white py-1 px-4 md:px-5 lg:px-6 rounded text-xs md:text-sm lg:text-base transition duration-300 hover:bg-white hover:text-black">
            CONNECT
          </button>
        </div>

        {/* Mobile Toggle Button (Right-Aligned) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden absolute top-4 right-6"
        >
          <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24">
            <path stroke="white" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Sidebar Menu (Opens from Right) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] md:w-[350px] bg-black text-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } z-50 shadow-lg`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path stroke="white" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Logo at Top Center */}
        <div className="flex justify-center mt-10">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>

        {/* Navigation Links (For Mobile Sidebar) */}
        <nav className="flex flex-col items-start px-6 mt-8 space-y-4">
          <Link href="#" className="text-white uppercase text-lg">The Deep</Link>
          <Link href="#" className="text-white uppercase text-lg">The Shadowborns</Link>
          <Link href="#" className="text-white uppercase text-lg">Our Token</Link>
        </nav>

        {/* Buttons */}
        <div className="flex flex-col px-6 mt-6 space-y-3">
          <button className="bg-white text-black text-lg py-2 rounded-md">
            Launch Map
          </button>
          <button className="border border-white text-white text-lg py-2 rounded-md">
            Whitepaper
          </button>
        </div>
      </div>
    </header>
  );
}
