"use client"; // For Next.js App Router (if using App directory)

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between p-4 md:p-5 px-6 md:px-10 lg:px-16 xl:px-20 3xl:px-32">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap items-center text-base gap-4 lg:gap-6 xl:gap-8">
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">My Account</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Documentation</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Discover</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">New World</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">Community</Link>
        </nav>

        {/* Right Side: Address & Toggle Button */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24">
                <path stroke="white" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24">
                <path stroke="white" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>

          <div className="text-white px-3 py-1 rounded-md text-xs md:text-sm lg:text-base">
            A35aVA....ADV4
          </div>
          <button className="bg-transparent border-2 border-white text-white py-1 px-4 md:px-5 lg:px-6 rounded text-xs md:text-sm lg:text-base transition duration-300 hover:bg-white hover:text-black">
            CONNECT
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black text-white flex flex-col items-start py-4 pl-6 space-y-3 w-full">
          <Link href="#" className="text-white uppercase text-sm">My Account</Link>
          <Link href="#" className="text-white uppercase text-sm">Documentation</Link>
          <Link href="#" className="text-white uppercase text-sm">Discover</Link>
          <Link href="#" className="text-white uppercase text-sm">New World</Link>
          <Link href="#" className="text-white uppercase text-sm">Community</Link>
        </nav>
      )}
    </header>

  );
}
