"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { ChevronLeft, ChevronRight, UserCog, ClipboardList, ShieldCheck, CalendarCog } from "lucide-react";






const slides = [
  {
    image: "/images/image-2.avif",
    title: "Verify with Confidence",
    sub: "Comprehensive academic analysis at your fingertips."
  },
  {
    image: "/images/image-4.jpg",
    title: "Streamlined Workflow",
    sub: "Manage your school assets and activities in one unified dashboard."
  },
  {
    image: "/images/image-5.webp",
    title: "Secure & Compliant",
    sub: "The highest standards of security for your sensitive academic info."
  }
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  // This handles the automatic sliding logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
    {/* // hero section */}

      <section className="relative h-[600px] w-full overflow-hidden">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* The Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="h-full w-full object-cover"
      />
      
      {/* The Tint/Overlay */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* The Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
        <p className="text-lg md:text-xl text-slate-100">{slide.sub}</p>
      </div>
    </div>
  ))}
<button 
          onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
          className=" hidden sm:block absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition"
        >
          <ChevronLeft size={48} />
        </button>
        <button 
          onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
          className="hidden sm:block absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition"
        >
          <ChevronRight size={48} />
        </button>
</section>
{/* hero ends */}

<div className = "text-center  ">

  <h1 className='text-slate-800 text-center text-3xl font-bold mt-10 '>Enhancing The Education Sector</h1>
<hr className="my-3 border-blue-400/90 max-w-xl mx-auto" />

<p className='text-[17px] sm:text-xl'>Duediligence enhances productivity and efficiency in managing school records and activities</p>
</div>
<main className="max-w-6xl mx-auto px-4 py-10">
  {/* Main Grid: 1 column on mobile, 2 columns on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
    
 
    <div className="flex flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-emerald-400/30 shadow-xl hover:shadow-emerald-700/30 transition-shadow duration-300">
      <div className="flex-shrink-0">
        <UserCog size={60} className="text-emerald-500 transition-transform hover:scale-110" />
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-emerald-600 mb-2">
          Allow Access to Various users
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Teachers, administrators and students can access duediligence.
          Manage subjects, classes, and topics, register staff, view timetables, and schedule meetings.
        </p>
      </div>
    </div>

 
    <div className="flex flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-cyan-400/30 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-emerald-700/30 transition-shadow duration-300">
      <div className="flex-shrink-0">
        <ClipboardList size={60} className="text-cyan-500 transition-transform hover:scale-110" />
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-cyan-600 mb-2">
          Take records Instantly
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Create and manage exams for your students and view results. 
          Allows CBT exam setups, score recording, and attendance management for staff and students.
        </p>
      </div>
    </div>


<div className='group flex flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-red-700/30 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-red-500/40 transition-shadow duration-300'>
 <div className='flex-shrink-0'>
  <ShieldCheck size = {60} className = "text-red-500 transition-transform group-hover:scale-110" />
 </div>
<div>
  <h2 className='text-xl font-extrabold text-red-600 mb-2'>User Authentication</h2>
  <p className='text-slate-700 leading-relaxed'>Duediligence is well protected and it's features allow exams to be properly guarded and inaccessible
    from malpractice. It allows teachers to set grades without fear of loss or tampering it's features  allow for file protection.
  </p>
</div>
</div>
   
  <div className='flex flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-amber-700/30 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-amber-500/40 transition-shadow duration-300'>
 <div className='flex-shrink-0'>
  <CalendarCog size = {60} className = "text-amber-500 transition-transform hover:scale-110" />
 </div>
<div>
  <h2 className='text-xl font-extrabold text-amber-600 mb-2'>Improved Organisation</h2>
  <p className='text-slate-700 leading-relaxed'>
    Stay focused and organised with duediligence. Manage time and have exam records, scores and so on ready within seconds. Save time for 
    other activities outside school work. 
  </p>
</div>
</div>
   
    
  </div>
</main>


            <div className="relative z-10 text-center py-20 px-8 flex-grow bg-slate-800/90 overflow-hidden  border border-slate-700">
    <div 
  className="absolute inset-0 z-0 animate-kenburns bg-cover bg-center opacity-40"
  style={{ backgroundImage: `url('https://live.staticflickr.com/65535/50963545897_887e881db5_o.png')` }}
/>

<div className='relative z-10 '>
  <p className='text-white mb-4 font-bold text-2xl'>
   Get started with duediligence
  </p>
  <Link href = "/register">
  <button className=' text-white px-4 py-2 bg-emerald-500 hover:bg-emerald-800 rounded-xl transition-colors duration-500 ease-in-out'>Sign-Up now</button>
</Link>
</div>
</div>

<div className='py-20 px-8 text-center'>
  <h1 className='text-center font-extrabold text-3xl text-slate-600'>Become a duediligence Reseller</h1>
  <p className='font-medium mt-2 text-xl'>Earn cash by reselling/advertising duediligence to family and friends</p>
    <Link href = "/contact">
  <button className=' text-white px-4 py-2 mt-3 bg-cyan-500 font-bold hover:bg-cyan-800 rounded-sm transition-colors duration-500 ease-in-out'>Partner with us</button>
</Link>

</div>

</main>


   
    
  );
}