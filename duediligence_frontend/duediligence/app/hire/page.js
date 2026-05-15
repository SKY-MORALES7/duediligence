
import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground';
import Link from "next/link"




export default function Hire() {
    return (
 <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
      <ParticlesBackground />

      <h1 className="animate-gradient mb-5 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2 sm:text-extrabold sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        SignUp as Teacher or Employer
      </h1>

      <div className="flex flex-row gap-10">
        <Link
          href="/teacher-signup"
          className="px-6 py-4 border rounded-xl hover:bg-sky-700 hover:text-white transition border-fuchsia-500 hover:border-slate-950/60"
        >
          Teacher ➝
        </Link>

        <Link
          href="/employer-signup"
          className="px-6 py-4 border rounded-xl hover:bg-sky-700 hover:text-white transition border-fuchsia-500 hover:border-slate-950/60"
        >
          Employer ➝
        </Link>
      </div>
    </div>
    )
}