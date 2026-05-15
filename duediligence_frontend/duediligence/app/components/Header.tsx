"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);


  const navLinkClass = (path) =>
  `transition ${
    pathname === path
      ? "text-slate-300 font-bold border-b-2 "
      : "text-sky-50 hover:text-white/70"
  }`;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDashboardOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 shadow-sm bg-cyan-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex gap-4 items-center ">
          <Link
            href="/"
         
          >
               <Image
      src="/images/logo.jpeg"
      alt="Duediligence Logo"
      width={48}
      height={48}
      className="rounded-full object-cover"
    />
    

          </Link>
        <Link
  href="/"
  className="inline-block font-bold text-lg bg-gradient-to-r from-white via-white/60 to-cyan-400 bg-clip-text text-transparent"
>
  DueDiligence
</Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-8 ">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/buy" className={navLinkClass("/buy")}>
            Buy
          </Link>
          <div className="relative" ref={dropdownRef}>
        <button
    onClick={() => setIsDashboardOpen(!isDashboardOpen)}
    className="text-white flex items-center gap-1 hover:text-teal-200 transition focus:outline-none"
  >
    Products {isDashboardOpen ? "▴" : "▾"}
  </button>

  {isDashboardOpen && (
    <div className="absolute left-0 mt-2 w-48 bg-sky-950 rounded-md shadow-2xl border border-teal-500/70 z-50 flex flex-col overflow-hidden">
      
      <Link
        href="/"
        className="block w-full px-4 py-2 text-slate-50 hover:bg-blue-300/40 hover:text-black transition"
      >
        Products 1
      </Link>

      <Link
        href="/"
        className="block w-full px-4 py-2 text-slate-50 hover:bg-blue-300/40 hover:text-black transition"
      >
        Products 2
      </Link>

    </div>
  )}
</div>
          <Link
            href="/about"
           className={navLinkClass("/about")}
          >
            About
          </Link>
          <Link
            href="/hire"
           className={navLinkClass("/hire")}
          >
            Hire-Teacher
          </Link>
          <Link
            href="/services"
            className={navLinkClass("/services")}
          >
            Services
          </Link>
          <Link
            href="/login"
         className={navLinkClass("/login")}
          >
            Login
          </Link>
          <Link
            href="/register"
    className={navLinkClass("/register")}
          >
            Register
          </Link>
          <Link
            href="/contact"
           className={navLinkClass("/contact")}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button (Hidden on Desktop) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-50 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-sky-950 border-b border-gray-200 p-4 space-y-4 flex flex-col shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Home
          </Link>
          <Link
            href="/buy"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Buy
          </Link>
          <div className="flex flex-col">
            <button
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
              className="text-gray-50 font-medium text-left flex justify-between items-center"
            >
              Products {isDashboardOpen ? "▴" : "▾"}
            </button>

            {isDashboardOpen && (
              <div className="absolute mt-2 ml-4 p-2 bg-sky-900/80 rounded-lg border-l-2 border-teal-400">
                <Link href = "/" className=" block text-sky-100 text-sm py-1">Products 1</Link>
                <Link href = "/" className=" block text-sky-100 text-sm py-1">Products 2</Link>
              </div>
            )}
          </div>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            About
          </Link>
          <Link
            href="/hire"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Hire-Teacher
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Services
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Register
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-50 font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
