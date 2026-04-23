"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 shadow-sm bg-cyan-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-sky-200">
            Duediligence
          </Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-sky-50 hover:underline transition">Home</Link>
          <Link href="/buy" className="text-sky-50 hover:underline transition">Buy</Link>
          <Link href="/product" className="text-sky-50 hover:underline transition">Product</Link>
          <Link href="/about" className="text-sky-50 hover:underline transition">About</Link>
          <Link href="/services" className="text-sky-50 hover:underline transition">Services</Link>
          <Link href="/login" className="text-sky-50 hover:underline transition">Login</Link>
          <Link href="/register" className="text-sky-50 hover:underline transition">Register</Link>
          <Link href="/contact" className="text-sky-50 hover:underline transition">Contact</Link>
        </div>

        {/* Hamburger Button (Hidden on Desktop) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-50 hover:text-blue-600 focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-sky-950 border-b border-gray-200 p-4 space-y-4 flex flex-col shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Home</Link>
          <Link href="/buy" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Buy</Link>
          <Link href="/product" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Product</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Services</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Login</Link>
          <Link href="/register" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Register</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-50 font-medium">Contact</Link>
        </div>
      )}
    </header>
  );
}